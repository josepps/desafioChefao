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
            <SwiperSlide><CardCarrossel name="Maria Santos" petsName="Bilibibi" comentario="Amei a facilidade" img='https://avatars.githubusercontent.com/u/104741998?v=4'/></SwiperSlide>
            <SwiperSlide><CardCarrossel name="Arnaldo Chaves" petsName="Antonio" comentario="Bem legal" img='https://avatars.githubusercontent.com/u/106413273?v=4'/></SwiperSlide>
            <SwiperSlide><CardCarrossel name="Renan Machini" petsName="Van Basten" comentario="Ideia muito boa" img="https://avatars.githubusercontent.com/u/109393052?v=4"/></SwiperSlide>
            <SwiperSlide><CardCarrossel name="Samara Almeida" petsName="Manguinha" comentario="Adorei" img="https://avatars.githubusercontent.com/u/100536475?v=4"/></SwiperSlide>
            <SwiperSlide><CardCarrossel name="Junior Cacau" petsName="Toninho" comentario="Muito prático" img="https://avatars.githubusercontent.com/u/109320300?v=4"/></SwiperSlide>
            <SwiperSlide><CardCarrossel name="Michelle Santana" petsName="Tilapia" comentario="Bacana" img="https://avatars.githubusercontent.com/u/105086169?v=4"/></SwiperSlide>
        </Swiper>
    )
}

export default CarrosselSlider;