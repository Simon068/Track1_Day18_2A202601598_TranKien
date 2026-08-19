# THREE-OPTION DESIGN SHEET (DAY 18)

**Sản phẩm**: VLearn - Case A: AI Tutor (Diagnostic Refresher)  
**Nhóm**: Trần Kiên (2A202601598) & Nguyễn Phú Quang (2A202602017)  

---

## 1. Evidence Snapshot & Hypothesis Problem (Chặng 1)

### Evidence Huddle
- **Practice Note 1 (Học viên chuyển ngành Kinh tế)**: Khi học bài Data Wrangling với Pandas đến khái niệm Vectorization và Broadcasting, học viên bị nghẽn lại, phải dừng video để tìm kiếm trên Google và ChatGPT trong 38 phút. Kết quả tra cứu trả về nhiều lý thuyết toán cao cấp gây hoang mang, làm đứt gãy mạch học và phải học lại video từ đầu vào ngày hôm sau.
- **Practice Note 2 (Sinh viên Marketing học SQL)**: Khi làm bài tập về LEFT JOIN và INNER JOIN bị sai kết quả, học viên nhận thấy slide bài giảng chỉ có 2 hình tròn sơ đồ Venn tĩnh quá trừu tượng, nên phải copy bảng sang Excel tự xóa dòng chạy thử sai 15 phút mới hiểu.
- **Practice Note 3 (Học viên đi làm học Python)**: Khi bấm nút Gợi ý có sẵn trên hệ thống LMS, học viên chỉ nhận được một câu lý thuyết chung chung cố định, không gắn gì với dòng code lỗi KeyError hiện tại đang viết dở.

### Hypothesis Problem
> **Khi** thực hành bài tập lập trình & phân tích dữ liệu phức tạp trên VLearn,  
> **Học viên mới / Chuyển ngành** gặp khó khăn trong việc **nhận diện lỗ hổng kiến thức nền & xác định hướng sửa lỗi từng bước**  
> **vì** bài giảng và công cụ hỗ trợ hiện tại quá chung chung, trừu tượng hoặc trả về ngay lời giải trọn gói mà không giải thích bối cảnh,  
> **dẫn đến** học viên bị mất phương hướng, tốn 30-40 phút tra cứu vô ích ngoài hệ thống, gây đứt gãy mạch học và dễ bỏ dở khóa học.

---

## 2. Comparison Contract & Distance Check (Chặng 2)

### Comparison Contract
- **Target User**: Học viên mới bắt đầu / chuyển ngành học Python & Data Science trên VLearn.
- **Situation**: Học viên đang thực hành bài tập Python xử lý mảng JSON/Pandas thì gặp sự cố KeyError và kẹt kiến thức nền.
- **Task**: Xác định nguyên nhân lỗi, hiểu khái niệm nền bị hổng và sửa mã nguồn đạt 100% PASSED.
- **Desired Outcome**: Vượt qua điểm thắt kiến thức mà không cần thoát khỏi VLearn để tra cứu bên ngoài.
- **Data Fixture**: Bài tập *"Tính tổng doanh thu theo danh mục sản phẩm từ file dữ liệu JSON"*. Code mẫu bị lỗi `KeyError: 'category'` do truy cập sai cấu trúc dictionary lồng nhau.

### 3 Solution Options

