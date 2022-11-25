import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ImputFiltro from "../components/ImputFiltro";
import { CardProf1 } from "./Profissionais.style";
import icon from "../../public/foto.svg";
import EstrelaCard from "../../public/EstrelaCard.svg"
import Footer from "../components/Footer";
import ButtonWhatsap from "../components/ButtonWhatsap";

function Profissional() { 
    return(
        <>
            <NavBar />
            <ImputFiltro />
            
            <CardProf1>
                <div><img src={icon} alt="foto-profissional" /></div>
                <h4>Adriana Pacheco</h4>
                <div>
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
            </div>

                <h4>Clínica Geral</h4>
                <h4>Rio de Janeiro - RJ</h4>

            <div className="info_valor">
                        <h4>Valor da Consulta</h4>
                        <p>Horário comercial: R$ 100</p>
                        <p>Urgências 24h: R$ 140</p>
                        <ButtonWhatsap/>
            </div>
            </CardProf1>


            <CardProf1>
                <div><img src={icon} alt="foto-profissional" /></div>
                <h4>Silvia Oliveira</h4>
                <div>
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
            </div>

                <h4>Clínica Geral</h4>
                <h4>Salvador - BA </h4>

            <div className="info_valor">
                        <h4>Valor da Consulta</h4>
                        <p>Horário comercial: R$ 90</p>
                        <p>Urgências 24h: R$ 140</p>
                        <ButtonWhatsap/>
            </div>
            </CardProf1>


            <CardProf1>
                <div><img src={icon} alt="foto-profissional" /></div>
                <h4>Marcela Falcão</h4>
                <div>
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
            </div>

                <h4>Clínica Geral e Cirurgia</h4>
                <h4> Manaus - AM </h4>

            <div className="info_valor">
                        <h4>Valor da Consulta</h4>
                        <p>Horário comercial: R$ 100</p>
                        <p>Urgências 24h: R$ 150</p>
                        <ButtonWhatsap/>
            </div>
            </CardProf1>


            <CardProf1>
                <div><img src={icon} alt="foto-profissional" /></div>
                <h4>Fabio Barreto</h4>
                <div>
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
            </div>

                <h4>Clínica Geral e Cirurgia</h4>
                <h4>Brasilia - DF </h4>

            <div className="info_valor">
                        <h4>Valor da Consulta</h4>
                        <p>Horário comercial: R$ 95</p>
                        <p>Urgências 24h: R$ 120</p>
                        <ButtonWhatsap/>
            </div>
            </CardProf1>


            <CardProf1>
                <div><img src={icon} alt="foto-profissional" /></div>
                <h4>Gustavo Marcelino</h4>
                <div>
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
            </div>

                <h4>Clínica Geral e Anestesiologia</h4>
                <h4>Maceió - AL </h4>

            <div className="info_valor">
                        <h4>Valor da Consulta</h4>
                        <p>Horário comercial: R$ 100</p>
                        <p>Urgências 24h: R$ 130</p>
                        <ButtonWhatsap/>
            </div>
            </CardProf1>


            <CardProf1>
                <div><img src={icon} alt="foto-profissional" /></div>
                <h4>Caio Araujo</h4>
                <div>
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
            </div>

                <h4>Clínica Geral e Acupuntura</h4>
                <h4>Curitiba - PR </h4>

            <div className="info_valor">
                        <h4>Valor da Consulta</h4>
                        <p>Horário comercial: R$ 100</p>
                        <p>Urgências 24h: R$ 140</p>
                        <ButtonWhatsap/>
            </div>
            </CardProf1>


            <CardProf1>
                <div><img src={icon} alt="foto-profissional" /></div>
                <h4>Carolina Veloso</h4>
                <div>
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
            </div>

                <h4>Clínica Geral</h4>
                <h4>Recife - PE </h4>

            <div className="info_valor">
                        <h4>Valor da Consulta</h4>
                        <p>Horário comercial: R$ 100</p>
                        <p>Urgências 24h: R$ 140</p>
                        <ButtonWhatsap/>
            </div>
            </CardProf1>


            <CardProf1>
                <div><img src={icon} alt="foto-profissional" /></div>
                <h4>Aline Dias</h4>
                <div>
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
            </div>

                <h4>Clínica Geral</h4>
                <h4>Betim - MG </h4>

            <div className="info_valor">
                        <h4>Valor da Consulta</h4>
                        <p>Horário comercial: R$ 90</p>
                        <p>Urgências 24h: R$ 140</p>
                        <ButtonWhatsap/>
            </div>
            </CardProf1>


            <CardProf1>
                <div><img src={icon} alt="foto-profissional" /></div>
                <h4>Priscila Vieira</h4>
                <div>
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
            </div>

                <h4>Clínica Geral</h4>
                <h4>São Paulo - SP </h4>

            <div className="info_valor">
                        <h4>Valor da Consulta</h4>
                        <p>Horário comercial: R$ 100</p>
                        <p>Urgências 24h: R$ 140</p>
                        <ButtonWhatsap/>
            </div>
            </CardProf1>


            <CardProf1>
                <div><img src={icon} alt="foto-profissional" /></div>
                <h4>Felipe Carvalho</h4>
                <div>
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
            </div>

                <h4>Dermatologia</h4>
                <h4>Anápolis - GO</h4>

            <div className="info_valor">
                        <h4>Valor da Consulta</h4>
                        <p>Horário comercial: R$ 100</p>
                        <p>Urgências 24h: R$ 150</p>
                        <ButtonWhatsap/>
            </div>
            </CardProf1>


            <Footer/>

            </>
    );
}

export default Profissional; 