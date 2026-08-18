# Group Feedback Synthesis

**Nhóm:** VLearn AI Tutor  
**Case:** Case A — AI Tutor: Diagnostic Refresher & Code Troubleshooting  
**Ngày tổng hợp:** 18/08/2026  
**Số phiên test:** 3 phiên (3 tester ngoài nhóm, mỗi người test cả A/B/C)

---

## 1. Tóm tắt 3 Feedback Notes

### Feedback Note 1 — Tester: Minh (Mới học Python, 3 tháng, background Quản trị Kinh doanh)
- **Facilitate bởi:** Trần Kiên
- **Option thích nhất:** Option B
- **Observation chính:** Minh chia sẻ Option B giúp hiểu bản chất tại sao hổng kiến thức dictionary lồng nhau. Option C quá nhanh làm lười tư duy — bấm Apply sau 5 giây mà không hiểu rõ. Option A thì không biết dòng nào lỗi để bôi đen, do dự 40 giây.
- **Hành vi đáng chú ý:** Minh đọc kỹ cả 2 câu hỏi trắc nghiệm và thử sai 1 lần ở bước 1 trước khi chọn đúng. Không dùng nút Skip Quiz. Nói: "Mình muốn thử trả lời xem mình hiểu đến đâu."

### Feedback Note 2 — Tester: Linh (Chuyển ngành Data Science, background Marketing, 6 tháng học)
- **Facilitate bởi:** Nguyễn Phú Quang
- **Option thích nhất:** Option B kết hợp hiển thị bảng Diff code của Option C ở bước cuối
- **Observation chính:** Linh muốn tự tư duy qua quiz NHƯNG cũng muốn nhìn thấy code đúng dạng so sánh trực quan (Diff Red/Green) ở bước cuối để đối chiếu trước khi tự gõ. Ở Option B đơn thuần, Linh hơi lo lắng khi tự gõ code sửa vì sợ gõ sai cú pháp.
- **Hành vi đáng chú ý:** Ở Option C, Linh bấm Apply ngay mà không đọc kỹ Diff — sau đó nói: "Nếu có quiz trước thì mình sẽ đọc Diff kỹ hơn vì đã hiểu context rồi."

### Feedback Note 3 — Tester: Hoàng (Lập trình viên nâng cao, 2 năm kinh nghiệm Python)
- **Facilitate bởi:** Nguyễn Phú Quang
- **Option thích nhất:** Option A
- **Observation chính:** Vì đã có tư duy lập trình căn bản, Hoàng chỉ cần AI chỉ vị trí lỗi và giải thích ngắn gọn là tự gõ sửa được ngay trong 10 giây. Quiz ở Option B cảm thấy thừa và mất thời gian với người đã biết.
- **Hành vi đáng chú ý:** Hoàng bôi đen dòng 4 chỉ trong 3 giây và đọc gợi ý xong sửa code dưới 10 giây. Ở Option C, Hoàng bấm Dismiss ngay vì "không cần AI sửa hộ, mình tự sửa nhanh hơn."

---

## 2. Pattern & Khác biệt

### Pattern chung (xuất hiện ở ≥2 tester):

1. **Quiz giúp hiểu gốc rễ:** Cả Minh và Linh đều đánh giá cao luồng Socratic Quiz (Option B) vì buộc phải suy nghĩ trước khi nhận đáp án → tạo ra learning thực sự, không chỉ "sửa xong cho pass".

2. **Diff trực quan hữu ích ở bước cuối:** Linh và Minh đều muốn nhìn thấy so sánh code cũ-mới dạng Diff (Red/Green) trước khi tự gõ sửa — giúp giảm lo lắng gõ sai cú pháp.

3. **Option C gây thụ động nếu không có bước tư duy trước:** Cả Minh và Linh đều bấm Apply trong vòng 5–10 giây mà không đọc kỹ Diff. Linh thừa nhận "nếu có quiz trước thì sẽ đọc Diff kỹ hơn" → quiz tạo mindset chủ động.

