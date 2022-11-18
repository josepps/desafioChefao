import { FaWhatsapp } from 'react-icons/fa';
import { BtnWhatsap } from "./ButtonWhatsap.style"

//Ajeitar tamnho quando tiver na tela
//Fazer rota (Usando Link)

function ButtonWhatsap() {
    
    return <BtnWhatsap>
        Agendar Consulta 
        <FaWhatsapp className='IconeWhats'/> 
    </BtnWhatsap>
}

export default ButtonWhatsap;