document.getElementById('loginForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const username = form.username.value;
  const password = form.password.value;
  // Add your authentication logic here
  if (username === 'user' && password === 'pass') {
    showLogout();
    clearErrorMessage();
  } else {
    showErrorMessage('Invalid username or password.');
  }
  form.reset();
});

document.getElementById('logoutBtn').addEventListener('click', () => {
  showLogin();
});

function showErrorMessage(message) {
  const errorMessage = document.getElementById('errorMessage');
  errorMessage.textContent = message;
}

function clearErrorMessage() {
  const errorMessage = document.getElementById('errorMessage');
  errorMessage.textContent = '';
}

function showLogin() {
  document.getElementById('title').textContent = 'Log In';
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('logoutBtn').style.display = 'none';
}

function showLogout() {
  document.getElementById('title').textContent = 'Log Out';
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('logoutBtn').style.display = 'block';
}
