# Three-Option Design Sheet

**Nhóm:** VLearn AI Tutor  
**Case:** Case A — AI Tutor: Diagnostic Refresher & Code Troubleshooting  
**Ngày:** 18/08/2026

---

## Comparison Contract (Giữ nguyên cho cả A/B/C)

| Yếu tố | Nội dung chung |
| :--- | :--- |
| **Target User** | Học viên mới / chuyển ngành học Python & Data Science trên VLearn |
| **Situation** | Đang thực hành bài tập Python xử lý mảng JSON/Pandas thì gặp `KeyError` và kẹt kiến thức nền |
| **Task** | Xác định nguyên nhân lỗi, hiểu khái niệm nền bị hổng và sửa mã nguồn đạt 100% PASSED |
| **Desired Outcome** | Vượt qua điểm thắt kiến thức mà không cần thoát khỏi VLearn để tra cứu bên ngoài |
| **Content/Data Fixture** | Bài tập "Tính tổng doanh thu theo danh mục sản phẩm từ file dữ liệu JSON". Code mẫu bị lỗi `KeyError: 'category'` do truy cập sai cấu trúc dictionary lồng nhau |

---

## Option A: User-Led On-Demand Explainer

| Thành phần | Chi tiết |
| :--- | :--- |
| **Solution Mechanism** | Tra cứu đúng điểm bế tắc theo yêu cầu. AI phân tích khối code bôi đen và giải thích khái niệm nền bị hổng kèm ví dụ minh họa. |
| **Trigger** | Manual — Học viên chủ động bôi đen code và bấm "Hỏi AI dòng này" |
| **User làm gì** | Bôi đen dòng code nghi ngờ → nhấn "Hỏi AI dòng này" → đọc phần chẩn đoán khái niệm nền → tự tay sửa code |
| **AI làm gì** | Chờ lệnh. Phân tích đúng dòng code được bôi đen và trích xuất khái niệm nền bị hổng. KHÔNG sửa code hộ. |
| **Agency Mode** | DON'T ACT |
| **Expectation** | Nhãn "AI Code Explainer (Chỉ giải thích, không sửa code)" |
| **Control & Recovery** | Ô nhập code luôn mở; Nút "Hỏi lại góc nhìn khác"; Nút "Đóng gợi ý" |
| **Trade-off** | Tốn công bôi đen code; yêu cầu User phải tự nhận biết vị trí kẹt. Đổi lại giữ 100% quyền kiểm soát. |

---

## Option B: Co-Creation Socratic Diagnostic

| Thành phần | Chi tiết |
| :--- | :--- |
| **Solution Mechanism** | Chẩn đoán lỗ hổng tư duy theo phương pháp Socratic. AI kích hoạt 2–3 câu hỏi trắc nghiệm dẫn dắt khi Test Run bị lỗi. |
| **Trigger** | Event — Hệ thống phát hiện lượt `Run Test` trả về Failed |
| **User làm gì** | Chạy "Run Test" → trả lời các câu hỏi chẩn đoán của AI → tự suy luận ra cấu trúc lồng dictionary → tự sửa code |
| **AI làm gì** | Tự động phát hiện Test Failed → sinh câu hỏi trắc nghiệm 2 bước kiểm tra nhận thức về cấu trúc dữ liệu |
| **Agency Mode** | ASK (Interactive Co-creation) |
| **Expectation** | Nhãn "Socratic Diagnostic Mentor" — AI không cho đáp án ngay mà dẫn dắt qua câu hỏi |
| **Control & Recovery** | Nút "Bỏ qua đối thoại & Xem đáp án"; Nút "Thử lại câu hỏi"; Nút "Quay lại trạng thái code ban đầu" |
| **Trade-off** | Tốn thêm 2 phút làm trắc nghiệm; có thể gây sốt ruột. Đổi lại khắc phục tận gốc lỗ hổng nền. |

---

## Option C: AI-Led Proactive Patch & Review

| Thành phần | Chi tiết |
| :--- | :--- |
| **Solution Mechanism** | Tự động phát hiện bế tắc và lập bản thảo mã đã sửa (Draft Patch Preview) kèm bảng so sánh Diff code cho User duyệt. |
| **Trigger** | Autonomous — AI phát hiện thời gian kẹt (idle/error loop > 45s) |
| **User làm gì** | Xem thông báo AI bật lên khi kẹt > 45s → đọc bảng Diff so sánh code cũ-mới → bấm "Apply Patch" hoặc "Dismiss" |
| **AI làm gì** | Tự động phát hiện gõ vô hướng > 45s → tự tạo mã đã sửa hoàn chỉnh dạng Diff để User duyệt |
| **Agency Mode** | ASK BEFORE APPLYING |
| **Expectation** | Nhãn "Auto-Patch Copilot" — AI sẽ tạo bản thảo sửa code nhưng KHÔNG tự đè code |
| **Control & Recovery** | Nút "Apply Patch"; Nút "Modify" (chỉnh sửa trước khi đè); Nút "Dismiss" (từ chối); Nút "Undo 1-Click" |
| **Trade-off** | Nguy cơ làm User thụ động (nhắm mắt bấm Apply); AI có thể làm phiền khi User đang tự nghĩ. Đổi lại sửa lỗi nhanh nhất. |

---

## Distance Check (Kiểm tra khoảng cách — không dùng từ ngữ UI)

1. **A ≠ B:** Option A đòi hỏi User tự nhận biết vị trí bế tắc và chủ động yêu cầu giải thích (User-initiated query). Option B tự động khởi động quy trình chẩn đoán đối thoại gợi mở ngay khi test thất bại (Event-triggered co-reasoning).

2. **B ≠ C:** Option B bắt buộc User chủ động tư duy và trả lời câu hỏi chẩn đoán để tự tay sửa code (User co-creates solution). Option C tự động lập bản thảo mã đã sửa hoàn chỉnh và chỉ yêu cầu User duyệt/từ chối (AI-generated, User-reviewed).

3. **A ≠ C:** Option A duy trì cách tiếp cận do người học dẫn dắt tuyệt đối, không nhận lại bất kỳ code viết sẵn. Option C để AI tự phát hiện khó khăn qua thời gian thực và trực tiếp viết sẵn code khắc phục cho người học phê duyệt.
