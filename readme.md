# Track1 Day18 — VLearn AI Tutor: Micro-Prototypes & A/B/C Testing

---

## 1. Thông tin cá nhân và nhóm

| Thông tin | Chi tiết |
| :--- | :--- |
| **MHV (Mã học viên)** | 2A202601598 |
| **Họ và tên người nộp** | Trần Kiên |
| **Tên nhóm** | Nhóm VLearn AI Tutor |
| **Thành viên 1** | Trần Kiên (MHV: 2A202601598) |
| **Thành viên 2** | Nguyễn Phú Quang (MHV: 2A202602017) |
| **Case** | Case A — AI Tutor: Diagnostic Refresher & Code Troubleshooting |
| **Ngày thực hiện** | 18/08/2026 |

---

## 2. Hypothesis Problem (Bản nhóm dùng trong Day 18)

> **Khi** thực hành bài tập lập trình & phân tích dữ liệu phức tạp trên VLearn,  
> **Học viên mới / Chuyển ngành** gặp khó khăn trong việc **nhận diện lỗ hổng kiến thức nền & xác định hướng sửa lỗi từng bước**  
> **vì** bài giảng và công cụ hỗ trợ hiện tại quá chung chung, trừu tượng hoặc trả về ngay lời giải trọn gói mà không giải thích bối cảnh,  
> **dẫn đến** học viên bị mất phương hướng, tốn 30–40 phút tra cứu vô ích ngoài hệ thống, gây đứt gãy mạch học và dễ bỏ dở khóa học.

**Evidence từ Day 17 (Practice Notes):**
- Practice Note 1: Học viên chuyển ngành Kinh tế mất 38 phút tra Google/ChatGPT khi gặp khái niệm Vectorization và Broadcasting do hổng kiến thức nền → phải học lại video từ đầu ngày hôm sau.
- Practice Note 2: Sinh viên Marketing mất 15 phút copy bảng sang Excel tự thử sai vì slide sơ đồ Venn quá trừu tượng, thiếu minh họa tương tác gắn dữ liệu thực.
- Practice Note 3: Học viên đi làm bấm nút "Gợi ý" trên LMS chỉ nhận câu lý thuyết chung chung cố định, không gắn với dòng code lỗi KeyError đang viết dở.

**Điều vẫn chưa biết (Still Unproven):**
- Liệu AI chia nhỏ hỗ trợ thành câu hỏi chẩn đoán gợi mở (Socratic hinting) có giúp hoàn thành bài nhanh hơn, hay gây bực mình vì tốn thêm thao tác?
- Mức độ sẵn sàng tự sửa code của học viên đến đâu khi AI chỉ chỉ ra vị trí lỗi thay vì sửa hộ 100%?

---

## 3. Three Solution Options

| | Option A: User-Led On-Demand Explainer | Option B: Co-Creation Socratic Diagnostic | Option C: AI-Led Proactive Patch & Review |
| :--- | :--- | :--- | :--- |
| **Mechanism** | Học viên bôi đen dòng code lỗi, bấm "Hỏi AI". AI giải thích khái niệm nền bị hổng kèm ví dụ minh họa. KHÔNG sửa code. | Khi Run Test Failed, AI tự kích hoạt 2 câu hỏi trắc nghiệm Socratic dẫn dắt học viên tự suy luận nguyên nhân lỗi và tự sửa code. | AI tự phát hiện kẹt > 45s, lập bản thảo Diff code sửa sẵn. Học viên duyệt Apply hoặc Dismiss. |
| **Trigger** | Manual (User chủ động bôi đen + bấm hỏi) | Event (Hệ thống phát hiện Run Test → Failed) | Autonomous (AI phát hiện idle/error loop > 45s) |
| **Agency** | DON'T ACT — User toàn quyền kiểm soát | ASK — Co-creation, AI hỏi User trả lời | ASK BEFORE APPLYING — AI đề xuất patch, User phê duyệt |
| **Trade-off** | User phải tự biết dòng nào lỗi; giữ 100% control | Tốn thêm 2 phút quiz; khắc phục tận gốc lỗ hổng nền | Nguy cơ thụ động; đổi lại sửa lỗi nhanh nhất |

**Link prototype:** Xem file [`prototype-link.md`](./prototype-link.md)  
**Link Design Sheet:** Xem file [`three-option-design-sheet.md`](./three-option-design-sheet.md)

---

## 4. Đóng góp của tôi trong nhóm

- **Option tôi chịu trách nhiệm chính:** Option B (Co-Creation Socratic Diagnostic) — thiết kế luồng 2 câu hỏi trắc nghiệm chẩn đoán và logic quiz trong `app.js`.
- **Shared context/content tôi đóng góp:**
  - Viết Evidence Huddle Table từ 3 Practice Notes Day 17.
  - Thiết kế Data Fixture JSON lồng nhau (`orders → product → category`).
  - Code toàn bộ phần quiz logic (hàm `answerBStep1`, `answerBStep2`, `skipBQuiz`) trong `app.js`.
