import { useState, useEffect } from 'react';

// Get window's dimension
const useWindowDimensions = () => {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  };
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

// Resize textfield dynamically using useCalcRows
const useCalcRows = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  if (windowHeight > 760) {
    if (windowWidth < 600) {
      return { minRows: 14, maxRows: 14 };
    } else if (windowWidth < 960) {
      return { minRows: 27, maxRows: 27 };
    }
    return { minRows: 27, maxRows: 27 };
  } else {
    if (windowWidth < 600) {
      return { minRows: 15, maxRows: 15 };
    } else if (windowWidth < 960) {
      return { minRows: 18, maxRows: 18 };
    }
    return { minRows: 18, maxRows: 18 };
  }
};

export { useCalcRows, useWindowDimensions };
