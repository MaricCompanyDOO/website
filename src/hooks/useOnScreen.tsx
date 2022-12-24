import React from "react"

export default function useOnScreen(ref: React.RefObject<HTMLDivElement>) {
  const [isIntersecting, setIntersecting] = React.useState(false)

  React.useEffect(() => {
    if (ref?.current) {
      const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
      )
      
      observer.observe(ref.current);
      
      return () => { observer.disconnect() }
    }
  }, []);

  return isIntersecting;
};
