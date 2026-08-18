// STATE MANAGEMENT
let currentOption = 'A';
let isLine4Selected = false;
let isCodeFixed = false;
let isStuckSimulated = false;

// ANNOTATIONS DATA FOR FACILITATOR
const annotations = {
    'A': {
        expect: "Kỳ vọng Tester tự nhận biết lỗi, bôi đen dòng 4 và chủ động bấm nút 'Hỏi AI giải thích'. Tester tự sửa code theo gợi ý.",
        watch: "Quan sát xem Tester có biết cách bôi đen dòng 4 không, có đọc hiểu nguyên nhân KeyError không, hay loay hoay tìm nút sửa tự động.",
        noExplain: "Không giải thích ý nghĩa nút 'Bôi đen dòng 4' hay hướng dẫn Tester cách sửa code Python."
    },
    'B': {
        expect: "Kỳ vọng Tester bấm 'Run Test', gặp lỗi và chủ động tương tác với 2 câu hỏi gợi mở của Socratic Mentor để tự suy luận.",
        watch: "Quan sát Tester có đọc kỹ 2 câu hỏi trắc nghiệm không, có dùng nút thoát khẩn cấp 'Skip Quiz' khi cảm thấy phiền phức không.",
        noExplain: "Không nhắc Tester bấm Run Test hay chọn sẵn đáp án A/B cho câu hỏi gợi mở."
    },
    'C': {
        expect: "Kỳ vọng Tester bấm 'Giả lập kẹt 45s' (hoặc chạy lỗi), đọc bản thảo Diff code AI đề xuất và quyết định bấm Apply Patch hoặc Dismiss.",
        watch: "Quan sát Tester có đọc phần Diff màu xanh/đỏ hay chỉ nhắm mắt bấm 'Apply Patch', và Tester có dùng nút 'Undo' khi đổi ý không.",
        noExplain: "Không gợi ý Tester bấm Apply Patch hay giải thích cách hoạt động của thuật toán phát hiện kẹt ngầm."
    }
};

// INITIALIZE APP
document.addEventListener('DOMContentLoaded', () => {
    switchOption('A');
});

// OPTION SWITCHER
function switchOption(opt) {
    currentOption = opt;
    
    // Update Header buttons
    document.querySelectorAll('.btn-opt').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-opt-${opt.toLowerCase()}`).classList.add('active');

    // Update Panels
    document.querySelectorAll('.ai-panel').forEach(panel => panel.classList.add('hidden'));
    document.getElementById(`panel-opt-${opt.toLowerCase()}`).classList.remove('hidden');

    // Update Annotations
    const anno = annotations[opt];
    document.getElementById('annotation-content').innerHTML = `
        <strong>Tester Expectations:</strong> ${anno.expect}<br>
        <strong>Watch For:</strong> ${anno.watch}<br>
        <strong>Do Not Explain:</strong> <span style="color: #991b1b;">${anno.noExplain}</span>
    `;

    // Sync button visibilities
    document.getElementById('btn-simulate-stuck').style.display = (opt === 'C') ? 'inline-block' : 'none';
}

// RESET PROTOTYPE
function resetPrototype() {
    isLine4Selected = false;
    isCodeFixed = false;
    isStuckSimulated = false;

    // Reset Line 4 visual
    const line4 = document.getElementById('code-line-4');
    line4.innerHTML = `        cat = item['category']  <span class="comment"># <-- Lỗi xảy ra ở đây!</span>`;
    line4.classList.remove('code-line-selected');
    line4.classList.add('code-line-highlight');

    // Reset Terminal
    const term = document.getElementById('terminal-output');
    term.innerHTML = `<span class="status-neutral">Sẵn sàng. Nhấn "Run Test Cases" để chạy kiểm thử...</span>`;

    // Reset Option A
    document.getElementById('btn-ask-explainer').disabled = true;
    document.getElementById('opt-a-result').classList.add('hidden');
    document.getElementById('btn-select-line-4').innerText = '🔍 Bôi đen dòng 4 (Code lỗi)';

    // Reset Option B
    document.getElementById('opt-b-idle').classList.remove('hidden');
    document.getElementById('opt-b-quiz').classList.add('hidden');
    document.getElementById('b-step-1').classList.remove('hidden');
    document.getElementById('b-step-2').classList.add('hidden');
    document.getElementById('b-step-finish').classList.add('hidden');

    // Reset Option C
    document.getElementById('opt-c-idle').classList.remove('hidden');
    document.getElementById('opt-c-patch').classList.add('hidden');
    document.getElementById('btn-undo-patch').classList.add('hidden');

    alert("Đã reset trạng thái prototype về ban đầu!");
}

