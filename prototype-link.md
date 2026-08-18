# Prototype Links — A/B/C

**Nhóm:** VLearn AI Tutor  
**Case:** Case A — AI Tutor: Diagnostic Refresher & Code Troubleshooting  
**Ngày:** 18/08/2026

---

## Link Prototype Chung (Single-Page Web App — chứa cả 3 Options)

**Chạy local:** Mở file `index.html` trực tiếp trong trình duyệt.

**Link deploy (nếu có):** [ĐIỀN LINK DEPLOY — ví dụ GitHub Pages, Netlify, hoặc Vercel]

---

## Hướng dẫn trải nghiệm

### Option A: User-Led On-Demand Explainer
1. Chọn tab **"Option A"** ở header.
2. Bấm **"🔍 Bôi đen dòng 4"** để chọn dòng code lỗi.
3. Bấm **"❓ Hỏi AI giải thích dòng 4"** để xem AI phân tích.
4. Tự đọc gợi ý và hiểu nguyên nhân — AI KHÔNG sửa code hộ.

### Option B: Co-Creation Socratic Diagnostic
1. Chọn tab **"Option B"** ở header.
2. Bấm **"▶ Run Test Cases"** — test sẽ Failed.
3. Socratic Mentor tự động xuất hiện với 2 câu hỏi trắc nghiệm gợi mở.
4. Trả lời từng bước để tự suy luận ra cách sửa.
5. Nếu muốn thoát nhanh: bấm **"⏭ Bỏ qua đối thoại & Xem đáp án"**.

### Option C: AI-Led Proactive Patch & Review
1. Chọn tab **"Option C"** ở header.
2. Bấm **"⏱ Giả lập kẹt 45s"** (mô phỏng học viên bị tắc).
3. AI tự động hiện bảng **Diff Code Preview** với bản vá đề xuất.
4. Chọn **"✅ Apply Patch"** hoặc **"❌ Dismiss"**.
5. Nếu đổi ý: bấm **"↩ Undo AI Patch"** để khôi phục code cũ.

---

## Lưu ý cho Tester

- Cả 3 options dùng **cùng bài tập**, **cùng dữ liệu JSON**, **cùng lỗi KeyError**.
- Bấm **"🔄 Reset Common Context"** để quay về trạng thái ban đầu trước khi thử option tiếp theo.
- Facilitator Annotation (dải vàng phía trên) chỉ dành cho người quan sát, KHÔNG giải thích cho tester.
