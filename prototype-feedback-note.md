# PROTOTYPE FEEDBACK NOTES (DAY 18)

**Sản phẩm**: VLearn - Case A: AI Tutor (Micro-prototypes A/B/C)  
**Người thực hiện Facilitate**: Trần Kiên (`2A202601598`) & Nguyễn Phú Quang (`2A202602017`)  

---

## 📜 KỊCH BẢN FACILITATION (CHẶNG 5 & 6)

### 1. Opening Script
> *"Chúng mình đang thử nghiệm 3 cách thiết kế giao diện hỗ trợ học tập, không kiểm tra bạn. Không có câu trả lời đúng hoặc sai. Bạn hãy tự do thao tác và nói to điều mình đang nghĩ; mình sẽ cố gắng không hướng dẫn."*

### 2. Compare Script & Questions
- *"Trong tình huống này, bạn chọn phương án A, B hay C? Vì sao?"*
- *"Bạn muốn tự làm phần nào và giao cho AI làm phần nào?"*
- *"Điều gì ở phương án đã chọn khiến bạn chưa thực sự thoải mái?"*

### 3. 3 Câu Cứu Hộ Khi Tester Im Lặng / Ngập Ngừng
1. *"Bạn cứ thoải mái nói to suy nghĩ hiện tại của mình nhé."*
2. *"Bạn sẽ làm gì tiếp theo trên màn hình?"*
3. *"Theo bạn, tính năng này nên hoạt động như thế nào?"*

---

## 📝 FEEDBACK NOTE 1 — TESTER MINH (HỌC VIÊN MỚI HỌC PYTHON)

**Tester Context**: Học viên mới học Python 2 tuần, hay bị kẹt ở lỗi `SyntaxError` và `KeyError`.

| Tiêu chí Observation | Nội dung chép thực tế (Observation Note) |
| :--- | :--- |
| **First Action** | Ở Option A: Loay hoay 1 phút không biết chọn dòng lỗi. Ở Option B: Bấm nút Run Test ngay. |
| **Chỗ dừng, do dự hoặc hiểu sai** | Ở Option A đứng im không biết chọn dòng lỗi; ở Option C không đọc nội dung Diff. |
| **Evidence được đọc hay bỏ qua** | Đọc kỹ 2 câu hỏi trắc nghiệm Socratic ở B; bỏ qua không đọc bản Diff màu xanh/đỏ ở C. |
| **Cách tester sửa hoặc lấy lại control** | Dùng nút Tự động điền code ở B sau khi trả lời đúng 2 câu trắc nghiệm. |
| **Option được chọn** | **Option B (Co-Creation Socratic Diagnostic Guide)** |
| **Lý do và trade-off** | Option B giúp hiểu bản chất vì sao lỗi. Option C quá nhanh làm lười nghĩ, Option A thì không biết bôi đen dòng nào. |
| **Evidence chống lại kỳ vọng** | Option A gây quá tải thông tin cho người mới; Option C làm học viên nhắm mắt bấm Apply. |

### Phân Tách 4 Lớp Suy Luận (4-Layer Breakdown)
- **OBSERVED (Đã làm/nói gì)**: *"Option B giúp mình hiểu tại sao lại sai. Option C quá nhanh khiến mình không học được gì, còn Option A thì mình không biết dòng nào lỗi để bôi đen."*
- **INTERPRETED (Nhóm nghĩ có nghĩa gì)**: Học viên mới bị ngợp với Option A (cần tự chỉ định dòng lỗi) và dễ thụ động ở Option C (bấm duyệt bỏ qua đọc). Option B giúp định hướng tư duy từng bước vừa sức nhất.
- **DECIDED — NEXT CHANGE (Quyết định sửa/test gì tiếp)**: Giữ Option B làm luồng chủ đạo cho học viên mới, nhưng cần bổ sung hình ảnh xem trước mã nguồn bị thay đổi ở bước cuối.
- **STILL UNPROVEN (Điều chưa thể kết luận)**: Chưa biết học viên mới có kiên nhẫn làm trắc nghiệm Socratic khi bài tập kéo dài nhiều bước phức tạp hơn hay không.

---

## 📝 FEEDBACK NOTE 2 — TESTER LINH (HỌC VIÊN CHUYỂN NGÀNH DATA)

**Tester Context**: Đã học được 3 tuần, hay tự tìm ChatGPT nhưng ghét việc ChatGPT cho đáp án quá dài.