// TOGGLE SELECT LINE 4
function toggleSelectLine4() {
    isLine4Selected = !isLine4Selected;
    const line4 = document.getElementById('code-line-4');
    const btnAsk = document.getElementById('btn-ask-explainer');
    const btnSelect = document.getElementById('btn-select-line-4');

    if (isLine4Selected) {
        line4.classList.add('code-line-selected');
        btnAsk.disabled = false;
        btnSelect.innerText = '✅ Đã chọn dòng 4';
    } else {
        line4.classList.remove('code-line-selected');
        btnAsk.disabled = true;
        btnSelect.innerText = '🔍 Bôi đen dòng 4 (Code lỗi)';
    }
}

// RUN TESTS
function runTests() {
    const term = document.getElementById('terminal-output');

    if (isCodeFixed) {
        term.innerHTML = `
            <span class="status-passed">✓ Test Case 1 PASSED: calculate_category_revenue(orders) -> {'Electronics': 1200}</span><br>
            <span class="status-passed">✓ Test Case 2 PASSED: Empty data handled correctly</span><br>
            <span class="status-passed">🎉 BÀI TẬP HOÀN THÀNH 100%! Tất cả test cases đều PASSED.</span>
        `;
        return;
    }

    // FAILED CASE
    term.innerHTML = `
        <span class="status-failed">❌ FAILED Test Case 1: KeyError 'category'</span><br>
        <span style="color:#e2e8f0;">Traceback (most recent call last):<br>
        &nbsp;&nbsp;File "main.py", line 4, in calculate_category_revenue<br>
        &nbsp;&nbsp;&nbsp;&nbsp;cat = item['category']<br>
        KeyError: 'category'</span>
    `;

    // Trigger Option B if active
    if (currentOption === 'B') {
        document.getElementById('opt-b-idle').classList.add('hidden');
        document.getElementById('opt-b-quiz').classList.remove('hidden');
    }
}

// OPTION A LOGIC
function triggerOptionAExplainer() {
    document.getElementById('opt-a-result').classList.remove('hidden');
}

function resetOptionA() {
    document.getElementById('opt-a-result').classList.add('hidden');
}

// OPTION B LOGIC
function answerBStep1(isCorrect) {
    if (isCorrect) {
        document.getElementById('b-step-1').classList.add('hidden');
        document.getElementById('b-step-2').classList.remove('hidden');
    } else {
        alert("Chưa chính xác! Nhìn kỹ vào dữ liệu JSON mẫu: 'category' nằm bên trong object 'product'. Hãy thử chọn lại!");
    }
}

function answerBStep2(isCorrect) {
    if (isCorrect) {
        document.getElementById('b-step-2').classList.add('hidden');
        document.getElementById('b-step-finish').classList.remove('hidden');
    } else {
        alert("Cú pháp item.get('category') sẽ trả về None vì 'category' không nằm ở cấp ngoài. Hãy thử chọn cú pháp lồng item['product']['category']!");
    }
}

function applyBCodeFix() {
    isCodeFixed = true;
    const line4 = document.getElementById('code-line-4');
    line4.innerHTML = `        cat = item['product']['category']  <span class="comment"># ✅ Đã sửa code theo gợi ý Socratic</span>`;
    line4.style.background = "rgba(74, 222, 128, 0.2)";
    runTests();
}

function skipBQuiz() {
    alert("Bạn chọn mở khóa đáp án ngay! Dòng code đúng là: cat = item['product']['category']");
    applyBCodeFix();
}

// OPTION C LOGIC
function simulateStuck() {
    if (currentOption !== 'C') return;
    runTests();
    document.getElementById('opt-c-idle').classList.add('hidden');
    document.getElementById('opt-c-patch').classList.remove('hidden');
}

function applyCPatch() {
    isCodeFixed = true;
    const line4 = document.getElementById('code-line-4');
    line4.innerHTML = `        cat = item['product']['category']  <span class="comment"># ⚡ Code được đè bởi AI Auto-Patch</span>`;
    line4.style.background = "rgba(74, 222, 128, 0.2)";
    
    document.getElementById('opt-c-patch').classList.add('hidden');
    document.getElementById('btn-undo-patch').classList.remove('hidden');
    runTests();
}

function dismissCPatch() {
    document.getElementById('opt-c-patch').classList.add('hidden');
    document.getElementById('opt-c-idle').classList.remove('hidden');
}

function undoPatch() {
    isCodeFixed = false;
    const line4 = document.getElementById('code-line-4');
    line4.innerHTML = `        cat = item['category']  <span class="comment"># <-- Đã Undo về code lỗi cũ</span>`;
    line4.style.background = "rgba(239, 68, 68, 0.2)";
    
    document.getElementById('btn-undo-patch').classList.add('hidden');
    runTests();
}
