import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Thumbs, } from 'swiper'
import CardCarrossel from '../CardCarrossel';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function CarrosselSlider(){
    return(
        <Swiper      
            spaceBetween={10}
            slidesPerView={3}
            navigation={true}
            modules={[Navigation,Thumbs]}
            grabCursor={true}
            className="Carrossel"
        >
            <SwiperSlide><CardCarrossel name="José Augusto" petsName="Bilibibi" comentario="Achei uma bosta"/></SwiperSlide>
            <SwiperSlide><CardCarrossel name="Marcia Chaves" petsName="Boroca" comentario="Ruim que só"/></SwiperSlide>
            <SwiperSlide><CardCarrossel name="Marcos Failzo" petsName="Van Basten" comentario="Melhor de todos os tempos"/></SwiperSlide>
            <SwiperSlide><CardCarrossel name="Junior Cacau" petsName="Manguinha" comentario="Melhor coisa que ja utilizei em minha vida"/></SwiperSlide>
            <SwiperSlide><CardCarrossel name="Junior Cacau" petsName="Manguinha" comentario="Melhor coisa que ja utilizei em minha vida"/></SwiperSlide>
            <SwiperSlide><CardCarrossel name="Junior Cacau" petsName="Manguinha" comentario="Melhor coisa que ja utilizei em minha vida"/></SwiperSlide>
        </Swiper>
    )
}

export default CarrosselSlider;