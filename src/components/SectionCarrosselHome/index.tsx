import {Carrossel,CarrosselSection, ContainerCarrossel} from "./SectionCarrosselHome.style"
import CardCarrossel from "./../CardCarrossel"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Thumbs} from 'swiper'
import CarrosselSlider from "../Carrossel";





function SectionCarrosselHome(){
    
    // const cards = <CardCarrossel name="José Augusto" petsName="Bilibibi" comentario="Achei uma bosta"/>,<CardCarrossel name="Marcia Chaves" petsName="Boroca" comentario="Ruim que só"/>,<CardCarrossel name="Marcos Failzo" petsName="Van Basten" comentario="Melhor de todos os tempos"/>,<CardCarrossel name="Junior Cacau" petsName="Manguinha" comentario="Melhor coisa que ja utilizei em minha vida"/>,<CardCarrossel/>

    return(

        

        <CarrosselSection>
            <h2>Avaliações</h2> 
            
                <CarrosselSlider/>
                    
            
                
         </CarrosselSection>
    )

}


export default SectionCarrosselHome;