//  Define DOM elements
const heroImage = document.querySelector("#hero__animation__img")
// console.log(heroImage);

//  mediaquery grid div
const tlGrid = document.querySelector("#grid__tl");
const trGrid = document.querySelector("#grid__tr");
const blGrid = document.querySelector("#grid__bl");
const brGrid = document.querySelector("#grid__br");

//  mediaquery buttons
const tlBtn = document.querySelector("#grid__tl__btn");
const trBtn = document.querySelector("#grid__tr__btn");
const blBtn = document.querySelector("#grid__bl__btn");
const brBtn = document.querySelector("#grid__br__btn");

//  mediaquery contents
const tlContent = document.querySelector("#grid__tl__content");
const trContent = document.querySelector("#grid__tr__content");
const blContent = document.querySelector("#grid__bl__content");
const brContent = document.querySelector("#grid__br__content");

const project1 = document.querySelector(".p-1")
const project2 = document.querySelector(".p-2")
const project3 = document.querySelector(".p-3")

//  Define colors and positions 
const bgColor = "var(--bg)";
const bgColorAlt = "var(--bg-alt)";
const textColor = "var(--text)";
const textColorAlt = "var(--text-alt)";

//  grid button animation var
let tlActive = "translateX(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

let trActive = "translateX(-5vw) translateY(0)";
let trHidden = "translateX(100vw) translateY(-100vh)";

let blActive = "translateX(10vw) translateY(7vh)";
let blHidden = "translateX(-100vw) translateY(100vh)";

let brActive = "translateX(-10vw) translateY(7vh)";
let brHidden = "translateX(100vw) translateY(100vh)";

// manipulate grid div animation
let activeCorner = "";

// handles the styling when window is resized
const handleWindowResize = () => {
  
}

  // event listener to window{} for resize events
window.addEventListener("resize", handleWindowResize);