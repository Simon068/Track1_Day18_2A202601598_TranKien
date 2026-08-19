# BÁO CÁO KẾT QUẢ THỰC HÀNH LAB DAY 18
## Thiết Kế Và Thử Nghiệm Tùy Chọn Giao Diện Trợ Lý AI Tutor (VLearn)

**Thực hiện bởi**: Trần Kiên & Nguyễn Phú Quang  
**Thời gian làm bài**: Từ 09h00 sáng đến 11h00 sáng, ngày 18/08/2026  

---

## CHẶNG 1: TỔNG HỢP GHI CHÉP THỰC TẾ & XÁC ĐỊNH VẤN ĐỀ NÒNG CỐT

### 1. Tổng hợp ghi chép quan sát thực tế từ người học

Vào lúc **09h15 sáng**, nhóm đặt 3 bản ghi chép phỏng vấn từ bài thực hành trước lên bàn để cùng rà soát lại các tình huống người học gặp bế tắc:

* **Trường hợp 1 (Học viên chuyển ngành Kinh tế)**: Khi học bài xử lý dữ liệu Pandas đến đoạn thuật ngữ Vectorization và Broadcasting, học viên bị khựng lại vì không hiểu bản chất. Bạn phải dừng video, mở Google và ChatGPT tìm hiểu suốt 38 phút. Tuy nhiên các tài liệu ngoài chủ yếu giải thích bằng toán cao cấp khiến bạn hoang mang, đứt gãy mạch tư duy và sáng hôm sau phải xem lại video từ đầu.
* **Trường hợp 2 (Sinh viên Marketing học SQL)**: Khi làm bài tập về kết hợp bảng (LEFT JOIN và INNER JOIN) bị sai kết quả, học viên thấy hình vẽ lý thuyết trên slide quá trừu tượng. Bạn phải copy bảng sang Excel tự xóa dòng chạy thử suốt 15 phút mới hiểu được cách dữ liệu chuyển động.
* **Trường hợp 3 (Học viên đi làm học Python)**: Khi bấm nút Gợi ý có sẵn trên hệ thống học cũ, học viên chỉ nhận được câu lý thuyết chung chung cố định, không gắn gì với dòng code lỗi KeyError hiện tại đang viết dở.

---

### 2. Phát biểu vấn đề nòng cốt (Hypothesis Problem)

Từ các ghi chép thực tế trên, nhóm thống nhất phát biểu bài toán chung:

> **Khi** thực hành các bài tập lập trình và phân tích dữ liệu trên VLearn,  
> **Học viên mới và học viên chuyển ngành** gặp khó khăn trong việc **nhận biết lỗ hổng kiến thức nền và tìm hướng sửa lỗi từng bước**  
> **vì** bài giảng cùng công cụ hỗ trợ hiện tại quá chung chung, trừu tượng hoặc đưa ngay lời giải sẵn mà không giải thích bối cảnh,  
> **dẫn đến** học viên bị mất phương hướng, tốn 30-40 phút tìm kiếm lan man bên ngoài, đứt gãy mạch học và dễ nản lòng bỏ dở khóa học.

---

## CHẶNG 2: THIẾT KẾ 3 PHƯƠNG ÁN HỖ TRỢ A, B, C

Vào lúc **09h35 sáng**, nhóm bắt tay vào xây dựng 3 giải pháp cùng giải quyết bài tập Python *"Tính tổng doanh thu theo danh mục sản phẩm từ dữ liệu JSON"*. Bài tập này đang gặp lỗi `KeyError: 'category'` do người học truy cập sai cấu trúc dictionary lồng nhau.

Cả 3 phương án đều dùng chung bài tập và dữ liệu mẫu, chỉ khác nhau ở cách phân chia vai trò giữa người học và AI:

1. **Phương án A — Trợ lý giải thích theo yêu cầu (User-Led Explainer)**:
   * *Cách hoạt động*: Học viên chủ động bôi đen dòng code bị lỗi và bấm nút "Hỏi AI giải thích". Trợ lý AI chỉ phân tích nguyên nhân lỗi và cho ví dụ gợi ý lý thuyết. Học viên phải tự gõ sửa code, AI tuyệt đối không sửa hộ.
   * *Ưu - nhược điểm*: Học viên giữ 100% quyền kiểm soát, không lo AI can thiệp sâu, nhưng tốn công tự nhận biết vị trí lỗi.

