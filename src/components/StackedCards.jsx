import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StackedCards({ direction = "vertical" }) {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const items = wrapperRef.current.querySelectorAll(".item");

    // Set posisi awal
    items.forEach((item, index) => {
      if (index !== 0) {
        direction === "horizontal"
          ? gsap.set(item, { xPercent: 100 })
          : gsap.set(item, { yPercent: 100 });
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        end: `+=${items.length * 100}%`,
        scrub: 1,
      },
      defaults: { ease: "none" },
    });

    items.forEach((item, index) => {
      tl.to(item, { scale: 0.9, borderRadius: "12px" });

      if (items[index + 1]) {
        direction === "horizontal"
          ? tl.to(items[index + 1], { xPercent: 0 }, "<")
          : tl.to(items[index + 1], { yPercent: 0 }, "<");
      }
    });
  }, [direction]);

  return (
    <section
      ref={sectionRef}
      className="scroll-section w-full h-screen overflow-hidden"
    >
      <div ref={wrapperRef} className="wrapper w-full h-full relative">
        {/* CARD 1 */}
        <div className="item absolute inset-0 bg-red-500 flex items-center justify-center text-5xl font-bold">
          <Home />
        </div>

        {/* CARD 2 */}
        <div className="item absolute inset-0 bg-blue-500 flex items-center justify-center text-5xl font-bold">
          <About />
        </div>

        {/* CARD 3 */}
        <div className="item absolute inset-0 bg-green-500 flex items-center justify-center text-5xl font-bold">
          <Skills />
        </div>
      </div>
    </section>
  );
}