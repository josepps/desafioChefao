import {SectionBusca, DivImagensInicialHome, DivInicialDescricaoHome, DivApresentacaoHome, ImgIconGatoCachorro, Setaparabaixo} from "./SectionBuscaHome.style"
import ImputFiltro from "../ImputFiltro"
import IconGatoCachorro from "./../../../public/Group103.png" 
import SetaIcon from "./../../../public/setaparabaixo.png" 



function SectionBuscaHome(){
    return (
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
            <Setaparabaixo><img src={SetaIcon} alt="seta para rolagem de tela" /></Setaparabaixo>
        </SectionBusca>
    )
}


export default SectionBuscaHome;