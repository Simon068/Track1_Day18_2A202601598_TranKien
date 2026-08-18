# AI Support Log — Phản ánh cá nhân của Trần Kiên

**Người viết:** Trần Kiên (MHV: 2A202601598)  
**Ngày:** 18/08/2026  
**Công cụ AI đã sử dụng:** ChatGPT (GPT-4o), GitHub Copilot (code completion trong VS Code)

---

## 1. AI đã giúp gì?

| Bước công việc | AI hỗ trợ cụ thể | Đánh giá chất lượng |
| :--- | :--- | :--- |
| Xây dựng Evidence Huddle Table | ChatGPT gợi ý cấu trúc bảng 3 cột (Practice Note / Hành vi thực tế / Diễn giải nhóm) từ format mẫu | Tốt — giúp tổ chức thông tin nhanh, đúng format yêu cầu |
| Viết Hypothesis Problem | ChatGPT gợi ý cấu trúc câu "Khi… User… gặp khó khăn… vì… dẫn đến…" | Trung bình — câu ban đầu quá dài và lan man, phải rút gọn 2 lần |
| Thiết kế 3 Solution Options | ChatGPT gợi ý khung bảng so sánh và Human–AI Decision Table | Hời hợt ban đầu — xem chi tiết mục 2 |
| Sinh dữ liệu JSON mẫu | ChatGPT tạo data fixture `orders` lồng nhau với cấu trúc `product.category` | Tốt — dùng được ngay, phù hợp với bài tập KeyError |
| Code prototype HTML/JS | GitHub Copilot autocomplete phần skeleton HTML và CSS grid layout; ChatGPT viết logic quiz (answerBStep1, answerBStep2) | Tốt — tiết kiệm 2–3 giờ code thủ công, chỉ cần chỉnh sửa nhỏ |
| Viết Distance Check | ChatGPT gợi ý 3 câu so sánh giữa A/B/C | Cần sửa — ban đầu dùng từ ngữ UI (popup, sidebar, modal) |

---

## 2. AI sai / hời hợt ở đâu?

### Sai lầm 1: Three Options chỉ khác UI layout

- **Prompt tôi dùng:** "Gợi ý 3 solution options cho AI Tutor giúp học viên sửa lỗi code trên LMS"
- **AI trả về:**
  - Option A: Popup tooltip nhỏ hiện giải thích lỗi ngay cạnh dòng code
  - Option B: Sidebar chat panel bên phải để học viên hỏi AI
  - Option C: Modal full-screen hiển thị code sửa hoàn chỉnh
