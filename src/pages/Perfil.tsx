import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Container, Title, ConsultaValor, AboutMe } from "./Perfil.style";
import icon from "../../public/foto.svg";
import Footer from "../components/Footer";
import ButtonWhatsap from "../components/ButtonWhatsap";

function Perfil() {
    return (
        <>
            <NavBar />
            <Container>
                <div className="foto__perfil">
                    <img src={icon} alt="foto-perfil" />
                </div>
                
                <div className="perfil__vet">
                    <Title>Adriana Pacheco</Title>
                    <span>
                        CRMV: 635375
                    </span>
                    <h4>
                        Especialidade: <span>Clínica Geral</span>
                    </h4>
                    <h4>
                        Endereço de Atendimento: 
                        <span>
                            Av. das Américas, 1100, Empresarial Center Master, sala 302 -
                            Barra da Tijuca, Rio de Janeiro - RJ.
                        </span>
                    </h4>
                    
                </div>
            
            <ConsultaValor>
            <div className="info__valor">
                        <h4>Valor da Consulta</h4>
                        <p>Horário comercial: R$ 100</p>
                        <p>Urgências 24h: R$ 140</p>
                        <ButtonWhatsap/>
                    </div>
                    </ConsultaValor>
                    </Container>
            <AboutMe>
                <h2>Sobre mim</h2>
                <p>
                    A Dra. Adriana Pacheco se formou na Escola de Medicina Veterinária da
                    Universidade Federal do Rio de <br />Janeiro. Dra. Adriana tem um interesse
                    especial em medicina felina e medicina interna. Ela tem 2 gatos <br />em
                    casa e gosta de andar de bicicleta ao ar livre e viajar.
                </p>
                <h2>Experiência</h2>
                <p>
                    Experiência diversificada, trabalhando em medicina de pequenos
                    animais, medicina veterinária de emergência <br />e medicina veterinária de
                    saúde pública desde 2010.
                </p>
                <h2>Formação</h2>
                <p>UFRJ - Universidade Federal do Rio de Janeiro.</p>
            </AboutMe>
            <Footer />
        </>
    );
}

export default Perfil;
