# GROUP FEEDBACK SYNTHESIS (DAY 18)

**Sản phẩm**: VLearn - Case A: AI Tutor  
**Nhóm**: Trần Kiên (2A202601598) & Nguyễn Phú Quang (2A202602017)  

---

## 1. Group Feedback Synthesis Table

| Tiêu chí | Feedback 1 (Minh) | Feedback 2 (Linh) | Feedback 3 (Hoàng) | Pattern hoặc Khác biệt |
| :--- | :--- | :--- | :--- | :--- |
| **First Action** | Đứng im ở A, hào hứng bấm Quiz ở B. | Bấm Run Test ở B, thử Undo ở C. | Bôi đen dòng 4 ở A và tự gõ sửa code. | Người mới cần trigger tự động (B/C); người giỏi thích thủ công (A). |
| **Breakdown chính** | Không biết dòng lỗi ở A, nhắm mắt bấm duyệt ở C. | Muốn thấy Diff code rõ hơn ở cuối luồng B. | Cảm thấy phiền phức với câu hỏi trắc nghiệm ở B. | Option C thiếu rào cản tư duy; Option B thiếu bản xem trước Diff code. |
| **Cách lấy lại control** | Dùng nút Tự động điền code ở B. | Dùng nút Undo 1-Click ở C. | Tự tay gõ đè sửa code ở A. | Nút Undo và Edit tay là 2 đường thoát quan trọng nhất. |
| **Option Chọn** | **Option B** | **Option B (kèm Diff)** | **Option A** | 2/3 chọn Option B làm lõi; 1/3 chọn Option A. |
| **Trade-off** | Đánh đổi thời gian làm quiz lấy sự hiểu bài. | Đánh đổi thêm 1 bước xem Diff để an tâm. | Đánh đổi việc tự tìm lỗi lấy tốc độ viết code. | Tốc độ vs Tiếp thu sâu bản chất. |

---

## 2. Group Next Change & Still Unproven

- **Một Next Change nhóm chốt**:  
  **Kết hợp Option B và Option C thành luồng "Socratic Mentor with Diff Review"**:
  1. Khi `Run Test Failed`, hệ thống giữ nguyên luồng đối thoại Socratic 2 bước của Option B để buộc người học tư duy.
  2. Ở bước hoàn thành, thay vì cho phép đè code trực tiếp, hệ thống sẽ mở ra bảng **Diff Code Preview (của Option C)** hiển thị so sánh Red/Green để người học duyệt lần cuối trước khi Apply, đi kèm nút **Undo 1-Click**.

- **Evidence dẫn tới quyết định này**:
  - Feedback 2 (Linh) yêu cầu trực tiếp việc hiển thị Diff preview ở bước cuối luồng Socratic.
  - Feedback 1 (Minh) chứng minh rằng nếu chỉ có Option C thì học viên nhắm mắt bấm Apply mà không học được gì; nhưng nếu chỉ có Option B thì học viên thiếu hình ảnh minh họa mã nguồn thay đổi.

- **Still Unproven (Điều vẫn chưa được chứng minh)**:
  - Chưa chứng minh được mô hình B+C có duy trì được sự hứng thú của học viên khi áp dụng cho các bài tập lớn kéo dài nhiều tuần hay không.
  - Chưa biết liệu học viên có bắt đầu lạm dụng nút "Skip Quiz" để vượt qua luồng Socratic khi khối lượng bài tập tăng lên hay không.
