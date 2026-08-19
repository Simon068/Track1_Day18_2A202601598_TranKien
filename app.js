// STATE MANAGEMENT
let currentOption = 'A';
let currentTestCase = 1;
let isLine4Selected = false;
let isCodeFixed = false;
let isStuckSimulated = false;

// TEST CASES DATA FIXTURES
const testCasesData = {
    1: {
        name: "Test Case 1: Đơn hàng lồng nhau tiêu chuẩn",
        fixture: `{"orders": [{"product": {"name": "Laptop", "category": "Electronics"}, "price": 1200, "quantity": 1}]}`,
        expected: `{"Electronics": 1200}`
    },
    2: {
        name: "Test Case 2: Nhiều danh mục sản phẩm (Electronics & Apparel)",
        fixture: `{"orders": [{"product": {"name": "Laptop", "category": "Electronics"}, "price": 1200, "quantity": 1}, {"product": {"name": "Mouse", "category": "Electronics"}, "price": 25, "quantity": 2}, {"product": {"name": "Shirt", "category": "Apparel"}, "price": 50, "quantity": 3}]}`,
        expected: `{"Electronics": 1250, "Apparel": 150}`
    },
    3: {
        name: "Test Case 3: Xử lý danh mục sản phẩm bổ sung",
        fixture: `{"orders": [{"product": {"name": "Headphones", "category": "Electronics"}, "price": 100, "quantity": 2}, {"product": {"name": "Book", "category": "Education"}, "price": 20, "quantity": 5}]}`,
        expected: `{"Electronics": 200, "Education": 100}`
    }
};

// ANNOTATIONS DATA FOR FACILITATOR
const annotations = {
    'A': {
        expect: "Kỳ vọng người học tự nhận biết vị trí lỗi, bôi đen dòng 4 và chủ động bấm nút 'Hỏi AI giải thích dòng 4'. Người học tự tay gõ sửa code.",
        watch: "Quan sát xem người học có biết cách bôi đen dòng code lỗi không, hay lúng túng đi tìm nút tự động sửa code.",
        noExplain: "Khuyến cáo người quan sát: KHÔNG hướng dẫn người học cách bôi đen dòng code hay cách sửa cú pháp Python."
    },
    'B': {
        expect: "Kỳ vọng người học bấm nút 'Chạy 3 Test Cases', thấy báo lỗi và hào hứng trả lời 2 câu hỏi trắc nghiệm chẩn đoán để tự suy luận ra cấu trúc lồng nhau.",
        watch: "Quan sát xem người học có đọc kỹ câu hỏi trắc nghiệm không hay bấm ngay nút khẩn cấp 'Bỏ qua câu hỏi'.",
        noExplain: "Khuyến cáo người quan sát: KHÔNG chọn hộ đáp án trắc nghiệm A/B cho người học."
    },
    'C': {
        expect: "Kỳ vọng người học bấm 'Giả lập kẹt 45s', đọc bảng xem trước mã nguồn (Diff Preview Đỏ/Xanh) và quyết định bấm Chấp nhận hoặc Từ chối.",
        watch: "Quan sát xem người học có đọc bản xem trước mã nguồn không hay nhắm mắt bấm duyệt ngay, và có dùng thử nút 'Undo 1-Click' khi đổi ý không.",
        noExplain: "Khuyến cáo người quan sát: KHÔNG gợi ý bấm nút Chấp nhận đè code hay giải thích thuật toán ngầm."
    }
};

// INITIALIZE APP
document.addEventListener('DOMContentLoaded', () => {
    selectTestCase(1);
    switchOption('A');
});

