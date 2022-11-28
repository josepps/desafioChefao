import {DivCardCarrossel, DivImgCardCarrossel} from "./CardCarrossel.style"
import CardImage from "./../../../public/ImagemCard.png"
import EstrelaCard from "./../../../public/EstrelaCard.svg"


export type CardCarrosselProps = {
    
    name: string;
    petsName: string;
    comentario: string;
    img: string;

}


function CardCarrossel(props: CardCarrosselProps){
    return(
        <DivCardCarrossel>
            <DivImgCardCarrossel><img src={props.img} alt="Imagem do Tutor" /></DivImgCardCarrossel>
            <h4>{props.name}</h4>
            <h5>Tutor do(a) {props.petsName}</h5>
            <div>
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
                <img src={EstrelaCard} alt="Estrela de avaliação" />
            </div>
            <span>"{props.comentario}"</span>
        </DivCardCarrossel>

    )
}

export default CardCarrossel;