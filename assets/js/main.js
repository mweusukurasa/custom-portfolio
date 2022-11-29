/*jshint esversion: 6 */
const toggleMenuButton = document.getElementById("toggleTheMenu"),
	navbarList = document.getElementById("navbarList");
toggleMenuButton.addEventListener("click", (() => {
	navbarList.classList.toggle("active");
}));
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = !1;
menuBtn.addEventListener("click", (() => {
	menuOpen ? (menuBtn.classList.remove("open"), menuOpen = !1) :
		(menuBtn.classList.add("open"), menuOpen = !0);
}));
const newLocal = '.theme-switch input[type="checkbox"]', themeToggle = document.querySelector(newLocal),
	currentTheme = localStorage.getItem("theme");

function switchTheme(e) {
	e.target.checked ? (document.documentElement.setAttribute("data-theme", "dark"),
		localStorage.setItem("theme", "dark")) : (document.documentElement.setAttribute("data-theme", "light"), localStorage.setItem("theme", "light"));
}
currentTheme && (document.documentElement.setAttribute("data-theme", currentTheme), "dark" === currentTheme && (themeToggle.checked = !0)), themeToggle.addEventListener("change", switchTheme, !1);