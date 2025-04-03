// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // Function to increment the count
  function incrementCount() {
    let count = getCookie('count');
    if (count === null) {
      count = 1;
    } else {
      count = parseInt(count) + 1;
    }
    setCookie('count', count, 30); // expires in 30 days
    return count;
  }

  // Display the count on the webpage
  function displayCount() {
    let count = getCookie('count');
    if (count === null) {
      count = 0;
    }
    document.getElementById('countDisplay').innerText = `Page views for this session: ${count}`;
  }

  // Initialize the count
  let count = incrementCount();
  displayCount();
});