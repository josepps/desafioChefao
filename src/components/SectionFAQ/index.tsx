import CardPerguntas from "../CardPerguntas";
import {SectionPerguntas} from "./SectionFAQ.styled"


function SectionFAQ(){
    return(
        <SectionPerguntas>
            <h2>FAQ</h2>
            <CardPerguntas/>
            <CardPerguntas/>
            <CardPerguntas/>
            <CardPerguntas/>
            <CardPerguntas/>
            <CardPerguntas/>       
        </SectionPerguntas>
    )
}

export default SectionFAQ;