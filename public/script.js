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
  }, 1); // This delay matches the transition duration in CSS
}, 6); //used to be 2000, 6000


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
      moveBackground("150%", "-1700px", "-1350px")
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
//function checkWindowSize() {
//  // Set your minimum width and height thresholds
//  const minWidth = 1405;
//  const minHeight = 676;
//
//  const overlay = document.getElementById('too-small-overlay');
//
//  if (window.innerWidth < minWidth || window.innerHeight < minHeight) {
//    if (!overlay) {
//      // Create the overlay element if it doesn't exist
//      const overlay = document.createElement('div');
//      overlay.id = 'too-small-overlay';
//      overlay.style.position = 'fixed';
//      overlay.style.top = 0;
//      overlay.style.left = 0;
//      overlay.style.width = '100%';
//      overlay.style.height = '100%';
//      overlay.style.backgroundColor = '#3c3836';
//      overlay.style.color = 'white';
//      overlay.style.display = 'flex';
//      overlay.style.alignItems = 'center';
//      overlay.style.justifyContent = 'center';
//      overlay.style.zIndex = 9999;
//      overlay.style.fontSize = '12px'; // Smaller font size
//      overlay.innerHTML = '<p>HMMM,<br>\
//           your window is too small.<br>\
//           This website is best viewed full-screen, landscape orientation.<br>\
//           Or, try zooming out or turning your phone sideways.</p>';
//
//      //border to help 
//      const overlayBorder = document.createElement('canvas');
//      overlayBorder.style.position = 'absolute';
//      overlayBorder.style.left = 0;
//      overlayBorder.style.top = 0;
//      const ctx = overlayBorder.getContext("2d");
//      ctx.translate(.5,.5);
//      overlayBorder.width = 1405;
//      overlayBorder.height = 676;
//      ctx.clearRect(0, 0, overlayBorder.width, overlayBorder.height);
//      ctx.beginPath();
//    
//      //outerBorder
//      ctx.moveTo(0, 0);
//      ctx.lineTo(overlayBorder.width, 0);
//      ctx.lineTo(overlayBorder.width, overlayBorder.height);
//      ctx.lineTo(0, overlayBorder.height);
//      ctx.lineTo(0,0);
//      ctx.moveTo(5, 5);
//      ctx.lineTo(5, overlayBorder.height - 5);
//      ctx.lineTo(overlayBorder.width -5, overlayBorder.height - 5);
//      ctx.lineTo(overlayBorder.width-5, 5);
//      ctx.lineTo(5, 5);
//
//      //helper arrows
//      let arrowXpos = 930; //max target: 1370
//      let arrowYpos = 250;
//      for(let i = 0; i < 7; i++){
//        ctx.moveTo(arrowXpos, arrowYpos-10);
//        ctx.lineTo(arrowXpos+20, arrowYpos);
//        ctx.lineTo(arrowXpos, arrowYpos+10);
//        ctx.lineTo(arrowXpos, arrowYpos+7);
//        ctx.lineTo(arrowXpos+15, arrowYpos);
//        ctx.lineTo(arrowXpos, arrowYpos-7);
//        ctx.lineTo(arrowXpos, arrowYpos-10);
//        arrowXpos+=70;
//      }
//      arrowXpos = 300;
//      arrowYpos = 338;
//      for(let i = 0; i < 5; i++){
//        ctx.moveTo(arrowXpos-10, arrowYpos);
//        ctx.lineTo(arrowXpos, arrowYpos + 20);
//        ctx.lineTo(arrowXpos+10, arrowYpos);
//        ctx.lineTo(arrowXpos+7, arrowYpos);
//        ctx.lineTo(arrowXpos, arrowYpos+15);
//        ctx.lineTo(arrowXpos-7, arrowYpos);
//        ctx.lineTo(arrowXpos-10, arrowYpos);
//        arrowYpos+=70;
//      }
//      //draw
//      ctx.fillStyle = "#ffffff";
//      ctx.fill();
//      ctx.closePath();
//      //add overlay to page
//      overlay.appendChild(overlayBorder);
//      document.body.appendChild(overlay);
//      console.error("Error: Window size is too small."); // Print error to console
//    }
//  } else {
//    if (overlay) {
//      // Remove the overlay if the window size is now sufficient
//      overlay.remove();
//    }
//  }
//}

