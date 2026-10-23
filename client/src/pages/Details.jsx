import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Keyboard, EffectFade } from "swiper/modules"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import '../styles/details.css'


export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ photos, setPhotos ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(`${apiUrl}/api/photos`)
    .then((res) => res.json())
    .then((data) => {
      setPhotos(data);
      setLoading(false);
    }) 
    .catch((err) => {
      console.error('Error al cargar la foto', err);
      setLoading(false);
    }); 
  }, []);

  if(loading) {
    return (
      <div className='details-overlay'>
        <div className='loader'></div>
      </div>
    )
  }

  
  const initialIndex = photos.findIndex((p) => p._id === id);

  return (
    <div className='details-slaider'>
     
      <button className='btn-close' onClick={() => navigate('/')} aria-label='Cerrar'>
        <FontAwesomeIcon icon={faXmark}/>
      </button>

      <div className='swiper-container'>
        <Swiper 
          modules={[Navigation,Keyboard, EffectFade]} 
          navigation 
          keyboard={{ enabled: true }}
          effect='fade'
          fadeEffect={{crossFade:true}}
          initialSlide={initialIndex !== -1 ? initialIndex : 0}
          loop={true}
          speed={400}
          >
            {photos.map((photo) => (
              <SwiperSlide key={photo._id}>
                <div className='slaide-content'>
                  <img src={photo.imageUrl} alt={photo.title || 'Foto'}/>
                  {(photo.title || photo.category) && (
                    <div className='photo-caption'>
                      {photo.title && <h3>{photo.title}</h3> }
                      {photo.category && <span className='category-tag'>{photo.category}</span>}
                
                </div>
                  )}
              </div>
              </SwiperSlide>
            ))}
            </Swiper>
      </div>
    </div>
  );
}