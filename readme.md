# BÁO CÁO LAB DAY 18: VLEARN MICRO-PROTOTYPES & A/B/C TESTING

**Sản phẩm**: VLearn - Nền tảng học tập trực tuyến cho kỹ năng số  
**Case Study**: Case A — AI Tutor: Diagnostic Refresher & Code Troubleshooting  
**Thành viên nhóm thực hiện**: Trần Kiên & Nguyễn Phú Quang  
**Ngày thực hiện**: 18/08/2026  

---

## CHẶNG 1: TỔNG HỢP EVIDENCE & CHỐT HYPOTHESIS PROBLEM

### 1. Evidence Huddle Table (Tổng hợp từ dữ liệu thực tế Day 02)

| Practice Note / Nguồn quan sát | User đã thực sự làm/nói gì? (Hành vi & Phát biểu thực tế) | Điều nhóm đang diễn giải (Phân tích nguyên nhân) |
| :--- | :--- | :--- |
| **Practice Note 1 (Học viên chuyển ngành Kinh tế)** | Khi học bài Data Wrangling với Pandas đến khái niệm Vectorization và Broadcasting, học viên bị nghẽn lại, phải dừng video để tìm kiếm trên Google và ChatGPT trong 38 phút. Kết quả tra cứu trả về nhiều lý thuyết toán cao cấp gây hoang mang, làm đứt gãy mạch học và phải học lại video từ đầu vào ngày hôm sau. | Học viên bị tắc do lỗ hổng kiến thức nền (Prerequisite Knowledge Gap). Học viên không chê bài giảng dở mà tự thấy bị hổng kiến thức cũ, tốn nhiều thời gian tra cứu ngoài gây đứt gãy luồng học. |
| **Practice Note 2 (Sinh viên Marketing học SQL)** | Khi làm bài tập về LEFT JOIN và INNER JOIN bị sai kết quả, học viên nhận thấy slide bài giảng chỉ có 2 hình tròn sơ đồ Venn tĩnh quá trừu tượng, nên phải copy bảng sang Excel tự xóa dòng chạy thử sai 15 phút mới hiểu. | Học viên thiếu công cụ hỗ trợ trực quan (Poor Pedagogical Framing). Họ không thiếu kiến thức nền nhưng cần ví dụ tương tác trực quan gắn liền với dữ liệu thực tế đang chạy. |
| **Practice Note 3 (Học viên đi làm học Python)** | Khi bấm nút Gợi ý có sẵn trên hệ thống LMS, học viên chỉ nhận được một câu lý thuyết chung chung cố định, không gắn gì với dòng code lỗi KeyError hiện tại đang viết dở. | Công cụ hỗ trợ hiện tại thiếu ngữ cảnh thực tế (context-awareness) và không liên kết trực tiếp với mã nguồn hoặc trạng thái bài tập cụ thể của người học. |

---

### 2. Hypothesis Problem Chốt Cùng Nhóm

> **Khi** thực hành bài tập lập trình & phân tích dữ liệu phức tạp trên VLearn,  
> **Học viên mới / Chuyển ngành** gặp khó khăn trong việc **nhận diện lỗ hổng kiến thức nền & xác định hướng sửa lỗi từng bước**  
> **vì** bài giảng và công cụ hỗ trợ hiện tại quá chung chung, trừu tượng hoặc trả về ngay lời giải trọn gói mà không giải thích bối cảnh,  
> **dẫn đến** học viên bị mất phương hướng, tốn 30-40 phút tra cứu vô ích ngoài hệ thống, gây đứt gãy mạch học và dễ bỏ dở khóa học.

- **Evidence ban đầu hỗ trợ giả thuyết**:
  - Học viên chuyển ngành mất 38 phút tra Google/ChatGPT do hổng kiến thức nền toán/mảng và phải học lại video từ đầu.
  - Học viên Marketing mất 15 phút mò mẫm Excel vì slide lý thuyết quá trừu tượng, thiếu minh họa tương tác.
  - Học viên đi làm phản hồi gợi ý cũ của LMS hoàn toàn vô dụng do không bắt được context dòng code lỗi.

- **Điều vẫn chưa được chứng minh (Still Unproven)**:
  - Liệu việc AI chia nhỏ hỗ trợ thành các câu hỏi chẩn đoán gợi mở (Diagnostic Socratic hinting) có thật sự giúp học viên hoàn thành bài tập nhanh hơn, hay lại gây bực mình vì tốn thêm thao tác tương tác?
  - Mức độ sẵn sàng tự sửa code của học viên đến đâu khi AI chỉ chỉ ra vị trí lỗi và cho ví dụ minh họa thay vì sửa hộ 100%?

---

