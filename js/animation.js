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
console.log(tlContent)
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

// store last reverse animation, ready to be played
let lastReverseAnimation = "";

// play animation animation handler
const playAnimation = (animation, reverseAnimation) => {
  // Remove all the animation class from heroImg
  heroImage.className = "";

  if (lastReverseAnimation !== "") {
    // Clicked any of the cornerBtns
    // play reverse animation
    heroImage.classList.add(lastReverseAnimation);
    setTimeout(() => {
      heroImage.classList.remove(lastReverseAnimation);
      heroImage.classList.add(animation);
      lastReverseAnimation = reverseAnimation;
    }, 200)
  } else {
    // play forward animation
    heroImage.classList.add(animation);
    lastReverseAnimation = reverseAnimation;
  }
}

// play closing animation animation handler
const playClosingAnimation = (reverseAnimation) => {
  tlBtn.innerHTML = "About";
  trBtn.innerHTML = "Experience";
  blBtn.innerHTML = "Projects";
  brBtn.innerHTML = "Contact";

  switch(activeCorner) {
    case "top-left":
      tlBtn.style.background = bgColor;
      tlBtn.style.color = textColor;
      tlContent.style.transform = tlHidden;
      break;

    case "top-right":
      trBtn.style.background = bgColor;
      trBtn.style.color = textColor;
      trContent.style.transform = trHidden;
      break;
    
    case "bottom-left":
      blBtn.style.background = bgColor;
      blBtn.style.color = textColor;
      blContent.style.transform = blHidden;
      break;
    
    case "bottom-right":
      brBtn.style.background = bgColor;
      brBtn.style.color = textColor;
      brContent.style.transform = brHidden;
      break;
    

    default:
  }

  heroImage.className = "";
  lastReverseAnimation = "";
  activeCorner = "";
  heroImage.classList.add(reverseAnimation);
  setTimeout(() => {
    heroImage.classList.remove(reverseAnimation);
  }, 200);
}

// top-left onClick corner button function
tlBtn.onclick = () => {
  if (activeCorner  === "top-left" ) {
    playClosingAnimation("reverse-animate-top-left")
  } else {
    // setting cornerBtns innerHtml to default
    trBtn.innerHTML = "Experience";
    blBtn.innerHTML = "Projects";
    brBtn.innerHTML = "Contact";

    // setting activeCorner
    activeCorner = "top-left";
    tlBtn.innerHTML = "&uarr; <br/> About";

    // handleWindowResize();
    playAnimation("animate-top-left", "reverse-animate-top-left");

    // Change Background colors
    tlBtn.style.background = bgColorAlt;
    trBtn.style.background = bgColor;
    blBtn.style.background = bgColor;
    brBtn.style.background = bgColor;
    
    // Change Text colors
    tlBtn.style.color = textColorAlt;
    trBtn.style.color = textColor;
    blBtn.style.color = textColor;
    brBtn.style.color = textColor;
    
    // Change positions of the activeCorner
    tlContent.style.transform = tlActive;
    trContent.style.transform = trHidden;
    blContent.style.transform = blHidden;
    brContent.style.transform = brHidden;
  }
}

// top-right onClick corner button function
trBtn.onclick = () => {
  if (activeCorner  === "top-right" ) {
    playClosingAnimation("reverse-animate-top-right")
  } else {
    // setting cornerBtns innerHtml to default
    tlBtn.innerHTML = "About";
    blBtn.innerHTML = "Projects";
    brBtn.innerHTML = "Contact";

    // setting activeCorner
    activeCorner = "top-right";
    trBtn.innerHTML = "&uarr; <br> Experience";

    handleWindowResize();
    playAnimation("animate-top-right", "reverse-animate-top-right");

    // Change Background colors
    trBtn.style.background = bgColorAlt;
    tlBtn.style.background = bgColor;
    blBtn.style.background = bgColor;
    brBtn.style.background = bgColor;
    
    // Change Text colors
    trBtn.style.color = textColorAlt;
    tlBtn.style.color = textColor;
    blBtn.style.color = textColor;
    brBtn.style.color = textColor;
    
    // Change positions of the activeCorner
    trContent.style.transform = trActive;
    tlContent.style.transform = tlHidden;
    blContent.style.transform = blHidden;
    brContent.style.transform = brHidden;
  }
}

// bottom-left onClick corner button function
blBtn.onclick = () => {
  if (activeCorner  === "bottom-left" ) {
    playClosingAnimation("reverse-animate-bottom-left")
  } else {
    // setting cornerBtns innerHtml to default
    tlBtn.innerHTML = "About";
    trBtn.innerHTML = "Experience";
    brBtn.innerHTML = "Contact";

    // setting activeCorner
    activeCorner = "bottom-left";
    blBtn.innerHTML = "Projects <br> &darr;";

    handleWindowResize();
    playAnimation("animate-bottom-left", "reverse-animate-bottom-left");

    // Change Background colors
    blBtn.style.background = bgColorAlt;
    tlBtn.style.background = bgColor;
    trBtn.style.background = bgColor;
    brBtn.style.background = bgColor;
    
    // Change Text colors
    blBtn.style.color = textColorAlt;
    tlBtn.style.color = textColor;
    trBtn.style.color = textColor;
    brBtn.style.color = textColor;
    
    // Change positions of the activeCorner
    blContent.style.transform = blActive;
    tlContent.style.transform = tlHidden;
    trContent.style.transform = trHidden;
    brContent.style.transform = brHidden;
  }
}

// bottom-right onClick corner button function
brBtn.onclick = () => {
  if (activeCorner  === "bottom-right" ) {
    playClosingAnimation("reverse-animate-bottom-right")
  } else {
    // setting cornerBtns innerHtml to default
    tlBtn.innerHTML = "About";
    trBtn.innerHTML = "Experience";
    blBtn.innerHTML = "Projects";

    // setting activeCorner
    activeCorner = "bottom-right";
    brBtn.innerHTML = "Contact <br> &darr;";

    handleWindowResize();
    playAnimation("animate-bottom-right", "reverse-animate-bottom-right");

    // Change Background colors
    brBtn.style.background = bgColorAlt;
    trBtn.style.background = bgColor;
    tlBtn.style.background = bgColor;
    blBtn.style.background = bgColor;
    
    // Change Text colors
    brBtn.style.color = textColorAlt;
    trBtn.style.color = textColor;
    tlBtn.style.color = textColor;
    blBtn.style.color = textColor;
    
    // Change positions of the activeCorner
    brContent.style.transform = brActive;
    trContent.style.transform = trHidden;
    tlContent.style.transform = tlHidden;
    blContent.style.transform = blHidden;
  }
}