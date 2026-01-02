import { useEffect, useState } from "react";

export function useTypewriter(words: string[], speed = 80, pause = 1200) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: number;

    if (!deleting && text.length < current.length) {
      timeout = window.setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, speed);
    } else if (!deleting && text === current) {
      timeout = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = window.setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, speed / 2);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}