### 3. Gate 1 Self-Check — Evidence Continuity

- [x] Đã đủ cấu trúc Hypothesis Problem: `User` (Học viên mới/chuyển ngành VLearn), `Situation` (Khi thực hành bài tập lập trình & dữ liệu), `Job` (Nhận diện lỗ hổng kiến thức & xác định hướng sửa từng bước), `Barrier` (Công cụ hiện tại chung chung/trừu tượng hoặc cho ngay lời giải trọn gói), `Consequence` (Mất 30-40 phút tra cứu ngoài, đứt gãy mạch học, nản lòng).
- [x] Trích dẫn đúng 100% quan sát thực tế từ dữ liệu phỏng vấn Day 02.
- [x] Nêu rõ điểm chưa được chứng minh (Still Unproven).

---

## CHẶNG 2: CHỌN BA SOLUTION OPTIONS & DISTANCE CHECK

### 1. Solution Parking Lot & Comparison Contract

Kế thừa Solution Directive của **Case A (AI Tutor: Diagnostic Refresher)** từ Day 02:

#### Những thứ giữ nguyên cho cả A/B/C:
- **Target User**: Học viên mới bắt đầu / chuyển ngành học Python & Data Science trên VLearn.
- **Situation**: Học viên đang thực hành bài tập Python xử lý mảng JSON/Pandas thì gặp sự cố KeyError và kẹt kiến thức nền.
- **Task**: Xác định nguyên nhân lỗi, hiểu khái niệm nền bị hổng và sửa mã nguồn đạt 100% PASSED.
- **Desired Outcome**: Vượt qua điểm thắt kiến thức mà không cần thoát khỏi VLearn để tra cứu bên ngoài.
- **Content/Data Fixture**: Bài tập *"Tính tổng doanh thu theo danh mục sản phẩm từ file dữ liệu JSON"*. Code mẫu bị lỗi `KeyError: 'category'` do truy cập sai cấu trúc dictionary lồng nhau.

---

### 2. Bảng So Sánh 3 Solution Options

| Thành phần | Option A: User-Led On-Demand Explainer | Option B: Co-Creation Socratic Diagnostic | Option C: AI-Led Proactive Patch & Review |
| :--- | :--- | :--- | :--- |
| **Solution Mechanism** | Tra cứu đúng điểm bế tắc theo yêu cầu. AI phân tích khối code bôi đen và giải thích khái niệm nền bị hổng kèm ví dụ minh họa. | Chẩn đoán lỗ hổng tư duy theo phương pháp Socratic. AI kích hoạt 2-3 câu hỏi trắc nghiệm dẫn dắt khi Test Run bị lỗi. | Tự động phát hiện bế tắc và lập bản thảo mã đã sửa (Draft Patch Preview) kèm bảng so sánh Diff code cho User duyệt. |
| **User làm gì?** | Bôi đen dòng code nghi ngờ, nhấn "Hỏi AI dòng này", đọc phần chẩn đoán khái niệm nền và tự tay sửa code. | Chạy "Run Test", trả lời các câu hỏi chẩn đoán của AI để tự suy luận ra cấu trúc lồng dictionary và tự sửa code. | Xem thông báo AI chủ động bật lên khi kẹt > 45s, đọc bảng Diff so sánh code cũ-mới, bấm "Apply Patch" hoặc "Dismiss". |
| **AI làm gì?** | Chờ lệnh. Phân tích đúng dòng code được bôi đen và trích xuất khái niệm nền bị hổng (`item['product']['category']`). Không sửa code hộ. | Tự động phát hiện Test Failed, sinh câu hỏi trắc nghiệm 2 bước kiểm tra nhận thức về cấu trúc dữ liệu của học viên. | Tự động phát hiện học viên gõ vô hướng > 45s, tự tạo mã đã sửa hoàn chỉnh dạng Diff để User duyệt. |
| **Trigger** | **Manual Trigger**: Học viên chủ động bôi đen code và bấm "Hỏi AI dòng này". | **Event Trigger**: Hệ thống phát hiện lượt `Run Test` trả về `Failed`. | **Autonomous Trigger**: AI phát hiện thời gian kẹt (idle/error loop > 45s). |
| **Trade-off chính** | Tốn công thao tác bôi đen code; yêu cầu User phải tự nhận biết vị trí kẹt. Đổi lại giữ 100% quyền kiểm soát. | Tốn thêm 2 phút làm câu hỏi trắc nghiệm; có thể gây sốt ruột nếu User muốn có đáp án ngay. Đổi lại khắc phục tận gốc lỗ hổng nền. | Nguy cơ làm User thụ động (bấm nút Duyệt mà không đọc); AI có thể làm phiền khi User đang tự nghĩ. Đổi lại sửa lỗi nhanh nhất. |

