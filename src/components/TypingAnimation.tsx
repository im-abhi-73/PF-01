import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  className?: string;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, text]);

  return (
    <span className={className}>
      {displayText}
      <span className={`inline-block w-0.5 h-6 bg-blue-500 ml-1 animate-pulse ${isTyping ? 'opacity-100' : 'opacity-0'}`} />
    </span>
  );
};