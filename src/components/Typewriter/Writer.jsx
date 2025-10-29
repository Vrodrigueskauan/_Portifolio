import React, { useEffect, useState, useRef } from "react";
import "./Typewriter.css";



export default function TypewriterHighlight({
  fixedStart = "Sou",
  phrases = ["engenheiro de software", "desenvolvedor frontend", "programador fullstack"],
  fixedEnd = "focado em performance e inovação.",
  typingSpeed = 120,
  deletingSpeed = 60,
  pauseBetween = 1200,
  loop = true,
}) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentPhrase = phrases[index % phrases.length];

    const handleTyping = () => {
      if (!isDeleting) {
        const next = currentPhrase.slice(0, display.length + 1);
        setDisplay(next);
        if (next === currentPhrase) {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseBetween);
        } else {
          timeoutRef.current = setTimeout(handleTyping, typingSpeed);
        }
      } else {
        const next = currentPhrase.slice(0, display.length - 1);
        setDisplay(next);
        if (next === "") {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
          if (!loop && index + 1 >= phrases.length) return;
          timeoutRef.current = setTimeout(handleTyping, typingSpeed);
        } else {
          timeoutRef.current = setTimeout(handleTyping, deletingSpeed);
        }
      }
    };

    timeoutRef.current = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeoutRef.current);
  }, [display, isDeleting, index, phrases, typingSpeed, deletingSpeed, pauseBetween, loop]);

  return (
    <div className="typewriter-container">
      <span className="fixed-text">{fixedStart} </span>
      <span className="changing-text">{display}</span>
      <span className="cursor">|</span>
      <span className="fixed-text"> {fixedEnd}</span>
    </div>
  );
}
