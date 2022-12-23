import React from "react"

export default function useOnScreen(ref: React.RefObject<HTMLDivElement>) {
  if (typeof IntersectionObserver !== "undefined") {
    const [isIntersecting, setIntersecting] = React.useState(false)

    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    )

    React.useEffect(() => {
      if (ref?.current) {
        observer.observe(ref.current);
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
      }
    }, []);

    return isIntersecting;
  }

  return false;
};
