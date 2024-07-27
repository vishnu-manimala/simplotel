
                const button = document.getElementById("nav-icon-id");
                const adjustnav = document.getElementById("adjust-nav-id");
                const adjustnavcloss = document.getElementById("adjust-nav-closs");

                button.addEventListener("click", () => {
                    adjustnav.style.display = "block";
                });
                adjustnavcloss.addEventListener("click", () => {
                    adjustnav.style.display = "none";
                });