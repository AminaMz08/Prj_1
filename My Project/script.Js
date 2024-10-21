document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
      window.location.href = 'dashboard.html';
  } else {
      document.querySelector('.msg').textContent = "Please fill in both email and password.";
      document.querySelector('.msg').style.color = "red";
  }
});