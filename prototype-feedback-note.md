# PROTOTYPE FEEDBACK NOTES (DAY 18)

**Sản phẩm**: VLearn - Case A: AI Tutor (Micro-prototypes A/B/C)  
**Người thực hiện Facilitate**: Trần Kiên (`2A202601598`) & Nguyễn Phú Quang (`2A202602017`)  

---

## 📝 FEEDBACK NOTE 1 — TESTER MINH (HỌC VIÊN MỚI HỌC PYTHON)

- **Tester/Context**: Học viên mới bắt đầu học lập trình Python 2 tuần, hay bị kẹt ở lỗi `SyntaxError` và `KeyError`.
- **Observed Actions**:
  - Ở Option A: Loay hoay 1 phút không biết bấm vào đâu vì chưa quen bôi đen code trong editor.
  - Ở Option B: Hào hứng bấm trả lời 2 câu hỏi trắc nghiệm Socratic, chọn đúng cả 2 và bấm tự động điền code.
  - Ở Option C: Thấy thông báo 45s hiện lên, bấm nút "Apply Patch" ngay mà không đọc nội dung Diff.
- **Interpreted**: Học viên mới bị quá tải thông tin với Option A (cần tự biết dòng lỗi) và dễ thụ động ở Option C (bấm duyệt bỏ qua đọc). Option B giúp định hướng tư duy vừa sức nhất.
- **Option được chọn**: **Option B (Co-Creation Socratic Guide)**.
- **Lý do & Trade-off**: Option B giúp hiểu tại sao lại sai. Option C quá nhanh khiến không học được gì, còn Option A thì không biết dòng nào lỗi để bôi đen.

---

## 📝 FEEDBACK NOTE 2 — TESTER LINH (HỌC VIÊN CHUYỂN NGÀNH DATA)

- **Tester/Context**: Đã học được 3 tuần, hay tự tìm ChatGPT nhưng ghét việc ChatGPT cho đáp án quá dài.
- **Observed Actions**:
  - Ở Option B: Trả lời xong 2 câu hỏi gợi mở, gợi ý "Hãy kết hợp Option C để tôi xem code cũ khác code mới thế nào trước khi bấm Apply".
  - Ở Option C: Bấm "Apply Patch", sau đó thử bấm nút "Undo 1-Click" để xem lại đoạn code cũ tự viết rồi mới bấm Apply lại.
- **Interpreted**: Tester cần cả sự gợi mở tư duy (Option B) lẫn sự minh bạch trực quan dưới dạng so sánh Diff (Option C).
- **Option được chọn**: **Option B kết hợp hiển thị bảng Diff code của Option C ở bước cuối**.
- **Lý do & Trade-off**: Muốn tự suy nghĩ ở Option B, nhưng đến bước cuối cần nhìn thấy rõ đoạn code bị thay đổi như ở Option C để chắc chắn hệ thống không làm hỏng logic khác.

---

## 📝 FEEDBACK NOTE 3 — TESTER HOÀNG (LẬP TRÌNH VIÊN NÂNG CAO)

- **Tester/Context**: Đã có tư duy lập trình căn bản, học Python làm ngôn ngữ thứ 2.
- **Observed Actions**:
  - Ở Option A: Thao tác rất nhanh, bôi đen dòng 4, đọc gợi ý giải thích và tự gõ sửa code trong editor mà không cần nút tự động điền.
  - Ở Option B: Bấm nút "Skip Quiz & Xem đáp án ngay" sau câu hỏi đầu tiên vì thấy mất thời gian.
- **Interpreted**: Người đã có nền tảng không thích AI đóng vai "thầy giáo hỏi bài" (Option B) mà muốn giữ 100% quyền kiểm soát (Option A).
- **Option được chọn**: **Option A (User-Led Explainer)**.
- **Lý do & Trade-off**: Chỉ cần AI chỉ ra chỗ lồng dictionary sai là tự sửa được. Option B làm đứt đoạn suy nghĩ.
