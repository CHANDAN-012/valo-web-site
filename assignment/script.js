document.addEventListener('DOMContentLoaded', () => {
  // Signup validation
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const password = document.getElementById('password').value;
      const confirm = document.getElementById('confirmPassword').value;

      if (password !== confirm) {
        alert('❌ Passwords do not match!');
      } else {
        alert('✅ Signup successful!');
        window.location.href = 'login.html';
      }
    });
  }

  // Login validation
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const pass = document.getElementById('loginPassword').value;

      if (email && pass) {
        alert('✅ Login successful!');
        window.location.href = 'index.html';
      } else {
        alert('❌ Please fill all fields.');
      }
    });
  }
});
