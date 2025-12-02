// StackedCards.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StackedCards() {
  const containerRef = useRef(null);
  const tlRef = useRef(null);

  const cards = [
    { id: 1, image: "/summitz-homepage.png" },
    { id: 2, image: "/ticktime-homepage.png" },
    { id: 3, image: "/your-image-here.png" },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const wrapper = container.querySelector(".stacked-cards .wrapper");
    const items = wrapper.querySelectorAll(".stacked-cards .item");

    // set initial positions
    items.forEach((item, i) => {
      if (i !== 0) gsap.set(item, { yPercent: 100 }); // vertical stack
    });

    // kill existing timeline if any
    if (tlRef.current) {
      tlRef.current.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tlRef.current = null;
    }

    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: container,
        pin: true,
        start: "top top",
        end: () => `+=${items.length * 100}%`, // setiap item setara 100% viewport
        scrub: 0.8,
        invalidateOnRefresh: true,
        markers: true, // aktifkan untuk debugging
      },
    });

    items.forEach((item, i) => {
      // sedikit scale sebelum reveal
      tl.to(item, { scale: 0.96, borderRadius: "12px", duration: 0.6 });

      // animate next item into view
      const next = items[i + 1];
      if (next) {
        tl.to(next, { yPercent: 0, duration: 0.8 }, "<");
      }
    });

    tlRef.current = tl;

    // cleanup
    return () => {
      if (tlRef.current) tlRef.current.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tlRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="stacked-cards scroll-section vertical-section section w-full max-w-7xl mx-auto"
    >
      <div className="wrapper">
        <div className="list">
          {cards.map((card) => (
            <div className="item" key={card.id}>
              <img
                src={card.image}
                alt={`project-${card.id}`}
                className="item_media h-screen object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}