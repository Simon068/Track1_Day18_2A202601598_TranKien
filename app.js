// DEFAULT INITIAL BUGGY CODE
const defaultCode = `def calculate_category_revenue(data):
    revenue = {}
    for item in data['orders']:
        cat = item['category']  # <-- Bạn có thể tự do gõ sửa / xem Hint / hoặc bấm Sửa Luôn!
        price = item['price'] * item['quantity']
        revenue[cat] = revenue.get(cat, 0) + price
    return revenue`;

// STATE MANAGEMENT
let currentOption = 'A';
let currentTestCase = 1;
let isStuckSimulated = false;

// 5 TEST CASES DATA FIXTURES
const testCasesData = {
    1: {
        name: "Test Case 1: Đơn lồng nhau tiêu chuẩn",
        fixture: `{"orders": [{"product": {"name": "Laptop", "category": "Electronics"}, "price": 1200, "quantity": 1}]}`,
        expected: `{"Electronics": 1200}`
    },
    2: {
        name: "Test Case 2: Đa danh mục sản phẩm (Electronics & Apparel)",
        fixture: `{"orders": [{"product": {"name": "Laptop", "category": "Electronics"}, "price": 1200, "quantity": 1}, {"product": {"name": "Mouse", "category": "Electronics"}, "price": 25, "quantity": 2}, {"product": {"name": "Shirt", "category": "Apparel"}, "price": 50, "quantity": 3}]}`,
        expected: `{"Electronics": 1250, "Apparel": 150}`
    },
    3: {
        name: "Test Case 3: Danh mục bổ sung (Electronics & Education)",
        fixture: `{"orders": [{"product": {"name": "Headphones", "category": "Electronics"}, "price": 100, "quantity": 2}, {"product": {"name": "Book", "category": "Education"}, "price": 20, "quantity": 5}]}`,
        expected: `{"Electronics": 200, "Education": 100}`
    },
    4: {
        name: "Test Case 4: Đơn giá sản phẩm lớn",
        fixture: `{"orders": [{"product": {"name": "Server", "category": "Hardware"}, "price": 5000, "quantity": 2}]}`,
        expected: `{"Hardware": 10000}`
    },
    5: {
        name: "Test Case 5: Đơn hàng rỗng (Edge Case)",
        fixture: `{"orders": []}`,
        expected: `{}`
    }
};

// ANNOTATIONS DATA FOR FACILITATOR
const annotations = {
    'A': {
        expect: "Kỳ vọng người học xem Gợi ý (Hint) và tự tay gõ sửa code. Nếu vẫn chưa hiểu, bấm 'Sửa Luôn Code' để AI hỗ trợ 100%.",
        watch: "Quan sát xem người học tự sửa sau khi đọc Hint hay bấm nút 'Sửa Luôn Code' ngay lập tức.",
        noExplain: "Khuyến cáo người quan sát: KHÔNG hướng dẫn người học cách chọn nút Sửa Luôn."
    },
    'B': {
        expect: "Kỳ vọng người học tương tác qua các câu hỏi Socratic. Nếu bế tắc, nút 'Sửa Luôn Code' giúp đi thẳng tới mã nguồn chuẩn.",
        watch: "Quan sát xem người học chọn suy luận qua trắc nghiệm hay chọn nút Sửa Luôn.",
        noExplain: "Khuyến cáo người quan sát: KHÔNG chọn hộ đáp án A/B cho người học."
    },
    'C': {
        expect: "Kỳ vọng người học bấm giả lập kẹt 45s để AI hiện bảng Diff xem trước kèm nút 'Sửa Luôn Code'.",
        watch: "Quan sát xem người học có đọc bản xem trước mã nguồn hay bấm chấp nhận ngay, và có dùng nút Undo 1-Click không.",
        noExplain: "Khuyến cáo người quan sát: KHÔNG gợi ý bấm nút đè code."
    }
};

// INITIALIZE APP
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('real-code-editor').value = defaultCode;
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

// ON CODE INPUT HANDLER
function onCodeInput() {
    const editorStatus = document.getElementById('editor-status-tag');
    editorStatus.innerHTML = '<i class="fa-solid fa-pencil"></i> Đang chỉnh sửa code...';
}

// RESET PROTOTYPE CODE
function resetPrototype() {
    document.getElementById('real-code-editor').value = defaultCode;
    isStuckSimulated = false;

    // Reset Terminal
    const term = document.getElementById('terminal-output');
    const statusSummary = document.getElementById('test-summary-status');
    statusSummary.className = 'summary-neutral';
    statusSummary.innerText = 'Chưa chạy test';
    term.innerHTML = `<span class="status-neutral">Sẵn sàng. Nhấn "Chạy 5 Test Cases" để bắt đầu kiểm thử mã nguồn...</span>`;

    // Reset Option A
    document.getElementById('opt-a-result').classList.add('hidden');

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

    alert("Đã khôi phục mã nguồn ban đầu trong editor!");
}

// EVALUATE USER EDITED PYTHON CODE
function evaluateUserCode() {
    const code = document.getElementById('real-code-editor').value;
    
    // Check if code contains correct nested dict access: item['product']['category'] or item.get('product', {}).get('category')
    const isCorrect = code.includes("item['product']['category']") || 
                      code.includes("item[\"product\"][\"category\"]") || 
                      code.includes("item.get('product'") ||
                      code.includes("item.get(\"product\"");

    return isCorrect;
}

