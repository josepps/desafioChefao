import logo from "../../../public/logo.png";
import { FaTimes, FaBars } from "react-icons/fa";
import CadastrarServico from "../ButtonCadastrarServico";

import { useRef } from "react";
import "../NavBar/index.css";
import { Link } from "react-router-dom";

function NavBar() {
  const navRef = useRef();

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
          <a className="navegacaoNavBat" to="/login">
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
