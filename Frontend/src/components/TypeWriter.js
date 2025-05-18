import { useState, useEffect } from 'react';

function Typewriter({ text, speed = 100, delay = 1500, color = '#000' }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const reset = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, delay);
      return () => clearTimeout(reset);
    }
  }, [index, text, speed, delay]);

  return (
    <span className="typewriter" style={{ color }}>
      {displayedText}
      <span className="cursor">|</span>
    </span>
  );
}

export default Typewriter;
