import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Footer.css";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 70%",
        },
      });

      tl.from(titleRef.current.children, {
        y: 120,
        opacity: 0,
        skewY: 6,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.12,
      })
        .from(
          textRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          lineRef.current,
          {
            scaleX: 0,
            transformOrigin: "left",
            duration: 1.2,
            ease: "expo.out",
          },
          "-=0.6"
        )
        .from(
          linksRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.6"
        );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-bg" />

      <div className="footer-container">
        <span className="footer-label">Encerramento</span>

        <h2 ref={titleRef} className="footer-title">
          <span>Obrigado</span>
          <span>por</span>
          <span>chegar</span>
          <span>até</span>
          <span>aqui</span>
        </h2>

        <p ref={textRef} className="footer-text">
          Design não é aparência.
          <br />
          É intenção, ritmo e obsessão por detalhe.
        </p>

        <div ref={lineRef} className="footer-line" />

        <div className="footer-bottom">
          <span className="footer-copy">
            © {new Date().getFullYear()} — Kauan Rodrigues
          </span>

          <nav className="footer-links">
            {["Projetos", "Sobre", "Contato"].map((item, i) => (
              <a
                key={item}
                ref={(el) => (linksRef.current[i] = el)}
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
