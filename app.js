
// Modal_________________________________________
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
  

  //One more just for fun
function sendMessage(event) {
  event.preventDefault();
  alert('Message sent!');
}