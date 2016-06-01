$(document).ready(function() {
	$("#name").focus();

	// Auto-populate today's date
	var today = new Date();	
	$("#date").val((today.getMonth() + 1) + "/" + today.getDate() + "/" + 
					today.getFullYear());	

	// Validate fields
	$("#submit").click(function() {
		$("#registration_form").validate({
			rules: {
				name: { 
					required: true 
				},
				email: {
					required: true,
					email: true
				},
				date_of_birth: {
					required: true,
					date: true
				},
				phone_number: {
					required: true,
					phoneUS: true
				},
				phone_type: {
					required: true
				},
				password: {
					required: true,
					rangelength: [6, 10]
				},
				verify_password: {
					required: true,
					equalTo: "#password"
				},
				answer: {
					required: true
				},
				choice: {
					required: true
				},
				checkbox: {
					required: "#yesOption:checked",
					minlength: 1
				}
			},
			messages: {
				name: {
					required: "Name required."
				},
				email: {
					required: "Email address required.",
					email: "Valid email address required."
				},
				date_of_birth: {
					required: "Date of birth required.",
					date: "A valid date following the MM/DD/YYYY format is required."
				},
				phone_number: {
					required: "Phone number required.",
					phoneUS: "Valid phone number required."
				},
				phone_type: {
					required: "Phone number type required."
				},
				password: {
					required: "Password required.",
					rangelength: "Must be between 6 to 10 characters."
				},
				verify_password: {
					required: "Please re-enter your password.",
					equalTo: "Passwords do not equal each other."
				},
				answer: {
					required: "Security answer required."
				},
				choice: {
					required: "Please choose yes or no."
				},
				checkbox: {
					required: "Please choose at least one special offer."
				}
			},
			errorPlacement: function(error, element) {
				if (element.prop("type") == "radio") {
					error.insertAfter(element.parent());				
				} else if (element.prop("type") == "checkbox") {				
					error.prependTo(".checkbox_error");
				} else {
					error.insertAfter(element);
				}
			}
		});	// end validate
	}); // end click

	// Disables and clears checkboxes when "No" is selected
	$("#noOption").change(
		function() {
			$(":checkbox").attr("disabled", true);
			$(":checkbox").attr("checked", false);
	});	// end change
	
	// Enables checkboxes when "Yes" is selected
	$("#yesOption").change(
		function() {
			$(":checkbox").attr("disabled", false);			
	});	// end change	
	$(":checkbox").change(
		function() {
			$("#yesOption").prop("checked", true);
	}); // end change
});	// end ready