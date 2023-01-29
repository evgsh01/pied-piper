function addSmoothScroll(link) {
    link.addEventListener("click", onLinkClick);
  }
  
function onLinkClick(event) {
    event.preventDefault();
    
    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  }
  
document.querySelectorAll("a[href^=\"#\"]").forEach(el => addSmoothScroll(el));