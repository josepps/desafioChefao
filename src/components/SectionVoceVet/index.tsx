import {VoceVetSection, VoceVetDescricao, VoceVetImage} from "./SectionVoceVet.styled"
import CachorroVet from "./../../../public/CachorroVet.png"


function SectionVoceVet(){
    return(
        <VoceVetSection>
            <VoceVetDescricao>
                <h3>Você é vet?</h3>
                <p>Fique visível para milhares de pessoas.</p>
                <p>Cadastre-se agora e conquiste mais clientes!</p>
            </VoceVetDescricao>
            <VoceVetImage>
                <img src={CachorroVet} alt="Cachorro veterinário" />
            </VoceVetImage>
        </VoceVetSection>

    )

}


export default SectionVoceVet;