import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'



function Porfolio() {
     return (
        <main className="porfolio-container">
          <h1>Portafolio</h1>
            <div className="porfolio-slider">
              <Swiper modules={[Navigation, Pagination]} navigation pagination>
                <SwiperSlide><img src="" alt=""/></SwiperSlide>
                <SwiperSlide><img src="" alt=""/></SwiperSlide>
                <SwiperSlide><img src="" alt=""/></SwiperSlide>
                <SwiperSlide><img src="" alt=""/></SwiperSlide>
                <SwiperSlide><img src="" alt=""/></SwiperSlide>
              </Swiper>
                       
            </div>
        </main>
      )
    }
   
export default Porfolio