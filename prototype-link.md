# PROTOTYPE LINK & HƯỚNG DẪN TRẢI NGHIỆM MICRO-PROTOTYPES (DAY 18)

**Sản phẩm**: VLearn - Case A: AI Tutor (Diagnostic Refresher)  
**Nhóm thực hiện**: Trần Kiên (2A202601598) & Nguyễn Phú Quang (2A202602017)  

---

## 🔗 Đường Dẫn & Tệp Ứng Dụng Micro-prototype

- **Tệp ứng dụng web chính**: `index.html`
- **Tệp giao diện CSS**: `style.css`
- **Tệp logic tương tác JS**: `app.js`

---

## 🚀 Hướng Dẫn Chạy & Thao Tác Thử Nghiệm A/B/C

1. Mở tệp `index.html` trực tiếp trong trình duyệt web bất kỳ (Chrome, Edge, Firefox, Safari).
2. Sử dụng các nút chuyển đổi trên thanh Header để trải nghiệm 3 phương án:
   - **Option A (User-Led Explainer)**: Nhấn nút *"Bôi đen dòng 4"* trong Code Editor $\rightarrow$ Nhấn nút *"Hỏi AI giải thích dòng 4"* để đọc phần phân tích nguyên nhân lỗi `KeyError: 'category'`.
   - **Option B (Co-Creation Socratic)**: Nhấn nút *"▶ Run Test Cases"* ở bảng bên trái $\rightarrow$ Hệ thống báo lỗi Failed và AI Socratic Mentor xuất hiện chuỗi 2 câu trắc nghiệm chẩn đoán tư duy $\rightarrow$ Trả lời đúng cả 2 câu để mở khóa nút điền code tự động (Có tích hợp nút khẩn cấp *"Skip Quiz"*).
   - **Option C (AI-Led Proactive Patch)**: Nhấn nút *"⏱ Giả lập kẹt 45s"* $\rightarrow$ AI Auto-Patch Copilot xuất hiện bảng so sánh **Diff Code (Đỏ = Code cũ lỗi, Xanh = Code mới sửa)** $\rightarrow$ Nhấn nút *"Apply Patch"* để đè code và PASS test cases 100% (Có nút *"Undo 1-Click"* để khôi phục code cũ).
3. Nhấn nút **`🔄 Reset Common Context`** ở góc phải Header bất kỳ lúc nào để đưa ứng dụng về trạng thái ban đầu.
