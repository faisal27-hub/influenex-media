export type Theme = 'light' | 'dark';

export function getInitialTheme(): Theme {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    return media.matches ? 'dark' : 'light';
  }
  return 'dark'; // Fallback default theme is dark, representing the original branding
}

export function setThemeClass(theme: Theme) {
  if (typeof window === 'undefined') return;
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
    root.setAttribute('data-theme', 'dark');
  } else {
    root.classList.remove('dark');
    root.setAttribute('data-theme', 'light');
  }
  localStorage.setItem('theme', theme);
}
