'use client';

import { useTheme } from '../context/ThemeContex';
import ThemeToggle from './ThemeToggle';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer>
      <div>
        <span>
          Current Theme: {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
        </span>
      </div>
      <ThemeToggle />
    </footer>
  );
};

export default Footer;
