import { useEffect, useState } from 'react';

export const lookAgain = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  words: string[]
) => {
  const [randomWord, setRandomWord] = useState(words[0]);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      if (window.scrollY + window.innerHeight < ref.current.offsetTop + 10) {
        if (seen) {
          setSeen(false);
          setRandomWord(words[Math.floor(Math.random() * words.length)]);
        }
      } else if (!seen) setSeen(true);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [seen]);

  return randomWord;
};
