// DEFAULT INITIAL BUGGY CODE
const defaultCode = `def calculate_category_revenue(data):
    revenue = {}
    for item in data['orders']:
        cat = item['category']  # <-- Bạn có thể tự do gõ sửa / thêm / xóa code ở đây!
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
        expect: "Kỳ vọng người học tự do gõ sửa code trong ô soạn thảo, sau đó bấm 'Phân tích đoạn code hiện tại' để nghe AI giải thích mà không bị sửa hộ.",
        watch: "Quan sát xem người học gõ sửa code như thế nào, có tự phát hiện vị trí KeyError hay không.",
        noExplain: "Khuyến cáo người quan sát: KHÔNG hướng dẫn cú pháp Python cho người học."
    },
    'B': {
        expect: "Kỳ vọng người học tự do sửa code hoặc bấm Run Test để chẩn đoán Socratic khi code bị lỗi.",
        watch: "Quan sát xem người học có đọc kỹ các câu hỏi chẩn đoán Socratic hay bấm nút bỏ qua.",
        noExplain: "Khuyến cáo người quan sát: KHÔNG chọn hộ đáp án A/B cho người học."
    },
    'C': {
        expect: "Kỳ vọng người học tự gõ sửa hoặc bấm giả lập kẹt 45s để AI xuất hiện bảng xem trước mã nguồn Diff Đỏ/Xanh.",
        watch: "Quan sát xem người học có đọc bản xem trước mã nguồn hay bấm chấp nhận ngay, và có thử nút Undo khi đổi ý không.",
        noExplain: "Khuyến cáo người quan sát: KHÔNG gợi ý bấm chấp nhận đè code."
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
    term.innerHTML = `<span class="status-neutral">Sẵn sàng. Hãy chỉnh sửa code và nhấn "Chạy 5 Test Cases" để kiểm thử...</span>`;

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
            <span style="color:#4ade80; font-weight:bold; margin-top:8px; display:inline-block;">🎉 XUẤT SẮC! Mã nguồn bạn tự sửa đã vượt qua tất cả 5/5 Test Cases hoàn hảo.</span>
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
        badge.innerHTML = '<i class="fa-solid fa-check-double"></i> <strong>Đoạn code đã chuẩn xác:</strong> Cú pháp lồng <code>item[\'product\'][\'category\']</code> đã truy cập đúng.';
        text.innerHTML = '<strong>Phân tích AI:</strong> Bạn đã sửa đúng cấu trúc lồng nhau. Dữ liệu mảng JSON hiện tại có thể đọc trơn tru tất cả 5 Test Cases.';
    } else {
        badge.className = 'evidence-badge';
        badge.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> <strong>Phát hiện lỗi bế tắc:</strong> Cú pháp <code>item[\'category\']</code> gây ra <code>KeyError</code>.';
        text.innerHTML = '<strong>Phân tích AI:</strong> Phần tử <code>item</code> chứa dictionary con <code>product</code>. Bạn cần truy cập lồng vào <code>item[\'product\'][\'category\']</code>.';
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
        alert("Chưa chính xác! Nhìn kỹ vào dữ liệu JSON mẫu ở bên trái: 'category' nằm lồng bên trong 'product'. Hãy chọn lại!");
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
    document.getElementById('real-code-editor').value = `def calculate_category_revenue(data):
    revenue = {}
    for item in data['orders']:
        cat = item['product']['category']  # ✅ Đã cập nhật mã đúng lồng nhau
        price = item['price'] * item['quantity']
        revenue[cat] = revenue.get(cat, 0) + price
    return revenue`;
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
    document.getElementById('real-code-editor').value = `def calculate_category_revenue(data):
    revenue = {}
    for item in data['orders']:
        cat = item['product']['category']  # ⚡ Code được đè bởi AI Copilot
        price = item['price'] * item['quantity']
        revenue[cat] = revenue.get(cat, 0) + price
    return revenue`;
    
    document.getElementById('opt-c-patch').classList.add('hidden');
    document.getElementById('btn-undo-patch').classList.remove('hidden');
    runTests();
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
