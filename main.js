window.addEventListener("scroll", function () {
  var div = document.querySelector(".navbar1");
  if (window.pageYOffset > 0) {
    div.style.backgroundColor = "#222";
  } else {
    div.style.backgroundColor = "transparent";
  }
});
document
  .querySelector(".contact button")
  .addEventListener("click", function (event) {
    event.preventDefault(); // prevent form from submitting

    // Get input values
    var name = document.querySelector(
      '.contact input[type="text"]:nth-of-type(1)'
    ).value;
    var email = document.querySelector(
      '.contact input[type="text"]:nth-of-type(2)'
    ).value;
    var message = document.querySelector(".contact textarea").value;

    // Validate input values
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all required fields."); // show error message
      return; // exit function
    }

    // Send message via AJAX or other method
    document
      .querySelector(".contact button")
      .addEventListener("click", function (event) {
        event.preventDefault(); // prevent form from submitting

        // Get input values
        var name = document.querySelector(
          '.contact input[type="text"]:nth-of-type(1)'
        ).value;
        var email = document.querySelector(
          '.contact input[type="text"]:nth-of-type(2)'
        ).value;
        var message = document.querySelector(".contact textarea").value;

        // Validate input values
        if (
          name.trim() === "" ||
          email.trim() === "" ||
          message.trim() === ""
        ) {
          alert("Please fill in all required fields."); // show error message
          return; // exit function
        }

        // Send message via AJAX
        $.ajax({
          url: "send_message.php", // the URL of your server-side script to handle the message sending
          method: "POST", // the HTTP method to use
          data: {
            name: name,
            email: email,
            message: message,
          }, // the data to send to the server-side script
          success: function (response) {
            // Handle successful response from server
            alert("Message sent successfully!");
          },
          error: function (xhr, status, error) {
            // Handle error response from server
            alert("Error sending message: " + error);
          },
        });

        // Clear input values
        document.querySelector(
          '.contact input[type="text"]:nth-of-type(1)'
        ).value = "";
        document.querySelector(
          '.contact input[type="text"]:nth-of-type(2)'
        ).value = "";
        document.querySelector(".contact textarea").value = "";
      });

    // ...

    // Clear input values
    document.querySelector('.contact input[type="text"]:nth-of-type(1)').value =
      "";
    document.querySelector('.contact input[type="text"]:nth-of-type(2)').value =
      "";
    document.querySelector(".contact textarea").value = "";
  });
  // Initialize the carousel
var myCarousel = document.querySelector("#carouselExampleIndicators");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 20000, // Set the interval to advance the slides every 3 seconds
  wrap: true,
});

// Automatically advance the slides after 5 seconds
setInterval(function () {
  carousel.next();
}, 5000);





  // const cursor = document.querySelector(".cursor");

  // document.addEventListener("mousemove", (e) => {
  //   cursor.style.cssText = `
  //   top: ${e.y - 120}px;
  //   left: ${e.x - 20}px;
  // `;
  // });

  
