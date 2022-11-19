import logo from "../../../public/logo.png";
// import { FaPlus } from 'react-icons/fa';
import { Header } from "./NavBar.style"
import CadastrarServico from "../ButtonCadastrarServico"

//Colocar Caminhos
//Colocar background na página que está
//Background da página Home
//Botão minha conta em determinadas páginas

function NavBar() {

    return (
        <>
            <Header>
                <div>
                    <a href="#">
                        <img src={logo} alt="Logo" />
                        <h2>CaçaVet</h2>
                    </a>
                </div>
                <nav>
                    <a className="navegacaoNavBat" href="#">Início</a>
                    <a className="navegacaoNavBat" href="#">Vets</a>
                    <a className="navegacaoNavBat" href="#">FAQ</a>
                    <a className="navegacaoNavBat" href="#">Acessar conta</a>
                    <CadastrarServico />
                </nav>
            </Header>
        </>
    )
}

export default NavBar;