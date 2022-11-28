import logo from "../../../public/logo.png";
// import { FaPlus } from 'react-icons/fa';
import { Header } from "./NavBar.style"
import CadastrarServico from "../ButtonCadastrarServico"
import { Link } from "react-router-dom";

//Colocar Caminhos
//Colocar background na página que está
//Background da página Home
//Botão minha conta em determinadas páginas

function NavBar() {

    return (
        <>
            <Header>
                <div>
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                        <h2>CaçaVet</h2>
                    </Link>
                </div>
                <nav>
                    <Link className="navegacaoNavBat" to="/">Início</Link>
                    <Link className="navegacaoNavBat" to="/vets">Vets</Link>
                    <a className="navegacaoNavBat" href="#SectionFAQ">FAQ</a>
                    <Link className="navegacaoNavBat" to="/login">Acessar conta</Link>
                    <CadastrarServico />
                </nav>
            </Header>
        </>
    )
}

export default NavBar;