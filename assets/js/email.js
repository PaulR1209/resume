function sendMail(contactForm) {
    emailjs.send("gmail", "template_5d7swes", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Your message has been sent successfully!");
        },
        function(error) {
            console.log("FAILED", error);
            alert("Oops! Something went wrong. Please try again later.");
        }
    );

    return false;
}