---

### 3. Distance Check (Kiểm Tra Khoảng Cách Không Dùng UI)

1. **Option A khác Option B vì**: Option A đòi hỏi User phải tự nhận biết vị trí bế tắc và chủ động yêu cầu giải thích dòng code đó (User-initiated query), trong khi Option B tự động khởi động quy trình chẩn đoán đối thoại gợi mở ngay khi lượt chạy thử bài tập bị thất bại (Event-triggered co-reasoning).
2. **Option B khác Option C vì**: Option B bắt buộc User phải chủ động tư duy và trả lời các câu hỏi trắc nghiệm chẩn đoán để tự tay sửa mã nguồn (User co-creates solution), trong khi Option C tự động lập bản thảo mã đã sửa hoàn chỉnh (Diff patch) và chỉ yêu cầu User duyệt hoặc từ chối (AI-generated, User-reviewed).
3. **Option A khác Option C vì**: Option A duy trì cách tiếp cận do người học dẫn dắt tuyệt đối và không nhận lại bất kỳ đoạn code viết sẵn nào, trong khi Option C để AI tự động phát hiện khó khăn qua thời gian thực và trực tiếp viết sẵn đoạn code khắc phục cho người học phê duyệt.

---

### 4. Gate 2 Self-Check — Meaningful Options

- [x] Cả 3 options dùng chung User, Situation, Task, Desired Outcome và Data Fixture.
- [x] 3 options nằm trên các mốc phổ tương tác Human-AI khác nhau rõ rệt (User-led -> Co-creation -> AI-led).
- [x] Đã hoàn thành Distance Check 3 câu không dùng từ ngữ về màu sắc, layout hay wording giao diện.

---

## CHẶNG 3: HUMAN–AI DESIGN PASS

### 1. Human–AI Decision Table

| Tiêu chí | Option A: User-Led Explainer | Option B: Co-Creation Socratic Guide | Option C: AI-Led Proactive Patch |
| :--- | :--- | :--- | :--- |
| **Expectation (Kỳ vọng & Giới hạn)** | Trực quan hóa nhãn *"AI Code Explainer (Chỉ giải thích, không sửa code)"*. Học viên hiểu rõ AI chỉ phân tích đoạn code được chọn và đưa ra gợi ý lý thuyết. | Thông báo rõ *"Socratic Diagnostic Mentor"*. Học viên biết AI sẽ không cho đáp án ngay mà đưa ra 2 câu hỏi chẩn đoán để bù hổng kiến thức. | Hiện nhãn *"Auto-Patch Copilot"*. Cảnh báo rõ: AI sẽ tạo bản thảo sửa code khi phát hiện học viên bị tắc nhưng **không tự đè code**. |
| **Role & Agency (Vai trò & Quyền quyết định)** | **Mode: DON'T ACT.**  <br>User chọn code và gõ hỏi. AI giải thích. User tự tay gõ sửa code.  <br>*Hậu quả khi sai*: Thấp (User chỉ tốn 30s đọc). | **Mode: ASK.**  <br>AI đưa ra câu hỏi trắc nghiệm chẩn đoán. User chọn đáp án để mở khóa manh mối.  <br>*Hậu quả khi sai*: Trung bình (User suy luận sai bước đầu). | **Mode: ASK BEFORE APPLYING.**  <br>AI tự động phát hiện kẹt và lập mã sửa sẵn. User bấm "Apply" mới đè code.  <br>*Hậu quả khi sai*: Cao (Code hỏng thêm nếu nhắm mắt duyệt). |
| **Evidence & Uncertainty (Tín hiệu & Độ không chắc chắn)** | Trích dẫn đúng khối code bôi đen và thông số lỗi `KeyError: 'category'`. Hiển thị nhãn *"Dựa trên 100% dòng code bôi đen"*. | Dẫn chứng từ thông báo lỗi `Run Test Failed: KeyError`. Hiện tỷ lệ tự tin gợi mở (*"85% học viên hổng kiến thức dict lồng nhau"*). | Thể hiện bằng bảng So sánh Diff (Đỏ = Code cũ lỗi, Xanh = Code mới sửa). Hiển thị độ tự tin bản vá (*"Độ chính xác dự kiến: 95%"*). |
| **Control & Recovery (Kiểm soát & Phục hồi)** | - Ô nhập code luôn mở để tự gõ sửa. <br>- Nút *"Hỏi lại góc nhìn khác"*. <br>- Nút *"Đóng gợi ý"*. | - Nút *"Bỏ qua đối thoại & Xem đáp án"*. <br>- Nút *"Thử lại câu hỏi"*. <br>- Nút *"Quay lại trạng thái code ban đầu"*. | - Nút *"Apply Patch"* (Chấp nhận đè code). <br>- Nút *"Modify"* (Chỉnh sửa trước khi đè). <br>- Nút *"Dismiss"* (Từ chối). <br>- Nút *"Undo 1-Click"* (Khôi phục code cũ). |

