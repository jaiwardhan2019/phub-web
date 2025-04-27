import React, { useEffect, useRef, useState } from 'react';

const TopBarLoader = ({ loading }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (loading) {
      setVisible(true);
      setProgress(0);

      // Simulate slow loading to 90%
      timer.current = setInterval(() => {
        setProgress((prev) => {
          if (prev < 90) return prev + 1;
          clearInterval(timer.current);
          return prev;
        });
      }, 100);
    } else {
      // Finish to 100% and hide after short delay
      setProgress(100);
      setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 500);
    }

    return () => clearInterval(timer.current);
  }, [loading]);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      height: '3px',
      width: '100%',
      backgroundColor: 'transparent',
      zIndex: 9999,
    }}>
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          backgroundColor: '#0d6efd',
          transition: 'width 0.3s ease',
        }}
      />
    </div>
  );
};

export default TopBarLoader;
