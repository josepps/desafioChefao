import { TelaCacarVets, BolaVerde, Bolalaranja, DivDosCards, CardPassoaPasso, DivOrientacao, LinhaTracejada} from "./SectionCacarVets.styled"
import WhatsappIcon from "./../../../public/IconWhatsapp.png"
import LocalidadeIcon from "./../../../public/IconPesquisa.png"
import PessoasIcon from "./../../../public/Vector.png"
import EstrelaIcon from "./../../../public/IconEstrela.png"

function CacarVets(){
    return(
        <TelaCacarVets>
            <h2>Como caçar vets</h2>
            <DivDosCards>
                <CardPassoaPasso>
                    <Bolalaranja><img src={LocalidadeIcon} alt="Pesquisa por localidade" /></Bolalaranja>
                    <DivOrientacao><h3>Busque</h3><p>vets por local e/ou especialidade</p></DivOrientacao>
                </CardPassoaPasso>
                <LinhaTracejada></LinhaTracejada>
                <CardPassoaPasso>
                    <BolaVerde><img src={PessoasIcon} alt="Pesquisa por localidade" /></BolaVerde>
                    <DivOrientacao><h3>Escolha</h3><p>quem atende melhor a sua necessidade</p></DivOrientacao>
                </CardPassoaPasso>
                <LinhaTracejada></LinhaTracejada>
                <CardPassoaPasso>
                    <Bolalaranja><img src={WhatsappIcon} alt="Pesquisa por localidade" /></Bolalaranja>
                    <DivOrientacao><h3>Agende</h3><p>uma consulta direto pelo WhatApp</p></DivOrientacao>
                </CardPassoaPasso>
                <LinhaTracejada></LinhaTracejada>
                <CardPassoaPasso>
                    <BolaVerde><img src={EstrelaIcon} alt="Pesquisa por localidade" /></BolaVerde>
                    <DivOrientacao><h3>Avalie</h3><p>nosso cuidado para outros pets mais felizes</p></DivOrientacao>
                </CardPassoaPasso>
            </DivDosCards>
        </TelaCacarVets>
    )
   
}

export default CacarVets;