- **Vấn đề:** Cả 3 option có CÙNG mechanism (AI giải thích + đưa code sửa) — chỉ khác nhau về vị trí hiển thị trên màn hình. Đây là lỗi vi phạm Gate 2: Meaningful Options phải khác nhau về mechanism hoặc cách chia việc user–AI, không phải khác layout.
- **Tôi sửa:** Tự thiết kế lại 3 options theo phổ Agency:
  - Option A: User-led, AI chỉ giải thích, KHÔNG đưa code sửa (Don't Act)
  - Option B: Co-creation, AI đặt câu hỏi chẩn đoán, user tự suy luận (Ask)
  - Option C: AI-led, AI tự viết patch sẵn, user chỉ duyệt (Ask Before Apply)

### Sai lầm 2: Distance Check dùng từ ngữ giao diện

- **AI viết:** "Option A khác Option B vì Option A dùng popup nhỏ ngay trên dòng code trong khi Option B dùng panel bên phải với chatbox."
- **Vấn đề:** Đây là so sánh UI presentation, không phải so sánh interaction model hay mechanism.
- **Tôi sửa:** Viết lại Distance Check tập trung vào:
  - Trigger mechanism: Manual (user bôi đen) vs Event (test failed) vs Autonomous (idle > 45s)
  - Agency level: User tự sửa code vs User co-reason qua quiz vs User chỉ duyệt patch AI viết

### Sai lầm 3: Hypothesis Problem viết như kết luận đã chắc chắn

- **AI viết:** "Học viên CẦN một AI tutor chia nhỏ hỗ trợ thành câu hỏi gợi mở để hoàn thành bài nhanh hơn."
- **Vấn đề:** Đây là solution statement, không phải hypothesis. Và nó coi Socratic approach là đã validated trong khi thực tế chưa test.
- **Tôi sửa:** Giữ Hypothesis Problem ở dạng giả thuyết (vẫn cần kiểm chứng) và bổ sung mục "Still Unproven" với 2 câu hỏi mở rõ ràng.

---

## 3. Tôi tự quyết định / sửa gì?

| Quyết định của tôi | Lý do |
| :--- | :--- |
| Tái cấu trúc 3 options theo phổ Agency (Don't Act → Ask → Ask Before Apply) | Đảm bảo 3 options khác nhau ở BẢN CHẤT tương tác human–AI, không chỉ hình thức hiển thị |
| Thêm nút "Skip Quiz" cho Option B | Observation từ phiên test: nếu học viên đã biết (như Hoàng) thì quiz gây bực mình — cần escape path rõ ràng |
| Thêm nút "Undo 1-Click" cho Option C | Giảm rủi ro khi Apply nhầm — phù hợp với mức risk cao của AI-led mode (AI viết code đè lên code cũ) |
| Chọn lỗi `KeyError: 'category'` làm Data Fixture | Vì đây là lỗi phổ biến nhất với học viên mới khi xử lý JSON lồng nhau — evidence từ Practice Note 3 (học viên gặp KeyError trên LMS) |
| Viết lại Distance Check không dùng từ UI | Tuân thủ Gate 2 yêu cầu: so sánh mechanism/agency, không so sánh layout/color/wording |
| Thiết kế Facilitator Annotation banner ngoài frame test | Để facilitator biết kỳ vọng + điều không được giải thích cho tester, mà tester không nhìn thấy nội dung annotation |

---

## 4. Bài học rút ra về cách dùng AI

1. **AI tốt ở cấu trúc, yếu ở phân biệt bản chất:** AI giỏi tạo khung bảng, format markdown và sinh boilerplate code. Nhưng khi được yêu cầu "tạo 3 options khác nhau" thì mặc định chỉ thay đổi bề mặt (vị trí UI, kích thước panel) thay vì thay đổi sâu (mechanism, trigger, agency level). → Cần prompt rõ tiêu chí phân biệt.

2. **Cần prompt constraint rõ ràng:** Khi yêu cầu AI tạo options, phải nói rõ ràng: "Khác nhau về trigger mechanism và mức độ agency của user/AI, KHÔNG được khác về giao diện, màu sắc hay layout." Nếu không, AI sẽ đi đường dễ nhất (thay đổi visual thay vì thay đổi logic).

3. **AI không tự biết khi nào nói quá evidence:** AI sẵn sàng viết Hypothesis Problem ở thì khẳng định ("Học viên CẦN...") thay vì thì giả thuyết ("Chưa biết liệu..."). Người dùng phải chủ động hỏi "Điều gì chưa được chứng minh? Còn giả thuyết nào khác?" để bổ sung Still Unproven.

4. **Dùng AI để tăng tốc, không để thay thế tư duy thiết kế:** AI tiết kiệm 2–3 giờ viết code prototype và format bảng biểu, nhưng quyết định thiết kế cốt lõi (chọn đúng agency mode, xác định distance giữa options, nhận ra khi nào quiz cần escape path) phải do con người đưa ra dựa trên hiểu biết về bài toán.

5. **Validate output AI bằng gate check:** Sau khi AI đưa ra output, dùng ngay Gate 2 ("3 options có khác mechanism không?") để kiểm tra. Nếu fail gate thì yêu cầu AI làm lại với constraint mới, hoặc tự làm lại từ đầu. Đừng patch AI output — viết lại thường nhanh hơn.
