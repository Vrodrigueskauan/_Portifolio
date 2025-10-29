// Footer.jsx
import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Footer.css";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h3>Kauan Venancio</h3>
      <p>Engenheiro de Software Full Stack — Performance e inovação.</p>
      
      <p>© {new Date().getFullYear()} Kauan Venancio. Todos os direitos reservados.</p>
    </motion.footer>
  );
}
