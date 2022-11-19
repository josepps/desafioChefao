import { FaPlus } from 'react-icons/fa';
import {BtnCadastrarServico} from "./ButtonCadastrar.style"

function CadastrarServico() {

    return (
    <BtnCadastrarServico className="ButtonCadastar" href="#">Cadastrar meu serviço <FaPlus className="FaplusNavBAr"/></BtnCadastrarServico>
    )
}

export default CadastrarServico;