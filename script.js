// -----------------------------
// 100% WORKING - Smooth Anchor Scroll
// -----------------------------
document.querySelectorAll('nav ul li a, .buttons a').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        
        // Agar link khali hai ya sirf '#' hai (jaise Home), toh top par scroll karein
        if (href === "#" || href === "") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        // Target section ko check karein
        if (href.startsWith("#")) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault(); // Default jump ko rokein
                
                // Header ki height ko minus karein taaki heading chhup na jaye
                const headerHeight = document.querySelector("header").offsetHeight || 80;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        }
    });
});
