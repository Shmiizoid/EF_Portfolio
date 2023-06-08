console.log('working')
//Click arrow function Landing page_________________________________________
document.addEventListener('DOMContentLoaded', () => {
    const pageLink = document.getElementById("landing");
    pageLink.addEventListener('click', () => goToPage ('home.html'));

    const goToPage = (page) => {
        window.location.href = page;
    }
});

//Modal_________________________________________
console.log('working');

document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("resume-modal");
  var trigger = document.getElementById("resume-link");
  var closeButton = document.getElementById("close-modal");
  var resumeImage = document.getElementById("resume-img");

  trigger.addEventListener("click", function(event) {
    event.preventDefault();
    var imageLink = "efr copy.png";
    resumeImage.src = imageLink;
    modal.style.display = "block";
  });

  closeButton.addEventListener("click", function(event) {
    modal.style.display = "none";
  });
});


//Carousel_________________________________________
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const images = document.getElementsByClassName('carousel-images');
let currentImgIndex = 0;


next.addEventListener('click', () => {
    let previousImgIndex = currentImgIndex;
    currentImgIndex++;

    if(currentImgIndex >= images.length) {
        currentImgIndex = 0;
    }

    images[previousImgIndex].style.display = 'none';
    images[currentImgIndex].style.display = 'block';
})

prev.addEventListener('click', () => {
   let previousImgIndex = currentImgIndex
    currentImgIndex--;

    if(currentImgIndex < 0) {
        currentImgIndex = images.length -1;
    }

    images[previousImgIndex].style.display = 'none';
    images[currentImgIndex].style.display = 'block';
});

//One more just for fun
function sendMessage(event) {
    event.preventDefault();
    alert('Message sent!')
}
