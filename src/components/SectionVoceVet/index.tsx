import {VoceVetSection, VoceVetDescricao, VoceVetImage} from "./SectionVoceVet.styled"
import CachorroVet from "./../../../public/CachorroVet.png"
import CadastrarServico from "../ButtonCadastrarServico";


function SectionVoceVet(){
    return(
        <VoceVetSection>
            <VoceVetDescricao>
                <h3>Você é veterinário?</h3>
                <p>Fique visível para milhares de pessoas.</p>
                <p>Cadastre-se agora e conquiste mais clientes!</p>
                <CadastrarServico/>
            </VoceVetDescricao>
            <VoceVetImage>
                <img src={CachorroVet} alt="Cachorro veterinário" />
            </VoceVetImage>
        </VoceVetSection>

    )

}


export default SectionVoceVet;