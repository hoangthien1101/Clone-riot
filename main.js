window.addEventListener('scroll', function () {
    const bgHeader = document.querySelector('.bg-header'); // Chọn .bg-header
    if (window.scrollY > 50) {
        bgHeader.classList.add('scrolled'); // Thêm lớp scrolled khi cuộn xuống
    } else {
        bgHeader.classList.remove('scrolled'); // Gỡ bỏ lớp khi quay lại đầu trang
    }
});






document.addEventListener('DOMContentLoaded', () => {
    // Lấy phần tử quả địa cầu và select ngôn ngữ
    const globeIcon = document.getElementById('globeIcon');
    const languageSelect = document.getElementById('languageSelect');

    // Khi click vào quả địa cầu, hiển thị hoặc ẩn select
    globeIcon.addEventListener('click', () => {
        if (languageSelect.style.display === 'none' || languageSelect.style.display === '') {
            languageSelect.style.display = 'block';
        } else {
            languageSelect.style.display = 'none';
        }
    });

    // Đóng select khi click ra ngoài
    window.addEventListener('click', (e) => {
        if (!globeIcon.contains(e.target) && !languageSelect.contains(e.target)) {
            languageSelect.style.display = 'none';
        }
    });
});









