import { useState, useEffect } from "react";

const useDeviceDetect = () => {
  const [device, setDevice] = useState({
    isDesktop: false,
    isMobile: false,
    isTablet: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // console.log("width", width);
      setDevice({
        isDesktop: width > 1024,
        isMobile: width <= 768,
        isTablet: width > 768 && width <= 1024,
      });
    };

    // Initial detection
    handleResize();
    // Listen for window resize
    window.addEventListener("resize", handleResize);
    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return device;
};

export default useDeviceDetect;
