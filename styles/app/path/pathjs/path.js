  function submitForm() {
    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Hardcoded login credentials for demonstration purposes
    var correctUsername = "123";
    var correctPassword = "123";

    // Check if the entered credentials match the hardcoded values
    if (username === correctUsername && password === correctPassword) {
      alert("Login successful!");
      // Redirect to the next webpage upon successful login
      window.location.href = "GaimClone.html"; // Replace with your actual webpage URL
    } else {
      alert("Invalid username or password. Please try again.");
      // You can show an error message or perform other actions for unsuccessful login
    }
  }
  function callEmergencyNumber(number) {
    // You can add additional logic here, such as confirming the call
    // For demonstration purposes, we'll redirect to the mobile dialer
    window.location.href = 'tel:' + number;
  }