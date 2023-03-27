// Create an array of element objects to animate
const elements = Array.from(document.querySelectorAll(".element"));

// Animate the elements in response to the cursor using GreenSock
document.addEventListener("mousemove", (event) => {
  elements.forEach((element) => {
    const xDiff = Math.abs(event.clientX - element.offsetLeft - (element.offsetWidth / 2));
    const yDiff = Math.abs(event.clientY - element.offsetTop - (element.offsetHeight / 2));
    const distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
    const speed = 20;
    
    if (distance < 100) {
      const x = element.offsetLeft - ((event.clientX - element.offsetLeft) / speed);
      const y = element.offsetTop - ((event.clientY - element.offsetTop) / speed);
      
      gsap.to(element, {
        duration: 0.5,
        x: x,
        y: y,
        ease: "power2.out"
      });
    } else {
      gsap.to(element, {
        duration: 0.5,
        x: element.offsetLeft,
        y: element.offsetTop,
        ease: "power2.out"
      });
    }
  });
});


function calculateDaysBetweenDates(begin, end) {
  const beginDate = new Date(begin);
  const endDate = new Date(end);
  const difference = endDate.getTime() - beginDate.getTime();
  const days = difference / (1000 * 3600 * 24);
  return days;
}