// AUTO-FIX CODE DIRECTLY (IF NOT UNDERSTOOD)
function autoFixCodeDirectly() {
    document.getElementById('real-code-editor').value = `def calculate_category_revenue(data):
    revenue = {}
    for item in data['orders']:
        cat = item['product']['category']  # ⚡ Sửa Luôn: Cấu trúc dictionary lồng nhau chuẩn!
        price = item['price'] * item['quantity']
        revenue[cat] = revenue.get(cat, 0) + price
    return revenue`;

    const editorStatus = document.getElementById('editor-status-tag');
    editorStatus.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i> Đã được AI Sửa Luôn 100%';

    alert("AI đã Sửa Luôn mã nguồn vào ô soạn thảo! Đang chạy tự động 5 Test Cases...");
    runTests();
}

// RUN 5 TEST CASES
function runTests() {
    const isCorrect = evaluateUserCode();
    const term = document.getElementById('terminal-output');
    const statusSummary = document.getElementById('test-summary-status');

    if (isCorrect) {
        statusSummary.className = 'summary-passed';
        statusSummary.innerText = '✓ 5/5 Test Cases PASSED (100%)';
        term.innerHTML = `
            <span class="status-passed">✓ Test Case 1 PASSED: Output -> {"Electronics": 1200}</span><br>
            <span class="status-passed">✓ Test Case 2 PASSED: Output -> {"Electronics": 1250, "Apparel": 150}</span><br>
            <span class="status-passed">✓ Test Case 3 PASSED: Output -> {"Electronics": 200, "Education": 100}</span><br>
            <span class="status-passed">✓ Test Case 4 PASSED: Output -> {"Hardware": 10000}</span><br>
            <span class="status-passed">✓ Test Case 5 PASSED: Output -> {} (Empty order array handled)</span><br>
            <span style="color:#4ade80; font-weight:bold; margin-top:8px; display:inline-block;">🎉 XUẤT SẮC! Tất cả 5/5 Test Cases đều vượt qua kiểm thử hoàn hảo.</span>
        `;
        return;
    }

    // FAILED CASE
    statusSummary.className = 'summary-failed';
    statusSummary.innerText = '❌ 5/5 Test Cases FAILED (KeyError)';
    term.innerHTML = `
        <span class="status-failed">❌ Test Case 1 FAILED: KeyError 'category' at Line 4</span><br>
        <span class="status-failed">❌ Test Case 2 FAILED: KeyError 'category' at Line 4</span><br>
        <span class="status-failed">❌ Test Case 3 FAILED: KeyError 'category' at Line 4</span><br>
        <span class="status-failed">❌ Test Case 4 FAILED: KeyError 'category' at Line 4</span><br>
        <span class="status-failed">❌ Test Case 5 FAILED: KeyError 'category' at Line 4</span><br>
        <span style="color:#cbd5e1; font-family:monospace; margin-top:6px; display:inline-block;">
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
    const isCorrect = evaluateUserCode();
    const resultCard = document.getElementById('opt-a-result');
    const badge = document.getElementById('opt-a-status-badge');
    const text = document.getElementById('opt-a-analysis-text');

    resultCard.classList.remove('hidden');

    if (isCorrect) {
        badge.className = 'step-success';
        badge.innerHTML = '<i class="fa-solid fa-check-double"></i> <strong>Mã nguồn đã chính xác:</strong> Cú pháp lồng <code>item[\'product\'][\'category\']</code> đã chuẩn.';
        text.innerHTML = '<strong>Phân tích AI:</strong> Bạn đã sửa đúng cấu trúc lồng nhau. Mã nguồn hiện tại đọc trơn tru tất cả 5 Test Cases.';
    } else {
        badge.className = 'evidence-badge';
        badge.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> <strong>Gợi Ý (Hint) & Phân Tích Lỗi:</strong> Cú pháp <code>item[\'category\']</code> gây ra <code>KeyError</code>.';
        text.innerHTML = '<strong>Phân tích AI:</strong> <code>category</code> nằm bên trong <code>product</code>. Bạn cần đổi thành <code>item[\'product\'][\'category\']</code>.';
    }
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
        alert("Chưa chính xác! Xem Gợi Ý (Hint): 'category' nằm lồng bên trong 'product'. Hãy chọn lại!");
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
    autoFixCodeDirectly();
}

function skipBQuiz() {
    alert("Bạn chọn mở khóa đáp án ngay! AI sẽ Sửa Luôn mã nguồn cho bạn.");
    autoFixCodeDirectly();
}

// OPTION C LOGIC
function simulateStuck() {
    if (currentOption !== 'C') return;
    runTests();
    document.getElementById('opt-c-idle').classList.add('hidden');
    document.getElementById('opt-c-patch').classList.remove('hidden');
}

function applyCPatch() {
    autoFixCodeDirectly();
    document.getElementById('opt-c-patch').classList.add('hidden');
    document.getElementById('btn-undo-patch').classList.remove('hidden');
}

function dismissCPatch() {
    document.getElementById('opt-c-patch').classList.add('hidden');
    document.getElementById('opt-c-idle').classList.remove('hidden');
}

function undoPatch() {
    document.getElementById('real-code-editor').value = defaultCode;
    document.getElementById('btn-undo-patch').classList.add('hidden');
    runTests();
}
