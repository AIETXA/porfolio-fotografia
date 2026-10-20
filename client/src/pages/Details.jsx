import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useParams } from 'react-router-dom';


export default function Details({ photos = [] }) {
  const { id } = useParams(); // Aquí capturas el "123" de la URL

  // Buscas la foto seleccionada o inicializas tu Swiper basado en este id
  
  const currentPhoto = photos.find(p => p.id.toString() === id);

  return (
    <div>
      <h1>Detalle de la foto {id}</h1>
        <Swiper modules={[Navigation, Pagination]} navigation pagination>
          <SwiperSlide><img src="" alt=""/></SwiperSlide>
          <SwiperSlide><img src="" alt=""/></SwiperSlide>
          <SwiperSlide><img src="" alt=""/></SwiperSlide>
          <SwiperSlide><img src="" alt=""/></SwiperSlide>
          <SwiperSlide><img src="" alt=""/></SwiperSlide>
        </Swiper>
    </div>
  );
}