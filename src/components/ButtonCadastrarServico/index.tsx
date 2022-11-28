import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {BtnCadastrarServico} from "./ButtonCadastrar.style"

function CadastrarServico() {

    return (
    <Link to="/cadastro"><BtnCadastrarServico className="ButtonCadastar">Cadastrar meu serviço <FaPlus className="FaplusNavBAr"/></BtnCadastrarServico></Link>
    )
}

export default CadastrarServico;