- **Human–AI decisions tôi tham gia:**
  - Đề xuất Distance Check 3 câu so sánh mechanism thay vì UI.
  - Chốt Agency mode cho từng option (Don't Act / Ask / Ask Before Apply).
  - Thiết kế nút "Skip Quiz" làm escape path cho Option B.
- **Facilitation:** Tôi là người facilitate phiên test với học viên Minh (Mới học Python) — chi tiết observation tại [`prototype-feedback-note.md`](./prototype-feedback-note.md).
- **Tổng hợp:** Đóng góp viết phần Pattern & Khác biệt trong [`group-feedback-synthesis.md`](./group-feedback-synthesis.md).

---

## 5. Prototype Feedback

- **Phiên tôi facilitate:** Xem chi tiết tại [`prototype-feedback-note.md`](./prototype-feedback-note.md)
- **Tổng hợp nhóm (3 feedback notes + synthesis):** Xem [`group-feedback-synthesis.md`](./group-feedback-synthesis.md)

**Tóm tắt observation từ phiên tôi facilitate (Tester: Minh — mới học Python 3 tháng):**
- Option A: Minh không biết dòng nào lỗi để bôi đen, loay hoay 40 giây trước khi tìm ra nút "Bôi đen dòng 4". Sau khi đọc gợi ý AI thì hiểu nhưng mất thêm 20 giây mới tự gõ sửa được.
- Option B: Minh bấm Run Test, quiz xuất hiện — Minh đọc kỹ câu hỏi bước 1, chọn sai đáp án A lần đầu, sau đó đọc lại JSON mẫu và chọn đúng đáp án B. Bước 2 chọn đúng ngay. Minh nói: "Cái này hay, mình hiểu tại sao lỗi chứ không phải chỉ sửa xong là xong."
- Option C: Minh bấm "Giả lập kẹt", Diff hiện ra — Minh đọc qua Diff 5 giây rồi bấm Apply ngay. Không dùng nút Dismiss hay Undo.

**Group Next Change:** Kết hợp Option B + Option C thành luồng "Socratic Mentor with Diff Review" — giữ quiz chẩn đoán 2 bước, sau đó mở Diff Preview cho học viên duyệt trước khi Apply.

**Still Unproven sau test:**
- Chưa biết luồng kết hợp B+C có bị dài quá (>3 phút) khiến học viên nản không.
- Chưa kiểm chứng với nhóm học viên có nền tảng IT sẵn — có thể họ thấy quiz thừa.
- Chưa biết với lỗi phức tạp hơn (không phải KeyError đơn giản) thì Socratic quiz có hoạt động tốt không.
- Hiệu ứng novelty — chưa rõ sau 10 lần dùng quiz có còn kiên nhẫn không.

---

## 6. AI Support Log

Xem chi tiết tại [`ai-support-log.md`](./ai-support-log.md)

**Tóm tắt:**
- **AI giúp:** Gợi ý khung bảng Human–AI Decision Table, sinh dữ liệu mẫu JSON, hỗ trợ viết code HTML/JS prototype tương tác.
- **AI sai/hời hợt:** Ban đầu AI gợi ý 3 options chỉ khác hình thức hiển thị (Popup vs Sidebar vs Modal) — không có sự khác biệt về mechanism hay agency.
- **Tôi tự sửa:** Tái cấu trúc 3 options theo đúng phổ Agency (User-led → Co-creation → AI-led). Bổ sung nút Undo 1-Click và Skip Quiz cho đường recovery. Tự viết lại Distance Check không dùng từ ngữ UI.

---

## Danh sách file trong repo

| File | Mô tả |
| :--- | :--- |
| `README.md` | File này — tổng quan bài nộp |
| `three-option-design-sheet.md` | Bảng thiết kế 3 options chi tiết (Comparison Contract + Distance Check) |
| `prototype-link.md` | Link & hướng dẫn chạy prototype A/B/C |
| `prototype-feedback-note.md` | Feedback Note từ phiên do Trần Kiên facilitate |
| `group-feedback-synthesis.md` | Tổng hợp 3 Feedback Notes + Pattern + Next Change + Still Unproven |
| `ai-support-log.md` | Nhật ký AI hỗ trợ — phản ánh cá nhân của Trần Kiên |
| `index.html` | Micro-prototype web (chạy trực tiếp trong trình duyệt) |
| `app.js` | Logic tương tác JavaScript cho 3 options |
| `style.css` | Giao diện CSS cho prototype |
| `lab_report_day18.md` | Báo cáo lab chi tiết đầy đủ 6 chặng |
