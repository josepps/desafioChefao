import {PerguntasFrequentes, DivSeta, DivAparecer} from "./CardPerguntas.styled"
import SetaBaixo from "./../../../public/setaBaixo.svg"
import { useState } from "react"



function CardPerguntas(){

    const [isVisible, setIsVisible] = useState(false);

    
    


    return(

        <PerguntasFrequentes>
            <div>
                <div>
                    <h5>Como faço pra agendar uma consulta veterinária?</h5>
                </div>
                {isVisible && (<DivAparecer>
                    <p>Basta entrar em contato com o profissional vet com quem marcou a consulta para cancelar ou reagendar. Pra ficar confortável pra todo mundo, a gente sugere, sempre que for possível, que esse procedimento seja feito até 24 horas antes da consulta.</p>
                </DivAparecer>)}
            </div>
            <DivSeta className="">
                <button onClick={()=> setIsVisible(!isVisible)}><img src={SetaBaixo} alt="Icone de seta" /></button>
            </DivSeta>
            
        </PerguntasFrequentes>
    )
}

export default CardPerguntas;