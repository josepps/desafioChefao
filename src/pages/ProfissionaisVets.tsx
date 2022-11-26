import { useEffect,useState } from "react";
import CardProfissionalVet, {CardVetsProps}from "../components/CardProfissionalVet";
import Footer from "../components/Footer";
import ImputFiltro from "../components/ImputFiltro";
import NavBar from "../components/NavBar";
import api from "../services/api";
import {SectionProfissionais, DivCardProfissionais} from "./ProfissionaisVets.style"


function ProfissionaisVets(){
    const [isLoading, setIsLoading] = useState(true);
    const [vetsList, setVetsList] = useState<CardVetsProps>({} as CardVetsProps);

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
                <ImputFiltro/>
                <DivCardProfissionais>
                    {vetsList.map((item, index) => {
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