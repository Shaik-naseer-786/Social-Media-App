import React, { useState, useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import './DarkMode.css';

const DarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('darkmode');
    } else {
      document.body.classList.remove('darkmode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <div className="dark-mode-icon">
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={22} // Adjust size as needed
        color='#6c63ff'
      />
    </div>
  );
};

export default DarkMode;
