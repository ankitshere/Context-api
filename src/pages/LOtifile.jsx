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

  return  <div
      ref={animationRef}
      className="w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[450px] mx-auto"
    />;
};

export default MyAnimation;

