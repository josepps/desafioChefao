import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Container, Title, ConsultaValor, AboutMe } from "./Perfil.style";
import Footer from "../components/Footer";
import ButtonWhatsap from "../components/ButtonWhatsap";
import { useDispatch } from "react-redux";
import api from "../services/api";
import CardProfissionalVet, {
  CardVetsProps,
} from "../components/CardProfissionalVet";
import EstrelaCard from "../../public/EstrelaCard.svg";

type PerfilProps = {
  name: string;
  queryValue: number;
  queryDutyValue: number;
  id: number;
  avatar: string;
  crmv: number;
  aboutMe: string;
  specialty: string;
  experience: string;
  formation: string;
  address: {
    address: string;
    district: string;
    city: string;
    state: string;
    code: number;
    complement: string;
  };
};

function Perfil() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [vetsData, setVetsData] = useState<PerfilProps>({} as PerfilProps);

  async function getVetsData() {
    const { data } = await api.get("vets/" + id);

    setVetsData({
      id: data.userId,
      avatar: data.avatar,
      name: data.name,
      crmv: data.crmv,
      specialty: data.specialty,
      queryValue: data.queryValue,
      queryDutyValue: data.queryDutyValue,
      formation: data.formation,
      experience: data.experience,
      aboutMe: data.aboutMe,
      address: data.address,
    });
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
      <NavBar />
      <Container>
        <div className="foto__perfil">
          <img src={vetsData.avatar} alt="foto-perfil" />
        </div>
        <div className="perfil__vet">
          <Title>{vetsData.name}</Title>
          <span>CRMV: {vetsData.crmv}</span>
          <h4>
            Especialidade: <span>{vetsData.specialty}</span>
          </h4>
          <h4>
            Endereço de Atendimento:
            <span>
              {vetsData.address.address}, {vetsData.address.complement},
              {vetsData.address.code}, {vetsData.address.district},
              {vetsData.address.city}, {vetsData.address.state}
            </span>
          </h4>
        </div>

        <ConsultaValor>
          <div className="info__valor">
            <h4>Valor da Consulta</h4>
            <p>Horário comercial: {vetsData.queryValue}</p>
            <p>Urgências 24h: {vetsData.queryDutyValue}</p>
            <ButtonWhatsap />
          </div>
        </ConsultaValor>
      </Container>
      <AboutMe>
        <h2>Sobre mim</h2>
        <p>{vetsData.aboutMe}</p>
        <h2>Experiência</h2>
        <p>
          {vetsData.experience} <br />
        </p>
        <h2>Formação</h2>
        <p>{vetsData.formation}</p>
      </AboutMe>
      <Footer />
    </>
  );
}

export default Perfil;
