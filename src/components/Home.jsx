import FadeIn from "./FadeIn"
import { useState, useEffect } from "react"

export default function Home () {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="flex flex-col justify-center items-center text-center h-screen text-white">
      <div className="grid grid-cols-2 grid-rows-2">
        <div className="col-span-1 flex items-end">
          <FadeIn delay={0.1}>
            <h1 className="text-2xl text-start" style={{ fontFamily: "'Momo Signature', cursive"}}>
              Hello there! <span className="font-medium text-2xl" style={{ fontFamily: "'Rubik', sans-serif" }}>My name is</span>
            </h1>
          </FadeIn>
        </div>
        <div className="col-span-2 flex items-start">
          <FadeIn delay={0.3}>
            <p className="text-8xl text-start" style={{ fontFamily: "'Bebas Neue', cursive" }}>
              Dhanu Pandhowo
            </p>
          </FadeIn>
        </div>

        <div className={`fade-in ${isVisible ? "visible" : ""}`}>
          <img src="/Myself.png" alt="" className="absolute z-20 w-lg bottom-0" />
        </div>
        
      </div>
    </section>
  )
}