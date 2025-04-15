// main.js

//  theme toggle for light and dark
const themeToggle = document.getElementById("theme-toggle");

// checks local storage if the 'theme' is dark or not and loads css based on it
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.checked = true;
}

// when the user clicks on toggle, it will change from dark to light or vice versa
// and save the theme based on the current toggle
themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

