import { useState } from "react"
import Masonry from 'react-masonry-css' 
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import '../styles/gallery.css'



export default function Gallery({ photos = []}) {
    const navigate = useNavigate();
    const [ selectedCategory, setSelectedCategory ] = useState('all');

    const categories = ['all', ...new Set(photos?.map((p) => p.category) || [])];

    const filteredPhotos = selectedCategory === 'all'
      ? photos
      : photos.filter((p) => p.category === selectedCategory);

    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };

 

  return (
    <div className="gallery-view">
      <div className="searcher">
        <input type="text" name="search" id="search" placeholder="Buscar..."/>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
        
      </div>  
      
      <div className="filters">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="gallery-grid">
        <Masonry breakpointCols={breakpointColumnsObj} className="masonry-gallery" columnClassName="my-masonry-grid_column">
          {filteredPhotos.map(photo => (
            <div className="item" key={photo.id} onClick={() => navigate(`/photo/${photo.id}`)}>
              <img src={photo.url} alt={photo.title} />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  )
};




