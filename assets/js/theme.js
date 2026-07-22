(function () {

    const STORAGE_KEY = "theme";

    function applyTheme(theme) {

        document.documentElement.dataset.theme = theme;

        localStorage.setItem(
            STORAGE_KEY,
            theme
        );

        updateIcon(theme);

    }


    function getTheme() {

        return localStorage.getItem(STORAGE_KEY)
            || "dark";

    }


    function toggleTheme() {

        const current =
            document.documentElement.dataset.theme;

        const next =
            current === "dark"
                ? "light"
                : "dark";


        applyTheme(next);

    }


    function updateIcon(theme) {

        const icon =
            document.getElementById("theme-icon");


        if (!icon) return;


        if (theme === "dark") {

            icon.className =
                "fa-solid fa-moon";

        } else {

            icon.className =
                "fa-solid fa-sun";

        }

    }


    document.addEventListener(
        "DOMContentLoaded",
        () => {

            applyTheme(getTheme());


            const btn =
                document.getElementById(
                    "theme-toggle"
                );


            if (btn) {

                btn.addEventListener(
                    "click",
                    toggleTheme
                );

            }


        });


})();