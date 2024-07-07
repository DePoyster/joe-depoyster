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
      //welcomeMessage.style.display = 'none';
      siteTitle.style.opacity = 1; /* Trigger the fade-in of the title */
      mainContent.style.opacity = 1;
  }, 2000); // This delay matches the transition duration in CSS
}, 6000); //used to be 2000, 6000



/* ..:: I N F O    S L I D E R */
const infoImages = document.querySelectorAll('.slidey-button');
const infoSlides = document.querySelectorAll('.slidey-thing');
const closeButtons= document.querySelectorAll('.close-button');


function closeSlides() {
  infoSlides.forEach(slide => slide.classList.remove('open'));
}

infoImages.forEach(image => {
  image.addEventListener('click', function() {
    const infoId = this.dataset.infoId;
    const infoSlide = document.getElementById(infoId);
    closeSlides();
    infoSlide.classList.add('open');
  });
});

closeButtons.forEach(button => button.onclick = closeSlides)

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
