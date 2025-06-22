(function() {
    const toggle = document.getElementById('theme-toggle');
    const root = document.documentElement;
    // init
    const saved = localStorage.getItem('theme') || 'light';
    root.classList.add(saved);
    toggle.textContent = saved === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
  
    toggle.addEventListener('click', () => {
      const next = root.classList.contains('light') ? 'dark' : 'light';
      root.classList.remove('light', 'dark');
      root.classList.add(next);
      localStorage.setItem('theme', next);
      toggle.textContent = next === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
    });
  })();