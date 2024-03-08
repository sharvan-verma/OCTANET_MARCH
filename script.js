
window.onload = function() {

  var countDownDate = new Date();
  countDownDate.setDate(countDownDate.getDate() + 2); 

  var x = setInterval(function() {
  
    var now = new Date().getTime();


    var distance = countDownDate - now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);


  var form = document.getElementById("rsvpForm");
  form.addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var attending = document.getElementById("attending").value;

    if (name.trim() === "" || email.trim() === "") {
      alert("Name and email are required fields!");
      event.preventDefault();
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address!");
      event.preventDefault();
    } else {
      alert("Thank you for RSVPing, " + name + "!");
    }
  });

  // Email validation function
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
};
