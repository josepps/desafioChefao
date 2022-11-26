import {DivCardComponent, DivImgInfosCardVet, DivEspecialidade} from "./CardProfissionalVet.style"
import Localizacao from "../Localizacao";
import VectorLocal from "./../../../public/VectorLocal.svg"
import ButtonWhatsap from "../ButtonWhatsap";





export type CardVetsProps = {
    name: string, 
    queryValue: number,
    queryDutyValue: number,
    city:string,
    state: string;
    userId: number,
    avatar: string,
    teleconsultation: boolean,
    specialty: string,
  };


function CardProfissionalVet(props:CardVetsProps){
    return (
        <DivCardComponent>
            <DivImgInfosCardVet>
                <h3>{props.name}</h3>
                <div><img src={props.avatar} alt={props.name} /></div>
                <span>{props.teleconsultation}</span>
                <span>Presencial</span>
            </DivImgInfosCardVet>
            <DivEspecialidade>
                <h4>{props.specialty}</h4>
                <p><span>R$ {props.queryValue} </span>Horário comercial</p>
                <p><span>R$ {props.queryDutyValue} </span>Urgências 24h</p>
                <Localizacao city={props.city} state={props.state}/>

                <ButtonWhatsap/>
            </DivEspecialidade>
        </DivCardComponent>
    )
}


export default CardProfissionalVet;