// Initial check and add event listener for resize and zoom
//checkWindowSize();
//got this code from stackoverflow. Felt cute. Might delete later. 
let widthMatch = window.matchMedia("(min-width: 1405px)");
// mm in the function arg is the matchMedia object, passed back into the function
widthMatch.addEventListener('change', function(mm) {
    if (mm.matches) {
        // it matches the media query: that is, min-width is >= 500px
        window.addEventListener('resize', deathdays);
    }
    else {
        // it no longer matches the media query
        window.removeEventListener('resize', deathdays);
    }
});
deathdays=()=>{window.scrollTo(0,0);console.log("swag");}

/* ..:: H E A D E R   B O R D E R ::..*/
const canvas = document.getElementById("headerBorder");
const ctx = canvas.getContext("2d");
ctx.translate(.5,.5); //gotta straddle the pixles?
window.scrollTo(0,0);
window.scrollTo(0,0);
window.scrollTo(0,0);
window.scrollTo(0,0);
const cw = canvas.width; //You know, they told us about good naming conventions 
const ch = canvas.height; //but they never mentioned anything about car pool tunnel.

draw=()=> {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();

  //outerBorder
  ctx.moveTo(10, 10);
  ctx.lineTo(cw-10, 10);
  ctx.lineTo(cw-10, ch-10);
  ctx.lineTo(10, ch-10);
  ctx.lineTo(10, 10);
  //counterclockwise to make hole 
  ctx.moveTo(12, 12);
  ctx.lineTo(12, ch-12);
  ctx.lineTo(cw-12, ch-12);
  ctx.lineTo(cw-12, 12);
  ctx.lineTo(12, 12);

  //bottomdeco
  ctx.moveTo(12, ch-30);
  ctx.lineTo(cw-12, ch-30);
  ctx.lineTo(cw-12, ch-12);
  ctx.lineTo(12, ch-12);
  //ditto
  ctx.moveTo(12, ch-28);
  ctx.lineTo(12, ch-12);
  ctx.lineTo(cw-12, ch-12);
  ctx.lineTo(cw-12, ch-28);
  //filled boxes
  let bunk = 12;
  let chunk = 160;
  for(let i = 0; i < 12; i++){
    if(!(i % 2)){
      ctx.moveTo(bunk, ch-30);
      ctx.lineTo(chunk, ch-30);
      ctx.lineTo(chunk, ch-12);
      ctx.lineTo(bunk, ch-12);
    }
    bunk = chunk;
    chunk += 160;
  }

  ctx.fillStyle = "#928374";
  ctx.fill();
  ctx.closePath();
}

/* ..:: L A N D I N G   D E C O ::..*/

//TODO: Make this dynamic on resize 
const landingElement = document.getElementById("landing");
const landingCanvas = document.getElementById("landingDeco");
const lctx = landingCanvas.getContext("2d");
lctx.translate(.5,.5); //gotta straddle the pixles?
let lcw = landingElement.clientWidth;
let lch = landingElement.clientHeight;
landingCanvas.width = lcw;
landingCanvas.height = lch;
//console.log(lch);
ldraw=()=> {
  lctx.clearRect(0, 0, lcw, lch);
  lctx.beginPath();

  //outerBorder
  lctx.moveTo(10, 10);
  lctx.lineTo(lcw-10, 10);
  lctx.lineTo(lcw-10, lch-10);
  lctx.lineTo(10, lch-10);
  lctx.lineTo(10, 10);
  //counterclockwise to make hole 
  lctx.moveTo(12, 12);
  lctx.lineTo(12, lch-12);
  lctx.lineTo(lcw-12, lch-12);
  lctx.lineTo(lcw-12, 12);
  lctx.lineTo(12, 12);

  lctx.fillStyle = "#928374";
  lctx.fill();
  lctx.closePath();
}

draw();
//ldraw(); //TODO mae dynamic on resize
