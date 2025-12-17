// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  // Load dark mode preference from localStorage
  const darkPref = localStorage.getItem('theme-dark') === 'true';
  if (darkPref) document.body.classList.add('theme-dark');

  function setPressed(state) {
    toggleBtn.setAttribute('aria-pressed', String(state));
    toggleBtn.textContent = state ? '☀️ Light mode' : '🌙 Dark mode';
  }

  toggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('theme-dark');
    localStorage.setItem('theme-dark', isDark); // Save preference
    setPressed(isDark);
  });

  setPressed(document.body.classList.contains('theme-dark'));
});
