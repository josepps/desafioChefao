import logo from "../../public/logo.png";
import { FaPlus } from 'react-icons/fa';
import { Header } from "./NavBar.style"

//Colocar Caminhos
//Colocar background na página que está
//Background da página Home

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
                    <a href="#">Início</a>
                    <a href="#">Vets</a>
                    <a href="#">FAQ</a>
                    <a href="#">Acessar conta</a>
                    <a className="ButtonCadastar" href="#">Cadastrar meu serviço <FaPlus className="FaplusNavBAr"/></a>
                </nav>
            </Header>
        </>
    )
}

export default NavBar;