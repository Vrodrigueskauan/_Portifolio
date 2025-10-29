import React, { useState } from "react";
import { motion } from "framer-motion";
import { TbBrandPython } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { LuMessageCircle } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Card from '../components/Card/Card.jsx';
import Footer from "../components/Footer/Footer.jsx";
import PillNav from "../components/NavBar/Navbar.jsx";
import logo from "/img/port-logo.png";
import TypewriterHighlight from '../components/Typewriter/Writer.jsx';

import './Home.css'


export default function Home() {
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




  return (
    <>
      <div className="navbar">
        <PillNav
          logo={logo}
          logoAlt="Company Logo"
          items={[
            { label: 'Sobre', href: '#sobre' },
            { label: 'Projetos', href: '#projetos' },
            { label: 'Skills', href: '#skills' },
            { label: 'Contato', href: '#contact' }
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#0f22306d"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"




        />
      </div>


      <div className="home-container">
        <div id="banner" className="banner">

             <motion.div
            className="banner-image"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.5, ease: "easeInOut" }, }}
            whileTap={{ scale: 1 }}



          >
            <img src="/img/foto.png" alt="" />
          </motion.div>

          <div className="banner-text">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}


            >
              <h1>Olá, eu sou o Kauan</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 1, }}


            >
              <TypewriterHighlight
                fixedStart="Sou"
                phrases={[
                  "Dev fullstack",
                  "Designer UX/UI",
                  "Framer designer",
                ]}
                fixedEnd="focado em performance e inovação."
                typingSpeed={120}
                deletingSpeed={60}
                pauseBetween={1500}
                loop={true}
              />
            </motion.div>
            <motion.div
              className="button-container"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 1.5, }} >
              <a href="#sobre" className="button-link">Saiba mais</a>
            </motion.div>
          </div>

       



        </div>
        <motion.div
          className="title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.8 }}
        >
          <h2 id="sobre" className="title">Sobre Mim</h2>
        </motion.div>

        <div className="about-section">

          <motion.div
            className="skills-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.8 }}
          >
            <FaReact className="icon react" />
            <FaNodeJs className="icon node" />
            <TbBrandPython className="icon python" />
            <IoLogoJavascript className="icon js" />
            <FaPhp className="icon php" />
            <SiMysql className="icon mysql" />
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.5 }}

          >
            <p className="sobre">
              Eu me chamo <strong>Kauan Venancio</strong>, engenheiro de software apaixonado por programação, nascido em Ribeirão Pires (SP) no ano de 2007. Essa paixão surgiu na minha infância, quando comecei a fazer um curso de desenvolvimento de jogos em GameMaker (GML); descobri que além de divertido, programar era uma área em ascensão, então decidi investir nisso para o meu futuro. Hoje trabalho com foco em desenvolvimento web e criação de interfaces funcionais e intuitivas. Tenho experiência em linguagens como JavaScript (com Node.js e React.js) e especialidade em Python, PHP e MySQL. Fora da computação, sou uma pessoa criativa e dedicada a entregar o melhor independentemente da requisição, sempre em constante aprendizado — acredito que cada projeto é uma nova oportunidade de evoluir. <a href="https://wa.me/+5511911241071?text=Olá, vi seu portifólio e gostaria de conhecer-te melhor">Vamos conversar?</a> Adoraria mostrar como posso contribuir com seu próximo desafio.
            </p>
          </motion.div>


        </div>
        <motion.div
          className="title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}>
          <h2 id="projetos" className="title">Meus Projetos</h2>
        </motion.div>
        <div className="project-section">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.5 }}



          >
            <a href="https://animosity-web-g5ao.vercel.app">
              <Card
                image="/img/animosity.png"
                title="Animosity"
                description="Meu projeto do TCC para Etec MCM - Um site para um jogo de plataforma."
                tags={["React", "Node.js", "CSS", "MySQL"]}
              />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <Card
              image="/img/ghostcat.png"
              title="GhostCat"
              description="Em desenvolvimento - Um site e plataforma de agendamento para um Studio de tatuagem, com IA interativa."
              tags={["React", "MySQL", "CSS", "Python"]}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: false, amount: 0.5 }}

          >

            <Card
              image="/img/Byte Amigo.png"
              title="Byte Amigo"
              description="Uma plataforma desenvolvido para projeto interfdisciplinar da Etec MCM, que visa facilitar suporte técnico para todosm, e facilitar a vida dos técnicos para encontrar reparos."
              tags={["HTML", "CSS", "PhP", "MySQL"]}
            />
          </motion.div>



        </div>
        <motion.div
          className="title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}>
          <h2 className="title">Minhas Habilidades</h2>
        </motion.div>

        <div id="skills" className="habilidades">
          <div className="skills-block">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.5 }}


            >
              <h3>Soft Skills</h3>
            </motion.div>
            <motion.div
              className="soft-skills"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: false, amount: 0.5 }}

            >
              <div>
                <FaRegLightbulb size={50} color="#456882" /> <h2>Criatividade</h2>
              </div>
              <div>
                <RiTeamLine size={50} color="#456882" /> <h2>Trabalho em equipe</h2>
              </div>
              <div>
                <LuMessageCircle size={50} color="#456882" /> <h2>Comunicação</h2>
              </div>
              <div>
                < FaCalendarAlt size={50} color="#456882" /> <h2>Organização</h2>
              </div>
              <div>
                <FaBook size={50} color="#456882" /> <h2>Aprendizado constante</h2>
              </div>
              <div>
                <LuBrain size={50} color="#456882" /> <h2>Disciplina</h2>
              </div>
            </motion.div>
          </div>

          <div className="skills-block">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.5 }}


            >
              <h3>Hard Skills</h3>
            </motion.div>
            <motion.div
              className="hard-skills"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: false, amount: 0.6 }}



            >
              <div>
                <IoLogoJavascript size={50} color="#f7df1e" /> <h2>Javascript</h2>
              </div>
              <div>
                <FaReact size={50} color="#61dbfb" /> <h2>React.js</h2>
              </div>
              <div>
                <FaNodeJs size={50} color="#68a063" /> <h2>Node.js</h2>
              </div>
              <div>
                <TbBrandPython size={50} color="#ffd43b" /> <h2>Python</h2>
              </div>
              <div>
                <FaPhp size={50} color="#777bb4" /> <h2>PHP</h2>
              </div>
              <div>
                <SiMysql size={50} color="#00758f" /> <h2>MySQL</h2>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="contact"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}

        >
          <section id="contact" className="contact">
            <div className="mensagem-aviso">
              <h2>Fale Comigo</h2>
              <p>
                Entre em contato via email ou através das nossas redes sociais.
                Estou pronto para ajudar!
              </p>
            </div>

            <div className="contact-content">

              <div className="contact-info">
                <p>
                  Você pode nos enviar uma mensagem diretamente pelo formulário ou nos contatar pelas redes sociais:
                </p>
                <ul className="redes-sociais">
                  <li>
                    <a href="https://www.linkedin.com/in/kauan-venâncio-5918ab302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
                      <FaLinkedinIn size={30} />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/vrodrigueskauan" target="_blank" rel="noreferrer">
                      <FiGithub size={30} />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/+5511911241071?text=Olá, vi seu portifólio e gostaria de conhecer-te melhor" target="_blank" rel="noreferrer">
                      <FaWhatsapp size={30} />
                    </a>
                  </li>
                </ul>
              </div>


              <div className="contact-form-container">
                <h2>Envie sua mensagem</h2>
                <form onSubmit={sendEmail}>
                  <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input
                      type="text"
                      id="nome"
                      name="from_name"
                      value={name}
                      placeholder="Seu nome"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="from_email"
                      value={email}
                      placeholder="Seu email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea
                      id="mensagem"
                      name="message"
                      value={message}
                      placeholder="Escreva sua mensagem"
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>

                  <button type="submit" className="submit-btn">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </section>
        </motion.div>


      </div>
      <Footer />
    </>


  );
}