import { FaWhatsapp } from 'react-icons/fa';
import PopupWhats from '../PopUpWhatsapp';
import { BtnWhatsap } from "./ButtonWhatsap.style"

//Ajeitar tamnho quando tiver na tela
//Fazer rota (Usando Link)

function ButtonWhatsap() {
    
    return <BtnWhatsap>
        <PopupWhats/>
        <FaWhatsapp className='IconeWhats'/> 
    </BtnWhatsap>
}

export default ButtonWhatsap;