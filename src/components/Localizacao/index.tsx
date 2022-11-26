
import VectorLocal from "./../../../public/VectorLocal.svg"
import {P} from "./Localizacao.style"



type LocalProps = {
    
    city: string,
    state: string
    
}



function Localizacao(props:LocalProps){

    

    return(
        
            <P>{props.city}, {props.state}<img src={VectorLocal} alt="Localização"/></P>
        
    )

}


export default Localizacao;