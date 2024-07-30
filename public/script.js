// taken from a well-known javascript library
//i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

/* ..:: W E L C O M E   M E S S A G E ::.. */
const welcomeMessage = document.querySelector('.welcome-message');
const siteTitle = document.querySelector('header');
const mainContent = document.querySelector('main');

// Transition the welcome message in
welcomeMessage.style.opacity = 1;
// After 3 seconds, transition the welcome message out and display the main content and site title
setTimeout(() => {
  welcomeMessage.style.opacity = 0;
  setTimeout(() => {
      welcomeMessage.style.display = 'none';
      siteTitle.style.opacity = 1; /* Trigger the fade-in of the title */
      mainContent.style.opacity = 1;
  }, 1000); // This delay matches the transition duration in CSS
}, 6000); //used to be 2000, 6000


/* ..:: I N F O    S L I D E R */
const slideyButtons = document.querySelectorAll('.slidey-button');
const slideyPage = document.querySelectorAll('.slidey-thing');
const closeButtons= document.querySelectorAll('.close-button');

function closeSlides() {
  slideyPage.forEach(slide => slide.classList.remove('open'));
}

slideyButtons.forEach(button => {
  button.addEventListener('click', function() {
    const pageId = this.dataset.pageId;
    if(pageId == "landing"){
      moveBackground("100%", "center", "-30vh");
    } else if(pageId == "webapp" || pageId == "thiswebsite"){
      moveBackground("150%", "-500px", "-1100px");
    } else if(pageId == "linux" || pageId == "education"){
      moveBackground("150%", "-1700px", "-1200px")
    } else if(pageId == "embedded"){
      moveBackground("150%", "-900px", "-20px")
    } else if(pageId == "piano"){
      moveBackground("150%", "-200px", "-110px")
    }
    const slidePage = document.getElementById(pageId);
    closeSlides();
    slidePage.classList.add('open');
  });
});

closeButtons.forEach(button => button.onclick = closeSlides)

/* ..:: move the landing map to something coo ::.. */
function moveBackground(size, xpos, ypos){
  let mainstyle = document.body.getElementsByTagName('main')[0].style;
  mainstyle.backgroundSize = size;
  mainstyle.backgroundPositionX = xpos;
  mainstyle.backgroundPositionY = ypos;
}


/* ..:: P A G E   T O O   S M A L L ::.. */
function checkWindowSize() {
  // Set your minimum width and height thresholds
  const minWidth = 500;
  const minHeight = 200;

  const overlay = document.getElementById('too-small-overlay');

  if (window.innerWidth < minWidth || window.innerHeight < minHeight) {
    if (!overlay) {
      // Create the overlay element if it doesn't exist
      const overlay = document.createElement('div');
      overlay.id = 'too-small-overlay';
      overlay.style.position = 'fixed';
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'gray';
      overlay.style.color = 'white';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.zIndex = 9999;
      overlay.style.fontSize = '12px'; // Smaller font size
      overlay.innerHTML = '<p>HMMM,<br> your window is too small.<br>  Try turning your phone sideways, or zooming out.</p>';

      document.body.appendChild(overlay);
      console.error("Error: Window size is too small."); // Print error to console
    }
  } else {
    if (overlay) {
      // Remove the overlay if the window size is now sufficient
      overlay.remove();
    }
  }
}

// Initial check and add event listener for resize and zoom
checkWindowSize();
window.addEventListener('resize', checkWindowSize);
