
// Modal_________________________________________
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("resume-modal");
    const trigger = document.getElementById("resume-link");
    const closeButton = document.getElementById("close-modal");
    var resumeImage = document.getElementById("resume-img");
  
    trigger.addEventListener("click", function(event) {
      event.preventDefault();
      const imageLink = "efr copy.png";
      resumeImage.src = imageLink;
      modal.style.display = "block";
    });
  
    closeButton.addEventListener("click", function(event) {
      modal.style.display = "none";
    });
  });
 
  //One more just for fun
function sendMessage(event) {
  event.preventDefault();
  alert('Message sent!');
}

document.addEventListener('DOMContentLoaded', function() {

  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');
  const images = document.getElementsByClassName('images');
  let currentImgIndex = 0;

  next.addEventListener('click', () => {
    let previousImgIndex = currentImgIndex;
    currentImgIndex++;

    if (currentImgIndex >= images.length) {
      currentImgIndex = 0;
    }

    images[previousImgIndex].style.display = 'none';
    images[currentImgIndex].style.display = 'block';
  });

  prev.addEventListener('click', () => {
    let previousImgIndex = currentImgIndex;
    currentImgIndex--;

    if (currentImgIndex < 0) {
      currentImgIndex = images.length - 1;
    }

    images[previousImgIndex].style.display = 'none';
    images[currentImgIndex].style.display = 'block';
  });

});
