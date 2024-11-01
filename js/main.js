const body = document.querySelector("#body");
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const moon = document.querySelector("#moon");

hamburger.addEventListener("click", (event) => {
	menu.classList.toggle("hidden");
	hamburger.classList.toggle("bg-indigo");
});

moon.addEventListener("click", () => {
	body.classList.toggle("dark");
	body.classList.toggle("dark:bg-slate-900");
});
