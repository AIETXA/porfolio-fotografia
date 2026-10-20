import { useState } from "react"
import Masonry from 'react-masonry-css' 
import { useNavigate } from "react-router-dom"
import '../styles/gallery.css'


export default function Gallery({photos = []}) {
    const navigate = useNavigate();
    const [ selectedCategory, setSelectedCategory ] = useState('all');

    const categories = ['all', ...new Set(photos?.map((p) => p.category))];

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
    

      <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
        {filteredPhotos.map(photo => (
          <div key={photo.id} onClick={() => navigate(`/photos/${photo.id}`)}>
            <img src={photo.url} alt={photo.title} />
          </div>
        ))}
      </Masonry>
    </div>
  )
};




