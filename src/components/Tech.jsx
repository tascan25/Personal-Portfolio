import { useState, useEffect } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import GalaxySkills from "./ui/TechSpace";

const Tech = () => {
  const words = [
    "React.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "CSS3",
    "HTML5",
    "MongoDB",
    "Git",
    "GitHub",
    "Tailwind CSS",
    "Redux Toolkit",
    "Three.js",
    "React Native",
    "Figma",
    "Express.js",
    "RESTful APIs",
  ];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
          if (charIndex === currentWord.length) {
            setTimeout(() => setIsDeleting(true), 1200);
          }
        } else {
          setText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
          if (charIndex === 0) {
            setIsDeleting(false);
            setWordIndex((wordIndex + 1) % words.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);
  return (
    <div className="h-full w-full">
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-20 w-full text-center italic">
        Technologies and Tools I Know{" "}<br/>
        <span className="text-[#915EFF]">{text}</span>
        <span className="animate-pulse">|</span>
      </h2>
      <div className="felx flex-row items-center justify-center mt-28">
        <GalaxySkills skills={technologies} />
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
