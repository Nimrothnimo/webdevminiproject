new Vue({
    el: '#app',
    data: {
        formData: {     // Data object containing form fields
            name: '',
            email: '',
            message: ''
        }
    },
    methods: 
        submitForm() // Method to handle form submission
            
           
             {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',  //SpecifyingJSON content type
                },
                },
                body: JSON.stringify(this.formData), // Converting form data to JSON string and sending it in the request body
            })
            .then(response => {
                if (response.ok) {
                    alert('Feedback submitted successfully!'); //Alerting user about successful submission
                    
                    this.formData.name = '';
                    this.formData.email = '';
                    this.formData.message = '';
                } else {
                    alert('Failed to submit feedback. Please try again later.'); //Alerting user about failed submission
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to submit feedback. Please try again later.');
            }); 
            // Add an event listener when the DOM is fully loaded
            document.addEventListener('DOMContentLoaded', function() {
              
                
                 // Get all navigation links within the <nav> element
                var navigationLinks = document.querySelectorAll('nav ul li a');
                navigationLinks.forEach(function(link) {
                  link.addEventListener('mouseenter', function() {
                    this.style.color = 'green';
                  });
                  link.addEventListener('mouseleave', function() {
                    this.style.color = ''; 
                  });
                });
              });
            
