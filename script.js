document.addEventListener("DOMContentLoaded", function () {
    // ===== MENU TOGGLE =====
    const menuToggle = document.getElementById("menutoggle");
    const menu = document.getElementById("menus");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("open");
        });
    }

    // ===== SEARCH FUNCTION =====
    const searchInput = document.querySelector(".search-input input");
    const searchBtn = document.querySelector(".search-btn");

    if (searchBtn && searchInput) {
        searchBtn.addEventListener("click", () => {
            const query = searchInput.value.trim();
            if (query === "") {
                searchInput.classList.add("shake");
                setTimeout(() => searchInput.classList.remove("shake"), 500);
            } else {
                alert(`Searching for: ${query}`);
            }
        });
    }

    // ===== IMAGE CAROUSEL =====
    const images = document.querySelectorAll(".WYFimg");
    let currentIndex = 0;
    if (images.length > 0) {
        images.forEach((img, i) => {
            img.style.opacity = i === 0 ? "1" : "0";
            img.style.transition = "opacity 1s ease-in-out";
        });

        setInterval(() => {
            images[currentIndex].style.opacity = "0";
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].style.opacity = "1";
        }, 3000);
    }

    // ===== SCROLL REVEAL =====
    const revealElements = document.querySelectorAll("section, .para");
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        revealElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < triggerBottom) {
                el.classList.add("visible");
            }
        });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    // ===== CLICK TO HIGHLIGHT PARAGRAPHS =====
    document.querySelectorAll(".para").forEach((p) => {
        p.addEventListener("click", () => {
            p.classList.toggle("highlighted");
        });
    });

    // ===== SMOOTH SCROLL FOR MENU LINKS =====
    document.querySelectorAll("#menus a[href^='#']").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth",
                });
            }
            menu.classList.remove("open");
        });
    });
});
