import {
  DivCardComponent,
  DivImgInfosCardVet,
  DivEspecialidade,
} from "./CardProfissionalVet.style";
import Localizacao from "../Localizacao";
import VectorLocal from "./../../../public/VectorLocal.svg";
import ButtonWhatsap from "../ButtonWhatsap";
import { Link } from "react-router-dom";


export type CardVetsProps = {
  filter?: any;
  name: string;
  queryValue: number;
  queryDutyValue: number;
  city: string;
  state: string;
  userId: number;
  avatar: string;
  teleconsultation: boolean;
  specialty: string;
};

function CardProfissionalVet(props: CardVetsProps) {

  

  return (
    <Link to={`/vets/${props.userId}`}>
      <DivCardComponent>
        <DivImgInfosCardVet>
          <h3>{props.name}</h3>
          <div>
            <img src={props.avatar} alt={props.name} />
          </div>
          {props.teleconsultation && (<span>Remoto</span>)}
          <span>Presencial</span>
        </DivImgInfosCardVet>
        <DivEspecialidade>
          <h4>{props.specialty}</h4>
          <p>
            <span>R$ {props.queryValue} </span>Horário comercial
          </p>
          <p>
            <span>R$ {props.queryDutyValue} </span>Urgências 24h
          </p>
          <Localizacao city={props.city} state={props.state} />

          <ButtonWhatsap />
        </DivEspecialidade>
      </DivCardComponent>
    </Link>
  );
}

export default CardProfissionalVet;