2. **Phương án B — Người thầy chẩn đoán gợi mở (Co-Creation Socratic Guide)**:
   * *Cách hoạt động*: Khi học viên bấm chạy thử bài tập (Run Test) và bị báo lỗi, AI sẽ tự động xuất hiện với 2 câu hỏi trắc nghiệm chẩn đoán để dẫn dắt học viên tự suy luận ra cấu trúc lồng nhau. Khi trả lời đúng, AI mới mở khóa gợi ý hoàn chỉnh.
   * *Ưu - nhược điểm*: Học viên hiểu sâu bản chất và khắc phục tận gốc lỗ hổng tư duy, nhưng tốn thêm 1-2 phút trả lời câu hỏi.

3. **Phương án C — Trợ lý đề xuất bản vá tự động (AI-Led Proactive Patch)**:
   * *Cách hoạt động*: Khi học viên gõ loay hoay hoặc bị kẹt quá 45 giây, AI chủ động hiện thông báo kèm bảng so sánh mã nguồn (Code cũ màu đỏ vs Code đề xuất màu xanh). Học viên đọc qua và bấm nút "Chấp nhận" để đè code sửa hoặc "Từ chối".
   * *Ưu - nhược điểm*: Sửa lỗi rất nhanh, nhưng có nguy cơ khiến học viên thụ động bấm duyệt mà không đọc hiểu.

---

## CHẶNG 3: BẢNG PHÂN CHIA VAI TRÒ VÀ NÚT THOÁT KHẨN CẤP

Vào lúc **09h55 sáng**, nhóm thiết kế chi tiết cơ chế tương tác và các đường thoát lấy lại kiểm soát cho người học:

* **Sự bạch minh bạch về vai trò**:
  * Ở Phương án A, giao diện ghi rõ: *"AI chỉ giải thích lý thuyết, không sửa mã nguồn hộ bạn"*.
  * Ở Phương án B, giao diện ghi rõ: *"AI sẽ đưa ra câu hỏi chẩn đoán để bạn tự suy luận"*.
  * Ở Phương án C, giao diện ghi rõ: *"AI đề xuất mã sửa sẵn, bạn cần xem kỹ trước khi chấp nhận"*.

* **Cơ chế khôi phục khi AI đưa ra hướng dẫn chưa chuẩn (Control & Recovery)**:
  * Ở Phương án A: Học viên có thể đóng ô gợi ý bất kỳ lúc nào và ô tự gõ code luôn mở.
  * Ở Phương án B: Tích hợp nút khẩn cấp *"Bỏ qua câu hỏi & Xem ngay lời giải"* để học viên không bị mắc kẹt vĩnh viễn trong câu hỏi trắc nghiệm nếu đang gấp.
  * Ở Phương án C: Cung cấp nút **"Undo 1-Click"** ngay sau khi bấm duyệt để học viên có thể trả lại 100% đoạn code cũ tự viết nếu thấy AI sửa không đúng ý.

---

## CHẶNG 4: XÂY DỰNG MÔ HÌNH THỬ NGHIỆM WEB (MICRO-PROTOTYPE)

Từ **10h15 sáng đến 10h40 sáng**, nhóm hoàn thành bản demo tương tác web chạy trực tiếp tại file `index.html`.

* **Nội dung dùng chung**: Đều có khung soạn thảo code Python `main.py`, dữ liệu mẫu JSON lồng nhau `orders.product.category`, nút "Run Test Cases" và màn hình kiểm thử Terminal.
* **Ghi chú ngoài màn hình cho người điều phối (Facilitator Annotations)**: Nhóm đặt thanh ghi chú màu vàng ở trên cùng giao diện để hướng dẫn người quan sát (không hiện cho người test đọc):
  * *Ở Phương án A*: Quan sát xem người học có biết bôi đen dòng lỗi không. Không hướng dẫn người học cách chọn dòng.
  * *Ở Phương án B*: Quan sát xem người học có đọc câu hỏi trắc nghiệm không. Không chọn hộ đáp án.
  * *Ở Phương án C*: Quan sát xem người học có đọc bản xem trước mã nguồn hay bấm duyệt luôn. Không gợi ý bấm nút duyệt.
* **Nút Reset**: Đã tích hợp nút `🔄 Reset Common Context` giúp đưa giao diện về trạng thái ban đầu chỉ với 1 cú nhấp chuột.

---

## CHẶNG 5: KỊCH BẢN PHỎNG VẤN VÀ THỬ NGHIỆM

Vào lúc **10h40 sáng**, nhóm chuẩn bị sẵn kịch bản trò chuyện tự nhiên với người trải nghiệm:

