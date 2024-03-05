function validateForm() {
    // Get references to the input fields

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const countryInput = document.getElementById("country");
    const cityInput = document.getElementById("city");
    const messageInput = document.getElementById("message");

    const checkbox = document.getElementById('acceptCondition');
 
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // Check if any of the required fields are empty
    if (
        nameInput.value.trim() === "" ||
        emailInput.value.trim() === "" ||
        phoneInput.value.trim() === "" ||
        countryInput.value.trim() === "" ||
        cityInput.value.trim() === "" 
    ) {
        //alert("Please fill in all required fields.");
       // document.getElementById("errormsg").
        let city=document.getElementById("errormsg");
        city.innerHTML="Please fill in all required fields.";
        city.style.color="red"
        
        return false; // Prevent form submission
    }

    // Validate email format using a regular expression
    
    else if (!emailPattern.test(emailInput.value.trim())) {

        let city=document.getElementById("errormsg");
        city.innerHTML="Please enter a valid email address.";
city.style.color="red"
        return false; // Prevent form submission
        
    }else if(!checkbox.checked){
               let city=document.getElementById("errormsg");
        city.innerHTML="Please accept terms and conditions";
        city.style.color="red"
        
        return false; // Prevent form submission
    }
    
    
    
    else{
    return true;    
    }
    
     // Allow form submission
}

// Your JavaScript code
document.getElementById("subscribe-form").addEventListener("submit", function(event) {
    event.preventDefault();
	// Open the modal using Bootstrap's modal function
	//$('#ignismyModal').modal('show');
	  let city=document.getElementById("errormsg");
        city.innerHTML="";
   var formData = {
      usertype: $("#name").val(),
      email: $("#email").val(),
      phone: $("#phone").val(),
      country: $("#country").val(),
      city: $("#city").val(),
      message: $("#message").val(),
    };
  console.log(formData);
  
    if (validateForm()) {
      
  //var formData = $(this).serialize();

        $.ajax({
            url: "http://localhost/revvdout/site/adddata", // Update with the actual URL
            method: "POST",
            data: formData,
            success: function (response) {
                // $("#response").html(response);
			console.log(response);
			
			$('#ignismyModal').modal('show');
             const form = document.getElementById('subscribe-form');
  form.reset();
                
            }
        });
    }else{
  
    }
});
