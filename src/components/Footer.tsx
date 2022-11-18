import logo from "../../public/logo.png";
import { FaLinkedin, FaInstagramSquare, FaFacebookF } from 'react-icons/fa';
import { FooterStyle } from "./Footer.style"

//Adicionar rotas

function Footer() {
    return (
        <FooterStyle>
            <div className="containerLogoFooter">
                <a href="#">
                    <img src={logo} alt="Logo da empresa" />
                    <h2>CaçaVet</h2>
                </a>
            </div>
            <div>
                <a href="#">FAQ</a>
                <a href="#">Acessar minha conta</a>
                <a href="#">Cadastrar meu serviço</a>
            </div>
            <div>
                <a href="#">Termos de Uso</a>
                <a href="#">Política de Privacidade</a>
                <a href="#">Profissionais vets</a>
            </div>
            <div className="navContatoFooter">
                <h2>Siga nossas redes</h2>
                <div>
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><FaInstagramSquare /></a>
                    <a href="#"><FaFacebookF /></a>
                </div>
            </div>
        </FooterStyle>
    )
}

export default Footer