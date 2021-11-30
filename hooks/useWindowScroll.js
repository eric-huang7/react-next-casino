import {useEffect, useState} from "react";


export default function useWindowScroll() {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {

    if (typeof window !== 'undefined') {
      function handleScroll() {
        setScrollHeight(window.pageYOffset);
      }


      window.addEventListener('scroll', handleScroll);

      handleScroll();


      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }
  }, [])

  return scrollHeight;
}