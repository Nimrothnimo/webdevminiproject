
document.addEventListener('DOMContentLoaded', function() {
  
  
  // Select all anchor elements (links) within list items inside the navigation menu
  var navigationLinks = document.querySelectorAll('nav ul li a');
  navigationLinks.forEach(function(link) { // Iterate over each selected link element
    link.addEventListener('mouseenter', function() {
      this.style.color = 'green';
    });
     // Add an event listener for the mouseleave event, which triggers when the mouse cursor leaves the element
    link.addEventListener('mouseleave', function() {
      this.style.color = ''; 
    });
  });
});