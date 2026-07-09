// ==========================
// Load Common Navbar
// ==========================

const navbarContainer = document.getElementById("navbar-container");

if (navbarContainer) {

    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {

            navbarContainer.innerHTML = data;

            const hamburger = document.getElementById("hamburger");
            const navMenu = document.getElementById("navMenu");
            const overlay = document.getElementById("menuOverlay");

            if (hamburger && navMenu) {

                hamburger.addEventListener("click", () => {

                    hamburger.classList.toggle("active");
                    navMenu.classList.toggle("active");

                    if (overlay)
                        overlay.classList.toggle("active");

                    document.body.classList.toggle("menu-open");

                });

                document.querySelectorAll(".nav-menu a").forEach(link => {

                    link.addEventListener("click", () => {

                        hamburger.classList.remove("active");
                        navMenu.classList.remove("active");

                        if (overlay)
                            overlay.classList.remove("active");

                        document.body.classList.remove("menu-open");

                    });

                });

                if (overlay) {

                    overlay.addEventListener("click", () => {

                        hamburger.classList.remove("active");
                        navMenu.classList.remove("active");
                        overlay.classList.remove("active");
                        document.body.classList.remove("menu-open");

                    });

                }

            }

        })
        .catch(error => console.error("Navbar Error:", error));

}