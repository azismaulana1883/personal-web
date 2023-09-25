// Buka tutup navbar versi mobile

document.addEventListener('DOMContentLoaded', function() {
    const navBars = document.querySelector('.nav__bars');
    const menuBar = document.querySelector('.menu__bar');
    const btnClose = document.querySelector('#btn-close');

    navBars.addEventListener('click', function() {
        menuBar.classList.toggle('active');
    });

    btnClose.addEventListener('click', function() {
        menuBar.classList.remove('active');
    });
});

// Animasi Fade
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in, .fade-right, .fade-left, .fade-down, .fade-zoom-in, .fade-zoom-out");


    function checkScroll() {
        const windowHeight = window.innerHeight;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop - windowHeight <= 0) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Memanggil fungsi ini saat halaman dimuat agar elemen yang sudah dalam viewport langsung terlihat
});

