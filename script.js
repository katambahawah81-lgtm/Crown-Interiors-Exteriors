document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".site-header");
    const menuToggle = document.querySelector(".menu-toggle");

    if (header && menuToggle) {
        menuToggle.addEventListener("click", function () {
            header.classList.toggle("is-open");
            menuToggle.setAttribute(
                "aria-label",
                header.classList.contains("is-open") ? "Close menu" : "Open menu"
            );
        });
    }

    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryCards = document.querySelectorAll(".gallery-card");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedCategory = button.getAttribute("data-filter");

            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            galleryCards.forEach(function (card) {
                const category = card.getAttribute("data-category");
                card.hidden = !(
                    selectedCategory === "all" ||
                    category === selectedCategory
                );
            });
        });
    });

    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".slide-dot");

    if (slides.length > 0) {
        let currentSlide = 0;
        let slideshowTimer;

        function showSlide(index) {
            currentSlide = (index + slides.length) % slides.length;

            slides.forEach(function (slide, i) {
                slide.classList.toggle("active", i === currentSlide);
            });

            dots.forEach(function (dot, i) {
                dot.classList.toggle("active", i === currentSlide);
            });
        }

        function startSlideshow() {
            clearInterval(slideshowTimer);
            slideshowTimer = setInterval(function () {
                showSlide(currentSlide + 1);
            }, 5500);
        }

        dots.forEach(function (dot, index) {
            dot.addEventListener("click", function () {
                showSlide(index);
                startSlideshow();
            });
        });

        showSlide(0);
        startSlideshow();
    }

    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
