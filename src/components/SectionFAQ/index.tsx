import CardPerguntas from "../CardPerguntas";
import {SectionPerguntas} from "./SectionFAQ.styled"


function SectionFAQ(){
    return(
        <SectionPerguntas id="SectionFAQ">
            <h2>FAQ</h2>
            <h3>Veterinários</h3>
            <CardPerguntas/>
            <CardPerguntas/>
            <CardPerguntas/>
            <h3>Tutores</h3>
            <CardPerguntas/>
            <CardPerguntas/>
            <CardPerguntas/>       
        </SectionPerguntas>
    )
}

export default SectionFAQ;