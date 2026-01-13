import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence, scale } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaPhp, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { SiMysql, SiAdobeaftereffects, SiAdobeillustrator, SiAdobephotoshop } from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaSyncAlt } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { SquareArrowOutUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import SplitText from "gsap/SplitText";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/NavBar/Navbar";




import useTypewriter from "../components/Typewriter/Writer";


import "./Home.css";

export default function Home() {

  const [modalData, setModalData] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");



  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_wqqce32";
    const templateId = "template_jud7zmq";
    const publicKey = "0Gui5inbIiqUp7QkC";

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        alert("Ocorreu um erro ao enviar o e-mail: " + err.text);
      });
  };


  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const abrirModal = (projeto) => {
    setProjetoSelecionado(projeto);
    setOpenModal(true);
  };


  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true
    });

    return () => smoother.kill();
  }, []);



  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const split = new SplitText(".split-title", {
      type: "chars"
    });

    gsap.from(split.chars, {
      y: 100,
      opacity: 0,
      stagger: 0.05,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%",
        end: "40% 50%",
        // markers: true,
        scrub: 2,
      }
    });

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };


  }, []);


  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const split = new SplitText(".splittest", {
      type: "lines"
    });

    gsap.from(split.lines, {
      y: 100,
      opacity: 0,
      stagger: 0.05,
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 60%",
        end: "40% 50%",
        // markers: true,
        scrub: 2,
      }
    });

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };


  }, []);



  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const split = new SplitText(".about-column h3", {
      type: "chars"
    });

    gsap.from(split.chars, {
      y: 100,
      opacity: 0,
      stagger: 0.05,
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".about-column",
        start: "top 80%",
        end: "40% 50%",
        // markers: true,
        scrub: 2,
      }
    });

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };


  }, []);



  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const split = new SplitText(".about-column span, .about-column strong, about-column p , about-item p", {
      type: "chars"
    });

    gsap.from(split.chars, {
      x: 100,
      opacity: 0,
      stagger: 0.05,
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".about-column",
        start: "top 80%",
        end: "40% 50%",
        // markers: true,
        scrub: 2,
      }
    });

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };


  }, []);



  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);




    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.projects-wrapper',
        start: 'top 50%',
        end: 'bottom 80%',
        scrub: 2.5,
        // markers: true,

      }
    })


    tl.to('.projects-header img', {
      opacity: 1,
      x: 0,
      y: -30,
      duration: 1.2,
      rotate: '0deg',
      ease: 'power4.out',

    });

    tl.to('.projects-header h1', {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power4.out',
    }, '-=1.2');


    tl.to('.project-subtitile', {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power4.out',
    }, '-=1.2');









  }, []);



useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const intro = gsap.timeline();

    const split = new SplitText(".hero-section h1", {
      type: "chars"
    });

    gsap.set(split.chars, {
      y: 120,
      opacity: 0
    });

    gsap.set(".hero-section p", {
      y: 40,
      opacity: 0
    });

    intro.to(".mask", {
      opacity: 0,
      delay: 2,
      ease: "expo.inOut",
      duration: 4
    });

    intro.to(".hero-section", {
      maskSize: "1580%",
      duration: 5,
      ease: "power2.inOut"
    }, "-=1.5");

    intro.to(split.chars, {
      y: 0,
      opacity: 1,
      stagger: 0.06,
      duration: 1.4,
      ease: "power4.out"
    }, "-=2.2");

   
    intro.to(".hero-section p", {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out"
    }, "-=1.4");

      intro.to(".sidebar", {
    opacity:1,
    duration: 2,
    ease: "expo.inOut"
  }, "-=1.5")




  });



  return () => ctx.revert();
}, []);























  return (

    <>

      <section className="mask"> <img src="./img/Mascara.svg" alt="" /> </section>

      <Sidebar  />

      <AnimatePresence>
        {modalData && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalData(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 180 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-btn"
                onClick={() => setModalData(null)}
              >
                ✕
              </button>

              <img
                src={modalData.image}
                alt={modalData.title}
                className="modal-image"
              />

              <h2>{modalData.title}</h2>
              <p>{modalData.description}</p>

              <a href={modalData.link}><SquareArrowOutUpRight /> Ver Projeto</a>


              <div className="modal-gallery">

                <div>
                  {modalData.ilustration1}

                </div>
                <div>
                  {modalData.ilustration2}

                </div>
                <div>
                  {modalData.ilustration3}

                </div>
                <div>
                  {modalData.ilustration4}

                </div>
                <div>
                  {modalData.ilustration5}

                </div>
                <div>
                  {modalData.ilustration6}

                </div>

                <div>
                  {modalData.ilustration7}

                </div>
                <div>
                  {modalData.ilustration8}

                </div>
                <div>
                  {modalData.ilustration9}

                </div>
                <div>
                  {modalData.ilustration10}

                </div>
                <div>
                  {modalData.ilustration11}

                </div>
                <div>
                  {modalData.ilustration12}

                </div>



              </div>













            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div id="smooth-wrapper">
        <div id="smooth-content">





          <div className="container">














            <section id="home" className="hero-section">

              <div className="hero-bg" data-speed=".8" />
              <div className="hero-text" data-speed="2">
                <h1

                  style={{ display: "flex" }}
                >

                  Kauan Venancio
                </h1>

                <p

                >
                  Desenvolvedor Full Stack focado em experiências modernas
                </p>
              </div>

            </section>






            <section id="about" className="about-wrapper" data-speed="1.2">
              <div className="about-container">


                <div
                  className="about-photo"


                >
                  <img
                    data-speed='1.5'
                    src="/img/about-img.png" alt="Sobre mim"

                  />
                  <span
                    className="about-name"



                  >
                    Kauan
                  </span>
                </div>


                <div
                  className="about-text"

                >
                  <span
                    className="about-label"


                  >
                    Sobre mim
                  </span>

                  <h1
                    className="split-title"
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0.4 }}


                  >
                    Olá<span>.</span>
                  </h1>

                  <p
                    className="about-text splittest">

                    Sou desenvolvedor frontend focado em experiências visuais imersivas, unindo design, animação e código para criar interfaces que contam histórias. Trabalho com atenção obsessiva aos detalhes, motion fluido e estética consistente, sempre buscando ir além do “funcional” e entregar algo memorável.

                    Tenho experiência no desenvolvimento de sites e sistemas modernos, responsivos e performáticos, utilizando React, JavaScript, CSS avançado, GSAP e Framer Motion, com foco em narrativa visual, interações refinadas e identidade forte. Acredito que um bom produto digital não apenas funciona — ele comunica, emociona e marca.

                    Estou em constante evolução, explorando novas técnicas de animação, tipografia e arquitetura de interfaces, sempre equilibrando criatividade e código limpo. Meu objetivo é transformar ideias em experiências digitais únicas, com personalidade, impacto visual e excelência técnica.

                  </p>


                  <div className="about-grid">

                    <div className="about-column">
                      <h3


                      >
                        Educação
                      </h3>

                      <div className="about-item">
                        <span>2023 – 2025</span>
                        <strong>Etec Prof. Maria Cristina Medeiros</strong>
                        <p>Curso Técnico em Informática para Internet</p>
                      </div>
                      <div className="about-item">
                        <span>2018 – 2020</span>
                        <strong>Help CNI</strong>
                        <p>Curso de Desenvolvimento de jogos em GML</p>
                      </div>
                    </div>

                    <div className="about-column">
                      <h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: false, amount: 0.4 }}

                      >
                        Experiencias
                      </h3>

                      <div className="about-item">
                        <span>2025</span>
                        <strong>Freelancer</strong>
                        <p>Dev. Fullstack</p>
                      </div>

                      <div className="about-item">
                        <span>2025</span>
                        <strong>Personalcob</strong>
                        <p>Operador de Telemarketing</p>
                      </div>
                    </div>




                  </div>
                </div>

              </div>
            </section>












            <section className="projects-wrapper">
              <div className="projects-scene" data-speed='0.9' />

              <div className="projects-paper" data-speed='1.2'>

                <header className="projects-header">
                  <div className="header-text">
                    <h1

                      style={{ display: "flex" }}
                    >
                      {"Projetos".split("").map((char, i) => (
                        <motion.span
                          className="spanzin"


                        >
                          {char === " " ? "\u00A0" : char}
                        </motion.span>
                      ))}
                    </h1>
                    <span
                      className="project-subtitile"

                    >
                      seleção de alguns trabalhos que desenvolvi
                    </span>
                  </div>
                  <div>
                    <img
                      src="/img/sentado.png" alt=""
                      className="projects-img"

                    />
                  </div>

                </header>

                {/* <nav className="projects-filters">
                  <button


                  >
                    Todos
                  </button>
                  <button
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                  >
                    Web
                  </button>
                  <button
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                  >
                    Vídeo
                  </button>
                  <button
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
                  >
                    Motion
                  </button>

                </nav> */}

                <div className="projects-list">
                  <article className="project-item"
                    style={{
                      backgroundImage: "url('/img/byte-amigo.svg')"
                    }}

                    onClick={() =>
                      setModalData({
                        title: "Byte Amigo",
                        image: "/img/byte-amigo.svg",
                        description: "O site da Byte Amigo foi desenvolvido utilizando HTML5 para a estrutura semântica, CSS3 para estilização responsiva e animações, e JavaScript para interatividade e manipulação dinâmica da interface. O backend foi implementado em PHP, responsável pelas regras de negócio, autenticação e comunicação com o banco de dados, utilizando MySQL para garantir organização, integridade e desempenho dos dados. O projeto segue boas práticas de desenvolvimento web, com separação entre frontend e backend e estrutura preparada para futuras expansões.",
                        ilustration1: <img src="/img/byte-amigo1.png" alt="" />,
                        ilustration2: <img src="/img/byte-amigo7.png" alt="" />,
                        ilustration3: <img src="/img/byte-amigo2.png" alt="" />,
                        ilustration4: <img src="/img/byte-amigo3.png" alt="" />,
                        ilustration5: <img src="/img/byte-amigo4.png" alt="" />,
                        ilustration6: <img src="/img/byte-amigo5.png" alt="" />


                      })
                    }

                  >
                    <div className="project-overlay">
                      <h2>Byte Amigo (indisponível)</h2>
                      <p>Assistência técnica & plataforma digital </p>
                      <div className="project-tech">
                        <FaHtml5 size={35} color="#b01818" />
                        <FaCss3Alt size={35} color="#b01818" />
                        <FaPhp size={35} color="#b01818" />
                        <SiMysql size={35} color="#b01818" />
                      </div>
                    </div>
                  </article>


                  <article className="project-item"
                    style={{
                      backgroundImage: "url('/img/animosity.png')"
                    }}


                    onClick={() =>
                      setModalData({
                        title: "Animosity",
                        image: "/img/animosity-banner.png",
                        description: "O site Animosity foi desenvolvido com o objetivo de divulgar/informar o jogo animosity, com a possibilidade de download da versão beta. Para o desenvolvimento do projeto, utilizei React.js, css3 para o desenvolvimento frontend e Node.js + Mysql para o backend. Como utilizamos uma versão gratuita para a hospedagem do BD, o login está funcional, entretanto não dísponível no site.",
                        link: "https://animosity-web.vercel.app",
                        ilustration1: <img src="/img/animosity1.png" alt="" />,
                        ilustration2: <img src="/img/animosity2.png" alt="" />,
                        ilustration3: <img src="/img/animosity3.png" alt="" />,
                        ilustration4: <img src="/img/animosity4.png" alt="" />,
                        ilustration5: <img src="/img/animosity5.png" alt="" />,
                        ilustration7: <img src="/img/animosity6.png" alt="" />,
                        ilustration8: <img src="/img/animosity8.png" alt="" />,
                        ilustration9: <img src="/img/animosity9.png" alt="" />,
                        ilustration10: <img src="/img/animosity10.png" alt="" />,
                        ilustration11: <img src="/img/animosity11.png" alt="" />,
                        ilustration12: <img src="/img/animosity12.png" alt="" />



                      })
                    }

                  >
                    <div className="project-overlay">
                      <h2>Animosity</h2>
                      <p>Site de divulgação e download do jogo Animosity</p>

                      <div className="project-tech">
                        <FaReact size={35} color="#b01818" />
                        <FaNodeJs size={35} color="#b01818" />
                        <SiMysql size={35} color="#b01818" />
                      </div>
                    </div>
                  </article>



                  <article className="project-item"
                    style={{
                      backgroundImage: "url('/img/ghostcat1.png')"
                    }}


                    onClick={() =>
                      setModalData({
                        title: "Ghostcat",
                        image: "/img/Ghostcat-banner.png",
                        description: "Projeto em desenvolvimento: será um sistema de organização de clientes, desenvolvido com react, node.js e haverá uma IA interativa com Python.",
                        link: "https://animosity-web.vercel.app",
                        ilustration1: <img src="/img/ghostcat1.png" alt="" />,
                        ilustration2: <img src="/img/ghostcat2.png" alt="" />,
                        ilustration3: <img src="/img/ghostcat3.png" alt="" />,
                        ilustration4: <img src="/img/ghostcat4.png" alt="" />,
                        ilustration5: <img src="/img/ghostcat5.png" alt="" />,
                        ilustration7: <img src="/img/ghostcat6.png" alt="" />,
                        ilustration8: <img src="/img/ghostcat7.png" alt="" />,
                        ilustration9: <img src="/img/ghostcat8.png" alt="" />,
                        ilustration10: <img src="/img/ghostcat9.png" alt="" />,
                        ilustration11: <img src="/img/ghostcat10.png" alt="" />,




                      })
                    }

                  >
                    <div className="project-overlay">
                      <h2>Ghostcat</h2>
                      <p>Site de agendamento e organização de clientes para o Ghostcat studio.</p>

                      <div className="project-tech">
                        <FaReact size={35} color="#b01818" />
                        <FaNodeJs size={35} color="#b01818" />
                        <SiMysql size={35} color="#b01818" />
                      </div>
                    </div>
                  </article>
                </div>

              </div>

            </section>











            <section class="skills">


              <img
                data-speed="1.5"
                data-lag="0.1"
                className="skillsimg"
                src="img/gif-nerd.gif"
              />




              <img
                data-speed="1.5"
                data-lag="0.1"
                id="img2"
                src="img/skt.png"
              />



              <h1 className="fodase"

                style={{ display: "flex" }}
              >
               Minhas Habilidades
              </h1>


              <div class="skills-content">

                <div

                  transition={{ duration: 1.2, ease: "easeOut" }}

                  class="skillscard"

                >
                  <h1>Hard Skills</h1>
                  <div > <FaHtml5 size={35} color="#b01818" /> </div>
                  <div> <FaCss3Alt size={35} color="#b01818" /> </div>
                  <div> <FaReact size={35} color="#b01818" />   </div>
                  <div> <FaNodeJs size={35} color="#b01818" /></div>
                  <div>  <FaPython size={35} color="#b01818" />  </div>
                  <div> <FaPhp size={35} color="#b01818" /> </div>
                  <div> <SiMysql size={35} color="#b01818" /> </div>
                  <div> <SiAdobeaftereffects size={35} color="#b01818" /> </div>
                  <div> <SiAdobeillustrator size={35} color="#b01818" /> </div>
                  <div> <SiAdobephotoshop size={35} color="#b01818" /> </div>
                </div>

                <div


                  className="skillscard1">
                  <h1>Soft Skills</h1>

                  <div className="skill-item">
                    <FaBrain size={45} />
                    <span>Inteligência Emocional</span>
                  </div>

                  <div className="skill-item">
                    <FaComments size={45} />
                    <span>Comunicação</span>
                  </div>

                  <div className="skill-item">
                    <FaUsers size={45} />
                    <span>Trabalho em Equipe</span>
                  </div>

                  <div className="skill-item">
                    <FaSyncAlt size={45} />
                    <span>Adaptabilidade</span>
                  </div>

                  <div className="skill-item">
                    <FaLightbulb size={45} />
                    <span>Pensamento Crítico</span>
                  </div>

                  <div className="skill-item">
                    <FaRocket size={45} />
                    <span>Proatividade</span>
                  </div>
                </div>

              </div>
            </section>




            <section className="contact">
              <div className="contact-content">
                <div className="img-side">
                  <img src="/img/contato.png" alt="" />
                  <div className="social-medias">

                    <div className="social-icon">
                      <a href="https://wa.me/5511911241071?text=Ol%C3%A1%2C%20vi%20seu%20portif%C3%B3lio%20e%20estou%20interessaado%20em%20saber%20mais!"><FaWhatsapp size={45} color="#b01818" /></a>
                    </div>

                    <div className="social-icon">
                      <a href="https://www.linkedin.com/in/kauan-venâncio-5918ab302"><FaLinkedin size={45} color="#b01818" /></a>
                    </div>

                  </div>

                </div>
                <div className="form-side">
                  <h1>
                    Fale Comigo!
                  </h1>
                  <form class="contact-form" onSubmit={sendEmail}>
                    <div class="input-group">
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label>Nome</label>
                    </div>

                    <div class="input-group">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                      />
                      <label>Email</label>
                    </div>

                    <div class="input-group">
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}



                        rows="4" required></textarea>
                      <label>Mensagem</label>
                    </div>

                    <button type="submit">Enviar Mensagem</button>
                  </form>
                </div>
              </div>
            </section>





          </div>
          <Footer />

        </div>
      </div>
    </>
  );
}
