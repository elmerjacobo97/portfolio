"use client";
import { FC, useEffect, useState } from "react";

interface TypingEffectProps {
  texts: string[];
  speed: number;
}

export const TypingEffect: FC<TypingEffectProps> = ({ texts, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const text = texts[currentIndex];
    let typingTimer: NodeJS.Timeout;
    let deletingTimer: NodeJS.Timeout;

    const typingEffect = () => {
      typingTimer = setInterval(() => {
        if (displayedText.length < text.length) {
          setDisplayedText(
            (prevText) => prevText + text.charAt(prevText.length)
          );
        } else {
          clearInterval(typingTimer);
          setIsTypingComplete(true);
        }
      }, speed);
    };

    const deletingEffect = () => {
      deletingTimer = setInterval(() => {
        if (displayedText.length > 0) {
          setDisplayedText((prevText) =>
            prevText.slice(0, prevText.length - 1)
          );
        } else {
          clearInterval(deletingTimer);
          setIsTypingComplete(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }, speed);
    };

    if (!isTypingComplete) {
      typingEffect();
    } else {
      deletingEffect();
    }

    return () => {
      clearInterval(typingTimer);
      clearInterval(deletingTimer);
    };
  }, [texts, speed, currentIndex, displayedText.length, isTypingComplete]);

  return (
    <>
      <span className="text-success border-b-2 border-success">
        {displayedText}
      </span>
      <span className="text-success border-b-2 border-success animate-pulse">
        |
      </span>
    </>
  );
};
