
import Footer from "../components/Footer";
import NavBar from "../components/NavBar/NavBar";
import {SectionBusca, DivImagensInicialHome, DivInicialDescricaoHome, DivApresentacaoHome, ImgIconGatoCachorro, Setaparabaixo} from "./../components/SectionBuscaHome/SectionBuscaHome.style"
import { TelaCacarVets, BolaVerde, Bolalaranja, DivDosCards, CardPassoaPasso, DivOrientacao, LinhaTracejada} from "./../components/SectionCacarVets/SectionCacarVets.styled"
import WhatsappIcon from "./../../public/IconWhatsapp.png"
import LocalidadeIcon from "./../../public/IconPesquisa.png"
import PessoasIcon from "./../../public/Vector.png"
import EstrelaIcon from "./../../public/IconEstrela.png"
import ImputFiltro from "../components/ImputFiltro"
import IconGatoCachorro from "./../../public/Group103.png" 
import SetaIcon from "./../../public/setaparabaixo.png" 
import SectionCarrosselHome from "../components/SectionCarrosselHome";
import SectionFAQ from "../components/SectionFAQ";
import SectionVoceVet from "../components/SectionVoceVet";

function Home() {

    return(
        <>
            <NavBar/>
            <SectionBusca>
                <DivApresentacaoHome>
                    <DivInicialDescricaoHome>
                        <h1>Vets com o cuidado e carinho que seu pet merece</h1>
                        <p>Encontre excelentes vets por local e/ou especialidade</p>
                    </DivInicialDescricaoHome>
                    <DivImagensInicialHome>
                        <ImgIconGatoCachorro src={IconGatoCachorro} alt="Gato e cachorro"></ImgIconGatoCachorro>
                    </DivImagensInicialHome>
                </DivApresentacaoHome>
                <ImputFiltro />
                <a href="#CacarVets"><Setaparabaixo><img src={SetaIcon} alt="seta para rolagem de tela" /></Setaparabaixo></a>
            </SectionBusca>
            <TelaCacarVets>
                <a 
                // @ts-ignore
                name="CacarVets">
                <h2>Como caçar vets</h2></a>
                
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
            
            <SectionVoceVet/>
            <SectionCarrosselHome/>
            <SectionFAQ/>
            <Footer/>
        </>
    )
}

export default Home;