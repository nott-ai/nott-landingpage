import { useEffect, useState } from "react";

const TypeWriter = ({ text, speed }: { text: string; speed: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [text, speed, currentIndex]);

  return displayText;
};

export default TypeWriter;
