import logo from "../../../public/logo.png";
import { FaTimes, FaBars } from "react-icons/fa";
import CadastrarServico from "../ButtonCadastrarServico";
import "./style.css";
import React from "react";

function NavBar() {
  const navRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <header>
        <div>
          <a href="/">
            <img src={logo} alt="Logo" />
            <h2>CaçaVet</h2>
          </a>
        </div>
        <nav ref={navRef}>
          <a className="navegacaoNavBat" href="/">
            Início
          </a>
          <a className="navegacaoNavBat" href="/vets">
            Vets
          </a>
          <a className="navegacaoNavBat" href="#SectionFAQ">
            FAQ
          </a>
          <a className="navegacaoNavBat" href="/login">
            Acessar conta
          </a>

          <button className="nav-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <CadastrarServico />
        <button className="nav-btn .nav-close-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}

export default NavBar;
