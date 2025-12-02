import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function TextFollow() {
  const text = `Computer Science student at Semarang State University with an interest in Web Development and Software Engineering. Experienced in designing high-fidelity user interfaces and responsive web pages using React and Tailwind CSS, supported by the use of Git Version Control. Possesses strong problem-solving, collaboration, and adaptation skills.`;
  const words = text.split(" ");
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section__title--1 span",
        scrub: 1,
        start: "top bottom",
        end: "bottom 50%",
      },
    });
    gsap.utils.toArray(".section__title--1 span").forEach((word) => {
      tl.to(word, {
        backgroundPosition: `0% 0px`,
      });
    });
  });

  return (
    <div className="section px-20">
      <h1 className="section__title section__title--1 text-4xl text-justify" style={{ fontFamily:"'Poppins', sans-serif" }}>
        {words.map((word, index) => {
          return <span key={index}>{word} </span>;
        })}
      </h1>
    </div>
  );
}