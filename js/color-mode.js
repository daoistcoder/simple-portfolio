// Define DOM elements

//  toggleButton mediaquery
const toggleButton = document.querySelector("#toggle-button");
const root = document.querySelector(":root");

const storageKey = "color-mode";
const defaultMode = "light-mode";


// update the toggleButton
const updateToggleButton = () => {
  if (root.classList.contains("dark-mode")) {
    toggleButton.style.backgroundImage = "var(--moon)";
  } else {
    toggleButton.style.backgroundImage = "var(--sun)";
  }
}

//  loadColorMode() -> Load the user's preffered color-mode from ls
const loadColorMode = () => {
  const colorMode = localStorage.getItem(storageKey);
  root.classList.add(colorMode);
  updateToggleButton();
}

loadColorMode();



// Save the USER's preffered color mode to ls
const saveColorMode = () => {
  // check if root (e) has a # of "dark-mode". if ? switch to light, then vice-versa
  const currentMode = root.classList.contains("dark-mode") ? "light-mode":"dark-mode"
  //  clear any class if already exist
  root.classList.remove("light-mode", "dark-mode")
  //  set the currentMode
  root.classList.add(currentMode);
  // save in ls
  localStorage.setItem(storageKey, currentMode);

  updateToggleButton();
}

// Toggle the color mode, event listener
toggleButton.addEventListener("click", () => {
  saveColorMode();
})


// console.log(toggleButton);