| Thành phần | Option A: User-Led Explainer | Option B: Co-Creation Socratic | Option C: AI-Led Proactive Patch |
| :--- | :--- | :--- | :--- |
| **Solution Mechanism** | Tra cứu đúng điểm bế tắc theo yêu cầu. AI phân tích khối code bôi đen và giải thích khái niệm nền bị hổng. | Chẩn đoán lỗ hổng tư duy theo phương pháp Socratic. AI kích hoạt 2 câu hỏi trắc nghiệm dẫn dắt khi Test Failed. | Tự động phát hiện bế tắc và lập bản thảo mã đã sửa (Draft Patch Preview) kèm bảng Diff code cho User duyệt. |
| **User làm gì?** | Bôi đen dòng code nghi ngờ, nhấn "Hỏi AI dòng này", đọc gợi ý giải thích và tự tay sửa code. | Chạy "Run Test", trả lời các câu hỏi chẩn đoán của AI để tự suy luận ra cấu trúc dictionary và tự sửa code. | Xem thông báo AI chủ động bật lên khi kẹt > 45s, đọc bảng Diff so sánh code cũ-mới, bấm "Apply Patch" hoặc "Dismiss". |
| **AI làm gì?** | Chờ lệnh. Phân tích dòng code được bôi đen và trích xuất khái niệm nền bị hổng. Không sửa code hộ. | Tự động phát hiện Test Failed, sinh câu hỏi trắc nghiệm 2 bước kiểm tra nhận thức cấu trúc dữ liệu. | Tự động phát hiện học viên gõ vô hướng > 45s, tự tạo mã đã sửa hoàn chỉnh dạng Diff để User duyệt. |
| **Trigger** | **Manual Trigger**: Học viên chủ động bôi đen code và bấm "Hỏi AI dòng này". | **Event Trigger**: Hệ thống phát hiện lượt `Run Test` trả về `Failed`. | **Autonomous Trigger**: AI phát hiện thời gian kẹt (idle/error loop > 45s). |
| **Trade-off chính** | Tốn công thao tác chọn code. Đổi lại giữ 100% quyền kiểm soát. | Tốn thêm 2 phút làm câu hỏi trắc nghiệm. Đổi lại khắc phục tận gốc lỗ hổng nền. | Nguy cơ làm User thụ động (bấm Duyệt không đọc). Đổi lại sửa lỗi nhanh nhất. |

### Distance Check
1. **Option A khác Option B vì**: Option A đòi hỏi User phải tự nhận biết vị trí bế tắc và chủ động yêu cầu giải thích dòng code đó (User-initiated query), trong khi Option B tự động khởi động quy trình chẩn đoán đối thoại gợi mở ngay khi lượt chạy thử bài tập bị thất bại (Event-triggered co-reasoning).
2. **Option B khác Option C vì**: Option B bắt buộc User phải chủ động tư duy và trả lời các câu hỏi trắc nghiệm chẩn đoán để tự tay sửa mã nguồn (User co-creates solution), trong khi Option C tự động lập bản thảo mã đã sửa hoàn chỉnh (Diff patch) và chỉ yêu cầu User duyệt hoặc từ chối (AI-generated, User-reviewed).
3. **Option A khác Option C vì**: Option A duy trì cách tiếp cận do người học dẫn dắt tuyệt đối và không nhận lại bất kỳ đoạn code viết sẵn nào, trong khi Option C để AI tự động phát hiện khó khăn qua thời gian thực và trực tiếp viết sẵn đoạn code khắc phục cho người học phê duyệt.

---

## 3. Human–AI Decision Table (Chặng 3)

| Tiêu chí | Option A: User-Led Explainer | Option B: Co-Creation Socratic Guide | Option C: AI-Led Proactive Patch |
| :--- | :--- | :--- | :--- |
| **Expectation** | Nhãn *"AI Code Explainer (Chỉ giải thích, không sửa code)"*. | Nhãn *"Socratic Diagnostic Mentor"*. | Nhãn *"Auto-Patch Copilot"*. |
| **Role & Agency** | **DON'T ACT MODE** (User chọn code, AI giải thích, User tự sửa). | **ASK MODE** (AI đưa câu hỏi trắc nghiệm, User chọn để mở khóa). | **ASK BEFORE APPLYING** (AI tự lập mã sửa, User bấm Apply mới đè code). |
| **Evidence & Uncertainty** | Trích dẫn khối code bôi đen và thông số `KeyError: 'category'`. | Thông báo `Run Test Failed`. Hiện tỷ lệ tự tin gợi mở (85%). | Bảng so sánh Diff (Đỏ/Xanh). Độ tự tin bản vá (95%). |
| **Control & Recovery** | Nút *"Đóng gợi ý"*, ô gõ code luôn mở. | Nút *"Bỏ qua đối thoại & Xem đáp án"*, nút *"Thử lại"*. | Nút *"Apply Patch"*, *"Dismiss"*, *"Undo 1-Click"*. |
