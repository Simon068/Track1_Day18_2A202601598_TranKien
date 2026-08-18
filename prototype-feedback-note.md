# Prototype Feedback Note — Phiên do Trần Kiên Facilitate

**Facilitator:** Trần Kiên (MHV: 2A202601598)  
**Tester:** Minh — Học viên mới học Python (3 tháng kinh nghiệm, background Quản trị Kinh doanh)  
**Ngày test:** 18/08/2026  
**Thời lượng phiên:** ~12 phút (trải nghiệm lần lượt cả 3 options)

---

## 1. Bối cảnh Tester

- **Background:** Minh là sinh viên năm 3 ngành Quản trị Kinh doanh, tự học Python Data Science trên VLearn được 3 tháng. Chưa có nền tảng lập trình trước đó.
- **Relevant Context Question:** "Trong tuần qua khi học lập trình, bạn có từng gặp phải lỗi code kẹt khiến bạn tốn 30–40 phút tìm kiếm bên ngoài không?"
- **Câu trả lời của Tester:** "Có, tuần trước mình gặp lỗi IndexError khi xử lý list, phải Google 35 phút mà vẫn không hiểu tại sao index bị lệch. Cuối cùng phải hỏi bạn cùng lớp."

---

## 2. Observation — Option A (User-Led Explainer)

| Thời điểm | Hành vi quan sát được | Ghi chú |
| :--- | :--- | :--- |
| 0:00–0:15 | Minh đọc đề bài và xem data fixture JSON. Mắt lướt qua code nhưng không nhận ra ngay dòng nào lỗi. | Không tự nhận biết vị trí bế tắc |
| 0:15–0:55 | Minh nhìn quanh giao diện, thấy nút "Bôi đen dòng 4" nhưng do dự 40 giây trước khi bấm. Hỏi thầm "bôi đen là sao nhỉ?" | Khó khăn với khái niệm "bôi đen code" |
| 0:55–1:20 | Bấm nút bôi đen → dòng 4 highlight xanh → bấm "Hỏi AI giải thích dòng 4". Đọc phần phân tích AI. | Tương tác thành công sau khi tìm ra nút |
| 1:20–1:50 | Đọc gợi ý `item['product']['category']`, gật đầu, nhưng không tự gõ sửa code được (prototype không có ô gõ thật). | Hiểu gợi ý nhưng muốn được sửa luôn |

**Phát biểu đáng chú ý của Tester (verbatim):**
- "À, vậy category nằm trong product hả? Mình cứ tưởng nó nằm ngay ngoài item."
- "Nhưng mà... mình phải tự gõ lại dòng code à? Có nút sửa luôn không?"

---

## 3. Observation — Option B (Co-Creation Socratic)

| Thời điểm | Hành vi quan sát được | Ghi chú |
| :--- | :--- | :--- |
| 0:00–0:10 | Minh bấm "Run Test Cases". Terminal hiện lỗi KeyError đỏ. Minh nhíu mày đọc traceback. | Phản ứng tự nhiên với lỗi |
| 0:10–0:40 | Quiz bước 1 xuất hiện. Minh đọc câu hỏi, nhìn sang trái xem JSON mẫu. Chọn đáp án A ("Trực tiếp thuộc item") — SAI. Alert hiện lên. | Lần đầu chọn sai — chưa nhìn kỹ JSON |
| 0:40–1:10 | Minh đọc lại JSON fixture ở panel trái, thấy `"product": {"category": "Electronics"}`. Chọn đáp án B — ĐÚNG. | Tự suy luận được sau khi nhìn lại data |
| 1:10–1:40 | Quiz bước 2 xuất hiện. Minh chọn ngay đáp án A (`item['product']['category']`) — ĐÚNG ngay lần đầu. | Đã hiểu cấu trúc lồng nhau |
| 1:40–2:10 | Thông báo "Xuất sắc!" hiện ra. Minh bấm "Tự động điền mã đã sửa". Code chuyển xanh. Run Test → PASSED. | Hoàn thành trọn vẹn luồng B |

**Phát biểu đáng chú ý của Tester (verbatim):**
- "Ờ hay, câu hỏi này bắt mình phải nhìn lại cái JSON thay vì đoán bừa."
- "Cái này hay, mình hiểu TẠI SAO lỗi chứ không phải chỉ sửa xong là xong."
- Minh KHÔNG dùng nút "Skip Quiz" — nói: "Mình muốn thử trả lời xem mình hiểu đến đâu."

---

## 4. Observation — Option C (AI Proactive Patch)

| Thời điểm | Hành vi quan sát được | Ghi chú |
| :--- | :--- | :--- |
| 0:00–0:10 | Minh bấm "Giả lập kẹt 45s". Terminal hiện lỗi. Diff card xuất hiện ngay bên phải. | AI chủ động đề xuất |
| 0:10–0:15 | Minh lướt mắt qua bảng Diff (dòng đỏ/xanh) khoảng 5 giây. Không đọc phần "Lý do sửa". | Đọc lướt, không suy ngẫm |
| 0:15–0:20 | Bấm "Apply Patch" ngay. Code chuyển xanh. Run Test → PASSED. | Nhắm mắt apply — xác nhận trade-off |
| — | Không bấm Dismiss. Không bấm Undo. Không quay lại xem code đã sửa thành gì. | Thụ động — chỉ muốn pass nhanh |

**Phát biểu đáng chú ý của Tester (verbatim):**
- "Ô, nhanh ghê! Bấm cái là xong luôn."
- (Khi được hỏi "Bạn có hiểu tại sao code sửa như vậy không?"): "Ờ... chắc là do cái dictionary nằm trong nhau? Nhưng mình không chắc lắm."

---

## 5. Tổng hợp từ phiên này

**Option Tester thích nhất:** Option B — Lý do: "Mình hiểu được bản chất tại sao lỗi. Option C nhanh nhưng xong rồi vẫn mơ hồ. Option A thì mình không biết bôi đen chỗ nào."

**Hành vi bất ngờ:**
- Ở Option A, Minh do dự 40 giây vì không hiểu khái niệm "bôi đen code" — đây là rào cản không lường trước với người mới.
- Ở Option C, Minh bấm Apply chỉ sau 5 giây đọc Diff — xác nhận nguy cơ thụ động mà nhóm đã dự đoán trong trade-off.

**Điểm kẹt của Tester:**
- Option A: Không tự nhận biết được dòng nào lỗi → phụ thuộc hoàn toàn vào nút "Bôi đen dòng 4" đã có sẵn.
- Option C: Không có điểm kẹt nhưng cũng không có điểm học — tester pass test mà không hiểu sâu.

**Gợi ý cải tiến từ observation:**
- Kết hợp quiz của Option B (buộc suy nghĩ) với Diff preview của Option C (trực quan hóa kết quả) sẽ vừa đảm bảo learning vừa cho feedback trực quan.
- Có thể thêm một câu hỏi xác nhận sau khi Apply Patch: "Bạn giải thích được tại sao code sửa như vậy không?" để chống thụ động.