| Tiêu chí Observation | Nội dung chép thực tế (Observation Note) |
| :--- | :--- |
| **First Action** | Bấm nút Run Test ở Option B, mở thử nút Undo 1-Click ở Option C. |
| **Chỗ dừng, do dự hoặc hiểu sai** | Khựng lại ở bước cuối của Option B vì muốn nhìn thấy đoạn code bị thay đổi trước khi điền. |
| **Evidence được đọc hay bỏ qua** | Đọc rất kỹ cả 2 câu hỏi ở B và bảng Diff preview màu đỏ/xanh ở C. |
| **Cách tester sửa hoặc lấy lại control** | Bấm thử nút **Undo 1-Click** ở C để xem lại code cũ tự viết rồi mới bấm Apply lại. |
| **Option được chọn** | **Option B kết hợp hiển thị bảng Diff Preview của Option C ở bước cuối** |
| **Lý do và trade-off** | Muốn tự suy nghĩ ở Option B, nhưng ở bước cuối cần nhìn thấy rõ bản Diff code như Option C để an tâm. |
| **Evidence chống lại kỳ vọng** | Option B đứng đơn lẻ thiếu minh họa trực quan mã nguồn sửa đổi ở bước cuối cùng. |

### Phân Tách 4 Lớp Suy Luận (4-Layer Breakdown)
- **OBSERVED (Đã làm/nói gì)**: *"Mình muốn tự suy nghĩ ở Option B, nhưng đến bước cuối mình cần nhìn thấy rõ đoạn code bị thay đổi như ở Option C để chắc chắn hệ thống không làm hỏng logic khác."*
- **INTERPRETED (Nhóm nghĩ có nghĩa gì)**: Học viên chuyển ngành cần cả sự gợi mở tư duy (Option B) lẫn sự minh bạch trực quan dưới dạng so sánh mã nguồn Diff (Option C).
- **DECIDED — NEXT CHANGE (Quyết định sửa/test gì tiếp)**: Kết hợp Option B và Option C thành luồng *"Socratic Diagnostic with Diff Review"*.
- **STILL UNPROVEN (Điều chưa thể kết luận)**: Chưa rõ việc thêm bảng Diff ở bước cuối của luồng Socratic có làm kéo dài thời gian làm bài gây sốt ruột cho học viên hay không.

---

## 📝 FEEDBACK NOTE 3 — TESTER HOÀNG (LẬP TRÌNH VIÊN NÂNG CAO)

**Tester Context**: Đã có tư duy lập trình căn bản, học Python làm ngôn ngữ thứ 2.

| Tiêu chí Observation | Nội dung chép thực tế (Observation Note) |
| :--- | :--- |
| **First Action** | Mở Option A, bôi đen dòng 4, đọc gợi ý giải thích và tự gõ sửa code trong editor. |
| **Chỗ dừng, do dự hoặc hiểu sai** | Khựng lại ở Option B và bấm nút Skip Quiz ngay lập tức. |
| **Evidence được đọc hay bỏ qua** | Đọc nhanh phần giải thích `KeyError` ở A, bỏ qua các câu hỏi gợi mở ở B. |
| **Cách tester sửa hoặc lấy lại control** | Tự tay gõ đè sửa code Python trực tiếp trong ô Code Editor. |
| **Option được chọn** | **Option A (User-Led On-Demand Explainer)** |
| **Lý do và trade-off** | Chỉ cần AI chỉ ra chỗ lồng dictionary sai là tự sửa được. Option B hỏi trắc nghiệm làm đứt đoạn suy nghĩ. |
| **Evidence chống lại kỳ vọng** | Option B gây bực mình cho học viên đã có tư duy logic sẵn. |

### Phân Tách 4 Lớp Suy Luận (4-Layer Breakdown)
- **OBSERVED (Đã làm/nói gì)**: *"Mình chỉ cần AI chỉ ra chỗ lồng dictionary sai là mình tự sửa được. Option B hỏi trắc nghiệm làm mình thấy phiền và đứt đoạn suy nghĩ."*
- **INTERPRETED (Nhóm nghĩ có nghĩa gì)**: Người đã có nền tảng không thích AI đóng vai "thầy giáo hỏi bài" (Option B) mà muốn giữ 100% quyền kiểm soát (Option A).
- **DECIDED — NEXT CHANGE (Quyết định sửa/test gì tiếp)**: Giữ nút thoát khẩn cấp *"Bỏ qua đối thoại & Xem đáp án"* (Skip Quiz) ở Option B để phục vụ nhóm học viên nâng cao.
- **STILL UNPROVEN (Điều chưa thể kết luận)**: Chưa biết nhóm học viên nâng cao có sẵn sàng dùng Option A thường xuyên hay sẽ chuyển sang dùng Copilot hoàn toàn.
