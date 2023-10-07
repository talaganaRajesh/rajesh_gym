 // HTML
// Create a div element to display the countdown timer
 

// JavaScript
function countdownTimer(endTime) {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining until the end time
  const timeRemaining = endTime - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = `Deal ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown has reached zero, display a message
  if (timeRemaining <= 0) {
    countdownElement.innerHTML = "Time's up!";
  }
}

// Set the end time (replace with your desired end time)
const endTime = new Date("October 31, 2023 00:00:00").getTime();

// Update the countdown every second (1000 milliseconds)
setInterval(function() {
  countdownTimer(endTime);
}, 1000);
