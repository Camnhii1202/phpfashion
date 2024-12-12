const menuIcon = document.getElementById('menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-btn');

    menuIcon.addEventListener('click', () => {
        mobileMenu.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });

    document.addEventListener('scroll', function () {
        const parallaxImg = document.querySelector('.parallax-image img');
        const scrollPosition = window.scrollY;
        
        // Điều chỉnh giá trị dịch chuyển
        parallaxImg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }); 