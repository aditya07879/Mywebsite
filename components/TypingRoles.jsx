"use client";

import { useEffect, useState } from "react";

const roles = ["Aditya Tomar", "Developer", "Writer", "Student"];

const TypingRoles = ({ speed = 120, pause = 1200 }) => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let timeout;

    if (!deleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
    } 
    else if (!deleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, pause);
    } 
    else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, speed / 2);
    } 
    else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex, speed, pause]);

  return (
    <span className="text-accent">
      {text}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
};

export default TypingRoles;
