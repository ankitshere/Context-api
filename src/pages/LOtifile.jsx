import { useEffect, useRef } from "react";

const MyAnimation = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    const anim = window.lottie.loadAnimation({
      container: animationRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/Instructions.json", // your file name in public
    });

    return () => anim.destroy();
  }, []);

  return <div ref={animationRef} style={{ width:450 }}></div>;
};

export default MyAnimation;