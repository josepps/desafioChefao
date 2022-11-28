import { useEffect,useState } from "react";
import CardProfissionalVet, {CardVetsProps}from "../components/CardProfissionalVet";
import Footer from "../components/Footer";
import { ImputFiltroStyle } from "../components/ImputFiltro/ImputFiltro";
import NavBar from "../components/NavBar";
import api from "../services/api";
import {SectionProfissionais, DivCardProfissionais} from "./ProfissionaisVets.style"


function ProfissionaisVets(){
    const [isLoading, setIsLoading] = useState(true);
    const [vetsList, setVetsList] = useState<CardVetsProps>({} as CardVetsProps);
    const [presencial, setPresencial] = useState('');
    const [especialidade, setEspecialidade] = useState('');
    const [ceep, setCeep] = useState('');

    async function getVetsData() {
        const { data } = await api.get("/vets");
        console.log(data)
        setVetsList(data);
        setIsLoading(false);
      }
    
      useEffect(() => {
        getVetsData();
      }, []);
    
      if (isLoading) {
        return <p>Carregando</p>;
      }

    return (
        <>
            <NavBar/>
            <SectionProfissionais>
            <ImputFiltroStyle>
                <div>
                    <input className="ImputList" type="text" placeholder="Presencial " list="Modalidade" value={presencial} onChange={(event) => setPresencial(event.target.value) }/>
                        <datalist id="Modalidade">
                            <option value="Presencial">Presencial</option>
                            <option value="Remoto">Remoto</option>
                        </datalist>
                </div>
                <div>
                    <input className="ImputList" type="text" placeholder="Especialidade" list="Especialidade" value={especialidade} onChange={(event) => setEspecialidade(event.target.value) }/>
                    <datalist id="Especialidade">
                        <option value="Silvestre">Silvestre</option>
                        <option value="Domesticos">Domesticos</option>
                    </datalist>
                </div>
                <div>
                    <input className="ImputLocal" type="text" placeholder="Buscar por cidade ou UF" value={ceep} onChange={(event) => setCeep(event.target.value) }/>
                </div>
                <a href="#" >Caçar Vet</a>
            </ImputFiltroStyle>
                <DivCardProfissionais>
                    {vetsList
                    .filter(
                        (item) =>
                          item.address.city.includes(ceep) ||
                          String(item.address.state) === ceep    
                      )
                    .map((item, index) => {
                    return (
                        <CardProfissionalVet
                            key={index}
                            userId={item.userId}
                            name={item.name}
                            queryValue= {item.queryValue}
                            queryDutyValue= {item.queryDutyValue}
                            city = {item.address.city}
                            state = {item.address.state}
                            avatar= {item.avatar}
                            teleconsultation= {item.teleconsultation}
                            specialty= {item.specialty}
                        />);
                    })}
                </DivCardProfissionais>
            </SectionProfissionais>
            <Footer/>
        
        </>
        
    )
}



export default ProfissionaisVets;