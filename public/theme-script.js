try {
  let theme = localStorage.getItem('theme');
  if (!theme) {
    theme = 'dark';
    localStorage.setItem('theme', theme);
  }
  if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
} catch (_) {}