// SELECT TEST CASE
function selectTestCase(tcId) {
    currentTestCase = tcId;
    
    // Update tabs
    document.querySelectorAll('.tc-tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(`tc-tab-${tcId}`).classList.add('active');

    // Update Fixture Preview
    const tc = testCasesData[tcId];
    const fixtureBox = document.getElementById('data-fixture-box');
    fixtureBox.innerHTML = `
        <div class="data-fixture-title"><i class="fa-solid fa-code-commit"></i> ${tc.name}</div>
        <code>${tc.fixture}</code>
    `;
}

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
        <div style="margin-bottom:4px;"><strong>• Kỳ vọng quan sát:</strong> ${anno.expect}</div>
        <div style="margin-bottom:4px;"><strong>• Điểm cần theo dõi:</strong> ${anno.watch}</div>
        <div><strong>• Lưu ý quan sát viên:</strong> <span style="color: #f87171; font-weight:700;">${anno.noExplain}</span></div>
    `;

    // Sync button visibilities
    document.getElementById('btn-simulate-stuck').style.display = (opt === 'C') ? 'inline-flex' : 'none';
}

// RESET PROTOTYPE
function resetPrototype() {
    isLine4Selected = false;
    isCodeFixed = false;
    isStuckSimulated = false;

    // Reset Line 4 visual
    const line4 = document.getElementById('code-line-4');
    line4.innerHTML = `        cat = item['category']  <span class="comment"># <-- KeyError xảy ra ở đây!</span>`;
    line4.classList.remove('code-line-selected');
    line4.classList.add('code-line-highlight');

    // Reset Terminal
    const term = document.getElementById('terminal-output');
    const statusSummary = document.getElementById('test-summary-status');
    statusSummary.className = 'summary-neutral';
    statusSummary.innerText = 'Chưa chạy test';
    term.innerHTML = `<span class="status-neutral">Sẵn sàng. Nhấn "Chạy 3 Test Cases" để bắt đầu kiểm thử mã nguồn...</span>`;

    // Reset Option A
    document.getElementById('btn-ask-explainer').disabled = true;
    document.getElementById('opt-a-result').classList.add('hidden');
    document.getElementById('btn-select-line-4').innerHTML = '<i class="fa-solid fa-arrow-pointer"></i> Bôi đen dòng 4 (Code nghi ngờ lỗi)';

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

    alert("Đã khôi phục toàn bộ trạng thái bài tập về ban đầu!");
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
        btnSelect.innerHTML = '<i class="fa-solid fa-check"></i> Đã chọn dòng 4 (Chờ hỏi AI)';
    } else {
        line4.classList.remove('code-line-selected');
        btnAsk.disabled = true;
        btnSelect.innerHTML = '<i class="fa-solid fa-arrow-pointer"></i> Bôi đen dòng 4 (Code nghi ngờ lỗi)';
    }
}

// RUN TESTS
function runTests() {
    const term = document.getElementById('terminal-output');
    const statusSummary = document.getElementById('test-summary-status');

    if (isCodeFixed) {
        statusSummary.className = 'summary-passed';
        statusSummary.innerText = '✓ 3/3 Test Cases PASSED (100%)';
        term.innerHTML = `
            <span class="status-passed">✓ Test Case 1 PASSED: Output -> {"Electronics": 1200}</span><br>
            <span class="status-passed">✓ Test Case 2 PASSED: Output -> {"Electronics": 1250, "Apparel": 150}</span><br>
            <span class="status-passed">✓ Test Case 3 PASSED: Output -> {"Electronics": 200, "Education": 100}</span><br>
            <span style="color:#4ade80; font-weight:bold; margin-top:6px; display:inline-block;">🎉 XUẤT SẮC! Tất cả 3 Test Cases đều vượt qua kiểm thử hoàn hảo.</span>
        `;
        return;
    }

    // FAILED CASE
    statusSummary.className = 'summary-failed';
    statusSummary.innerText = '❌ 3/3 Test Cases FAILED (KeyError)';
    term.innerHTML = `
        <span class="status-failed">❌ Test Case 1 FAILED: KeyError 'category' at Line 4</span><br>
        <span class="status-failed">❌ Test Case 2 FAILED: KeyError 'category' at Line 4</span><br>
        <span class="status-failed">❌ Test Case 3 FAILED: KeyError 'category' at Line 4</span><br>
        <span style="color:#cbd5e1; font-family:monospace; margin-top:4px; display:inline-block;">
        Traceback (most recent call last):<br>
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
        alert("Chưa chính xác! Nhìn kỹ vào dữ liệu JSON mẫu: 'category' nằm lồng bên trong đối tượng 'product'. Hãy chọn lại!");
    }
}

function answerBStep2(isCorrect) {
    if (isCorrect) {
        document.getElementById('b-step-2').classList.add('hidden');
        document.getElementById('b-step-finish').classList.remove('hidden');
    } else {
        alert("Cú pháp item.get('category') sẽ trả về None vì 'category' không nằm ở cấp ngoài cùng. Cú pháp đúng là lồng item['product']['category']!");
    }
}

function applyBCodeFix() {
    isCodeFixed = true;
    const line4 = document.getElementById('code-line-4');
    line4.innerHTML = `        cat = item['product']['category']  <span class="comment"># ✅ Đã sửa code đúng cấu trúc lồng</span>`;
    line4.style.background = "rgba(74, 222, 128, 0.2)";
    runTests();
}

function skipBQuiz() {
    alert("Bạn chọn mở khóa đáp án ngay! Cú pháp mã đúng là: cat = item['product']['category']");
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
    line4.innerHTML = `        cat = item['product']['category']  <span class="comment"># ⚡ Code được đè bởi AI Copilot</span>`;
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
    line4.innerHTML = `        cat = item['category']  <span class="comment"># <-- Đã Undo về code cũ</span>`;
    line4.style.background = "rgba(239, 68, 68, 0.25)";
    
    document.getElementById('btn-undo-patch').classList.add('hidden');
    runTests();
}
