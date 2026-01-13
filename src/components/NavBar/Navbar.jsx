import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import "./Navbar.css";

export default function Sidebar() {
  const sidebarRef = useRef(null);
  const linksRef = useRef([]);
  const lineTop = useRef(null);
  const lineBottom = useRef(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    // sidebar começa fora da tela (direita)
    gsap.set(sidebarRef.current, { x: "100%" });
  }, []);

  const toggleMenu = () => {
    if (!open) {
      // OPEN
      const tl = gsap.timeline();

      tl.to(sidebarRef.current, {
        x: "0%",
        duration: 0.9,
        ease: "expo.out",
      });

      tl.to(
        lineTop.current,
        {
          y: 6,
          rotate: 45,
          transformOrigin: "center",
          duration: 0.45,
          ease: "power4.out",
        },
        0
      );

      tl.to(
        lineBottom.current,
        {
          y: -6,
          rotate: -45,
          transformOrigin: "center",
          duration: 0.45,
          ease: "power4.out",
        },
        0
      );

      tl.fromTo(
        linksRef.current,
        {
          y: 32,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.7,
          ease: "power4.out",
        },
        "-=0.35"
      );
    } else {
      // CLOSE
      const tl = gsap.timeline();

      tl.to(sidebarRef.current, {
        x: "100%",
        duration: 0.75,
        ease: "expo.inOut",
      });

      tl.to(
        [lineTop.current, lineBottom.current],
        {
          y: 0,
          rotate: 0,
          duration: 0.4,
          ease: "power3.out",
        },
        0
      );
    }

    setOpen(!open);
  };

  return (
    <>
      {/* TOP BAR */}
      <header className="topbar">
        <div className="logo">K</div>

        <button className="menu-btn" onClick={toggleMenu} aria-label="Menu">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <line
              ref={lineTop}
              x1="6"
              y1="12"
              x2="26"
              y2="12"
              stroke="#e10600"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              ref={lineBottom}
              x1="6"
              y1="20"
              x2="26"
              y2="20"
              stroke="#e10600"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </header>

      {/* SIDEBAR */}
      <aside ref={sidebarRef} className="sidebar">
        <nav className="sidebar-nav">
          {["Projetos", "Sobre", "Contato"].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              ref={(el) => (linksRef.current[i] = el)}
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