---

### 2. Gate 3 Self-Check — Human Control

- [x] Mỗi Option đã làm rõ vai trò User làm gì, AI làm gì.
- [x] Mức độ chủ động (Agency) của AI phù hợp với mức độ rủi ro (Option A = Don't Act, Option B = Ask, Option C = Ask before apply).
- [x] Mỗi Option đều có ít nhất một đường thoát/lấy lại kiểm soát rõ ràng (Control & Recovery Path).

---

## CHẶNG 4: BUILD BA MICRO-PROTOTYPE TƯƠNG TÁC WEB

Nhóm đã hoàn thành xây dựng ứng dụng web tương tác nhẹ (Single-Page Micro-prototype) chạy trực tiếp tại file `index.html`.

### 1. Scope & Kiến Trúc Dùng Chung (70% Shared Components)
- **Common Context Screen**: Bài tập Python *"Tính tổng doanh thu theo danh mục sản phẩm từ file dữ liệu JSON"*.
- **Shared Data Fixture**: JSON data mẫu lồng nhau `{"orders": [{"product": {"name": "Laptop", "category": "Electronics"}, "price": 1200, "quantity": 1}]}`.
- **Shared Task**: Tìm lỗi `KeyError: 'category'` ở dòng 4 và sửa mã nguồn đạt 100% PASSED.

### 2. Gate 4 Self-Check — Test-Ready
- [x] Đã có file HTML/CSS/JS hoạt động trọn vẹn tại `index.html`.
- [x] Có đủ điểm lấy lại control và undo recovery ở cả 3 luồng.

---

## CHẶNG 5: CHUẨN BỊ TEST (TEST PROMPT & OBSERVATION FOCUS)

- **Relevant Context Question**: *"Trong tuần qua khi học lập trình, bạn có từng gặp phải lỗi code kẹt (Error/Stuck point) khiến bạn tốn 30-40 phút tìm kiếm bên ngoài không?"*
- **Outcome Task**: *"Trong bài tập Python này, bạn hãy lần lượt trải nghiệm cả 3 phương án A, B, C để tìm ra nguyên nhân lỗi KeyError và sửa code đạt PASSED 100%."*

---

## CHẶNG 6: TEST VỚI BA NGƯỜI & TỔNG HỢP GROUP NEXT CHANGE

### 1. Chi Tiết 3 Prototype Feedback Notes

- **Feedback Note 1 (Học viên Minh - Mới học Python)**: Chọn **Option B**. Học viên chia sẻ Option B giúp hiểu bản chất tại sao lại hổng kiến thức dictionary lồng nhau. Option C quá nhanh làm lười tư duy, Option A thì không biết dòng nào lỗi để bôi đen.
- **Feedback Note 2 (Học viên Linh - Chuyển ngành Data)**: Chọn **Option B kết hợp hiển thị bảng Diff code của Option C ở bước cuối**.
- **Feedback Note 3 (Học viên Hoàng - Lập trình viên nâng cao)**: Chọn **Option A**. Vì đã có tư duy lập trình căn bản, chỉ cần AI chỉ vị trí lỗi là tự gõ sửa được ngay.

### 2. Group Next Change Chốt Cùng Nhóm
**Kết hợp Option B và Option C thành luồng "Socratic Mentor with Diff Review"**:
1. Khi `Run Test Failed`, giữ luồng trắc nghiệm chẩn đoán 2 bước của Option B để buộc người học tư duy.
2. Ở bước hoàn thành, mở ra bảng **Diff Code Preview (của Option C)** hiển thị so sánh Red/Green để người học duyệt lần cuối trước khi Apply, đi kèm nút **Undo 1-Click**.

---

## 🤖 AI SUPPORT LOG

- **AI giúp ở đâu**: Gợi ý khung bảng Human-AI Decision Table, sinh dữ liệu mẫu JSON và hỗ trợ viết code HTML/JS tương tác.
- **AI sai/hời hợt ở đâu**: Ban đầu AI gợi ý 3 options chỉ khác nhau về hình thức hiển thị giao diện (Popup vs Sidebar), làm mất đi bản chất Agency.
- **Nhóm tự sửa lại gì**: Tự tái cấu trúc 3 options theo đúng mốc Agency (User-led vs Co-creation vs AI-led), bổ sung nút Undo 1-Click và Skip Quiz.
