const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

// when mouse down active class added so mouse changed to grab and background transforms to full size
// startX = start position of cursor calculated from event.x position - margin.
slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return; //stop the function from running
  //console.log(isDown);
  e.preventDefault(); // prevent selection of text etc inside area.
  const x = e.pageX - slider.offsetLeft;
  const scrollMultiple = 3; // scroll 3 pixels for each pixel moved by the mouse.
  const walk = (x - startX) * scrollMultiple;
  slider.scrollLeft = scrollLeft - walk;
  //console.log("slider scrollleft", slider.scrollLeft); //max value 4207.2001953125
});