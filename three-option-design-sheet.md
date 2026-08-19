# BẢNG THIẾT KẾ 3 PHƯƠNG ÁN HỖ TRỢ A, B, C (DAY 18)

**Sản phẩm**: VLearn — Trợ lý AI Tutor  
**Thực hiện bởi**: Trần Kiên & Nguyễn Phú Quang  
**Thời gian lập bảng**: Từ 09h00 sáng đến 11h00 sáng, ngày 18/08/2026  

---

## 1. TỔNG HỢP GHI CHÉP & BÀI TOÁN CHUNG

* **Ghi chép quan sát**: 
  1. Học viên Kinh tế bị nghẽn ở thuật ngữ Vectorization, mất 38 phút tra Google/ChatGPT nhưng rối vì toán cao cấp.
  2. Học viên Marketing thấy slide bài giảng SQL JOIN trừu tượng, phải mất 15 phút copy sang Excel tự mò mới hiểu.
  3. Học viên đi làm nhận thấy nút Gợi ý cũ trên hệ thống chỉ hiện lý thuyết tĩnh chung chung, không ăn nhập dòng code lỗi KeyError hiện tại.
* **Bài toán chung**: Học viên mới và chuyển ngành bị thiếu kiến thức nền, tốn 30-40 phút tra cứu ngoài gây đứt gãy mạch học vì công cụ hỗ trợ quá chung chung hoặc cho ngay lời giải sẵn mà không giải thích bối cảnh.

---

## 2. BẢNG SO SÁNH 3 PHƯƠNG ÁN A, B, C

Cả 3 phương án đều dùng chung bài tập Python *"Tính tổng doanh thu theo danh mục sản phẩm từ dữ liệu JSON"*, lỗi `KeyError: 'category'` tại dòng 4:

| Tiêu chí so sánh | Phương án A (Giải thích theo yêu cầu) | Phương án B (Người thầy chẩn đoán gợi mở) | Phương án C (Đề xuất bản vá tự động) |
| :--- | :--- | :--- | :--- |
| **Cơ chế hoạt động** | Học viên bôi đen dòng lỗi, AI giải thích nguyên nhân và đưa ví dụ minh họa lý thuyết. | Khi chạy thử bị lỗi, AI tự bật 2 câu hỏi trắc nghiệm chẩn đoán để dẫn dắt suy luận. | Tự động phát hiện kẹt > 45s, AI lập bản xem trước code sửa (màu Đỏ/Xanh) cho học viên duyệt. |
| **Hành động người học** | Bôi đen dòng 4, ấn nút hỏi AI và tự gõ sửa code trong trình soạn thảo. | Bấm Run Test, chọn đáp án câu hỏi trắc nghiệm và bấm nút tự động điền code. | Xem bảng so sánh code cũ-mới, bấm "Chấp nhận đè code" hoặc "Từ chối". |
| **Hành động của AI** | Chờ lệnh học viên. Chỉ giải thích lý thuyết, tuyệt đối không sửa code hộ. | Tự động bắt sự cố Test Failed, đưa câu hỏi gợi mở để học viên tự tìm ra nguyên nhân. | Tự phát hiện học viên bị kẹt, tự soạn mã đã sửa sẵn dưới dạng bản xem trước. |
| **Cách kích hoạt** | Học viên chủ động bôi đen dòng code và bấm nút yêu cầu. | Hệ thống tự kích hoạt ngay khi lượt chạy thử `Run Test` bị thất bại. | AI tự động bật lên khi phát hiện thời gian dừng gõ code > 45 giây. |
| **Đánh đổi chính** | Tốn công thao tác bôi đen code. Đổi lại giữ 100% quyền tự làm chủ. | Tốn thêm 1-2 phút làm trắc nghiệm. Đổi lại hiểu tận gốc bản chất lỗi sai. | Nguy cơ lười suy nghĩ (bấm duyệt bỏ qua đọc). Đổi lại sửa lỗi nhanh nhất. |

---

## 3. ĐIỂM KHÁC BIỆT BẢN CHẤT GIỮA CÁC PHƯƠNG ÁN

1. **Phương án A khác Phương án B ở chỗ**: Phương án A đòi hỏi người học phải tự phát hiện vị trí bế tắc và chủ động yêu cầu giải thích dòng code đó, trong khi Phương án B tự động khởi động quy trình chẩn đoán đối thoại gợi mở ngay khi lượt chạy thử bài tập bị thất bại.
2. **Phương án B khác Phương án C ở chỗ**: Phương án B bắt buộc người học phải tư duy trả lời các câu hỏi trắc nghiệm chẩn đoán để tự mình tìm ra cách sửa, trong khi Phương án C tự động lập sẵn mã nguồn đã sửa hoàn chỉnh và chỉ chờ người học bấm duyệt hoặc từ chối.
3. **Phương án A khác Phương án C ở chỗ**: Phương án A duy trì cách tiếp cận do người học dẫn dắt tuyệt đối và không nhận lại bất kỳ đoạn code viết sẵn nào, trong khi Phương án C để AI tự động phát hiện khó khăn qua thời gian thực và trực tiếp viết sẵn đoạn code khắc phục cho người học phê duyệt.

---

## 4. PHÂN CHIA VAI TRÒ VÀ NÚT THOÁT KHẨN CẤP

* **Minh bạch vai trò**:
  * Phương án A: AI chỉ giải thích lý thuyết, học viên tự gõ sửa code.
  * Phương án B: AI đưa câu hỏi chẩn đoán để học viên tự suy luận.
  * Phương án C: AI đề xuất mã sửa sẵn, học viên duyệt trước khi đè code.
* **Đường thoát khôi phục**:
  * Phương án A: Ô gõ code luôn mở, có nút đóng gợi ý.
  * Phương án B: Nút khẩn cấp *"Bỏ qua câu hỏi & Xem ngay lời giải"*.
  * Phương án C: Nút **"Undo 1-Click"** khôi phục 100% đoạn code cũ tự viết ngay sau khi bấm duyệt.
