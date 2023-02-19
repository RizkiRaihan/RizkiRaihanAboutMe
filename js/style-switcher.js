/* ================================= toggle style switcher ================================= */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style switcher on scroll
window.addEventListener("scroll", () =>{
    if( document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/*window.addEventListener("click", () => {
    document.querySelector(".style-switcher open").classList.remove("open");
})*/
const styleColor1 = document.querySelector(".color-1");
styleColor1.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.remove("open");
})
const styleColor2 = document.querySelector(".color-2");
styleColor2.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.remove("open");
})
const styleColor3 = document.querySelector(".color-3");
styleColor3.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.remove("open");
})
const styleColor4 = document.querySelector(".color-4");
styleColor4.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.remove("open");
})
const styleColor5 = document.querySelector(".color-5");
styleColor5.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.remove("open");
})
/* ================================= theme colors ================================= */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}
window.addEventListener("click", () =>{
    if( document.querySelector(".style-switcher open").classList.contains("open"))
    {
        document.querySelector(".style-switcher open").classList.remove("open");
    }
})
/*const themeColor = document.querySelector(".colors");
themeColor.removeEventListener("click", () => {
    document.querySelector(".colors").classList.toggle("close");
})*/

/* ================================= theme light and dark mode ================================= */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
