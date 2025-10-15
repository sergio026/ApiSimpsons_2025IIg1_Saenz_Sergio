import React from "react";
// import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <h2>Los Simpsons API</h2>
                    <p>
                        Un homenaje divertido a la familia más amarilla de la TV 💛.
                        Explora personajes, episodios y lugares icónicos de Springfield.
                    </p>
                </div>

                <div className="footer-social">
                    <h3>Síguenos</h3>
                    <div className="social-icons">
                        <a href="#"><i class='bx bxl-whatsapp'></i></a>
                        <a href="#"><i class='bx bxl-facebook-circle' ></i></a>
                        <a href="#"><i class='bx bxl-instagram' ></i></a>
                        <a href="#"><i class='bx bxl-github' ></i></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Los Simpsons API | Diseñado con 💛 por Darwin Andres Díaz Acosta Y Sergio Andres Saenz Morales </p>
            </div>
        </footer>
    );
};

export default Footer;