* **Câu hỏi mở đầu**: *"Trong tuần vừa rồi khi tự học lập trình, bạn có từng gặp phải bài tập nào bị lỗi kẹt khiến bạn tốn 30-40 phút tìm kiếm bên ngoài không?"*
* **Lời dặn dò trước khi thử**: *"Chúng mình đang thử nghiệm 3 cách thiết kế hỗ trợ học tập, không kiểm tra kỹ năng của bạn. Không có đáp án đúng hay sai. Bạn cứ thoải mái tự thao tác và nói to suy nghĩ của mình nhé; mình sẽ không hướng dẫn thao tác."*
* **Các câu hỏi thảo luận sau khi dùng thử**:
  1. *"Trong 3 cách A, B, C thì bạn thích chọn cách nào nhất cho bài tập này? Vì sao?"*
  2. *"Bạn muốn tự tay mình làm phần nào và muốn AI hỗ trợ phần nào?"*
  3. *"Có điểm nào ở cách bạn chọn làm bạn cảm thấy chưa thực sự thoải mái không?"*
* **3 câu hỗ trợ khi người dùng im lặng**:
  1. *"Bạn cứ thoải mái chia sẻ suy nghĩ hiện tại của mình nhé."*
  2. *"Bạn đang dự định bấm vào đâu tiếp theo trên màn hình?"*
  3. *"Theo bạn thì tính năng này nên hoạt động như thế nào cho tiện nhất?"*

---

## CHẶNG 6: GHI CHÉP QUAN SÁT VÀ KẾT LUẬN CÙNG NHÓM

Từ **10h45 sáng đến 11h00 sáng**, nhóm tổng hợp phản hồi từ 3 người dùng trải nghiệm thực tế:

### 1. Ghi chép thu hoạch từ 3 người dùng

* **Người dùng 1 (Bạn Minh - Học viên mới)**: Bạn lúng túng ở Phương án A vì không biết bôi đen dòng nào bị lỗi. Ở Phương án C, bạn bấm nút chấp nhận đè code ngay mà không đọc bản xem trước. Bạn chốt chọn **Phương án B** vì các câu hỏi trắc nghiệm gợi mở giúp bạn hiểu được tại sao mình lại truy cập sai cấu trúc JSON lồng nhau.
* **Người dùng 2 (Bạn Linh - Học viên chuyển ngành)**: Bạn thích sự gợi mở tư duy của Phương án B, nhưng ở bước cuối cùng trước khi bấm điền code, bạn muốn nhìn thấy bảng so sánh code cũ-mới dạng Diff như ở Phương án C. Bạn chọn **Phương án B kết hợp bảng xem trước của C ở bước cuối**.
* **Người dùng 3 (Bạn Hoàng - Lập trình viên nâng cao)**: Bạn thao tác rất nhanh ở Phương án A, bôi đen dòng 4, đọc gợi ý giải thích và tự gõ sửa code. Ở Phương án B bạn bấm nút bỏ qua câu hỏi ngay vì thấy tốn thời gian. Bạn chốt chọn **Phương án A** vì muốn giữ 100% quyền tự viết code.

---

### 2. Quyết định thay đổi tiếp theo của nhóm (Group Next Change)

Sau khi thảo luận lúc **10h55 sáng**, cả nhóm thống nhất hướng cải tiến cho phiên bản tiếp theo:

> **Kết hợp Phương án B và Phương án C thành luồng "Hướng dẫn gợi mở kèm xem trước mã nguồn"**:
> 1. Khi chạy thử code bị lỗi, hệ thống giữ nguyên 2 câu hỏi trắc nghiệm chẩn đoán của Phương án B để buộc học viên phải suy luận.
> 2. Ở bước hoàn thành, thay vì điền code ngay, hệ thống sẽ mở bảng **Xem trước mã nguồn (Code Diff Preview của C)** hiển thị hai màu Đỏ/Xanh để học viên đối chiếu lần cuối trước khi áp dụng, đi kèm nút **Undo 1-Click** để hoàn tác khi cần.

---

## BÁO CÁO SỬ DỤNG AI (AI SUPPORT LOG)

1. **AI đã hỗ trợ nhóm ở đâu?**: AI giúp nhóm gợi ý các góc nhìn phân chia vai trò Human-AI, tạo dữ liệu mẫu bài tập Python JSON và hỗ trợ viết code HTML/JS cho giao diện thử nghiệm.
2. **AI có điểm nào chưa tốt?**: Ban đầu AI đề xuất 3 phương án chỉ khác nhau về hình thức hiển thị (như cửa sổ bật lên hay thanh bên), làm mất đi bản chất khác biệt về quyền quyết định của con người.
3. **Nhóm đã tự điều chỉnh điều gì?**: Nhóm đã tự thiết kế lại 3 phương án theo đúng mức độ chủ động (từ tự làm hoàn toàn đến đối thoại gợi mở và đề xuất tự động), đồng thời tự bổ sung nút Undo 1-Click và nút bỏ qua câu hỏi để đảm bảo quyền kiểm soát cho người học.