4. **Không ai dùng Undo:** Cả 3 tester đều không sử dụng nút "Undo 1-Click" — cho thấy khi đã Apply thì tin tưởng kết quả. (Lưu ý: có thể do task đơn giản, chưa chắc đúng với task phức tạp hơn.)

### Khác biệt quan trọng:

| Yếu tố | Minh & Linh (mới/chuyển ngành) | Hoàng (nâng cao) |
| :--- | :--- | :--- |
| **Cần quiz dẫn dắt** | Có — giúp hiểu gốc rễ, không chỉ sửa bề mặt | Không — quiz cảm thấy thừa, mất thời gian |
| **Phản ứng với Option A** | Khó khăn vì không tự biết dòng nào lỗi | Dễ dàng — tìm ra dòng lỗi ngay 3 giây |
| **Phản ứng với Option C** | Bấm Apply nhắm mắt, không hiểu sâu | Dismiss ngay — muốn tự sửa |
| **Nhu cầu chính** | Hiểu TẠI SAO lỗi + hướng dẫn từng bước | Chỉ cần biết CHỖ NÀO lỗi là đủ |

---

## 3. Next Change

**Kết hợp Option B + Option C thành luồng "Socratic Mentor with Diff Review":**

1. **Bước 1 — Socratic Quiz (từ Option B):** Khi `Run Test Failed`, giữ luồng trắc nghiệm chẩn đoán 2 bước để buộc người học tư duy và tự suy luận nguyên nhân lỗi.

2. **Bước 2 — Diff Preview (từ Option C):** Sau khi hoàn thành quiz đúng, hiển thị bảng Diff Code Preview (Red = code cũ lỗi, Green = code đã sửa) để người học đối chiếu kết quả suy luận với code thực tế trước khi Apply.

3. **Recovery paths giữ nguyên:**
   - Nút "Skip Quiz" → nhảy thẳng đến Diff (cho người đã biết như Hoàng).
   - Nút "Dismiss" → từ chối patch, quay lại tự gõ.
   - Nút "Undo 1-Click" → khôi phục code cũ sau Apply.

**Lý do dựa trên evidence:**
- 2/3 tester (Minh, Linh) đánh giá cao quiz + diff kết hợp.
- Linh nói rõ: "Nếu có quiz trước thì mình sẽ đọc Diff kỹ hơn" → quiz tạo mindset chủ động đọc.
- Hoàng không bị ảnh hưởng tiêu cực vì có thể Skip Quiz ngay → vẫn phục vụ được user nâng cao.
- Luồng kết hợp giải quyết được cả vấn đề "thụ động bấm Apply" (từ observation Option C) lẫn vấn đề "lo gõ sai cú pháp" (từ observation Option B đơn thuần).

---

## 4. Still Unproven (Sau cả 3 phiên test)

1. **Thời lượng luồng kết hợp:** Chưa biết luồng Quiz + Diff liên tiếp có tốn > 3 phút khiến học viên nản không — chỉ test từng option riêng lẻ, chưa test luồng kết hợp end-to-end.

2. **Nhóm đối tượng chưa cover:** Chỉ test 3 người với profile cụ thể (mới 3 tháng / chuyển ngành 6 tháng / nâng cao 2 năm) — chưa biết phản ứng của học viên lớn tuổi hoặc người hoàn toàn không có background máy tính.

3. **Độ phức tạp lỗi khác:** Lỗi `KeyError` trên dictionary lồng nhau tương đối đơn giản và có 1 đáp án đúng rõ ràng — chưa biết luồng Socratic Quiz có hoạt động tốt với lỗi logic phức tạp hơn (ví dụ: race condition, off-by-one, infinite loop) mà câu hỏi chẩn đoán khó thiết kế.

4. **Hiệu ứng novelty:** Tester có thể thích quiz vì mới lạ — chưa biết sau 10–15 lần gặp quiz liên tiếp trong 1 buổi học có còn kiên nhẫn không, hay sẽ luôn bấm Skip.

5. **Kích thước Diff:** Với task đơn giản (sửa 1 dòng), Diff rất dễ đọc — chưa biết khi patch sửa 5–10 dòng thì học viên có đọc nổi bảng Diff hay lại nhắm mắt Apply.
