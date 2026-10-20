import { useState } from "react"
import Masonry from 'react-masonry-css' 
import { useNavigate } from "react-router-dom"
import '../styles/gallery.css'


const photosFalsas = [
  { id: '1', title: 'Paisaje 1', category: 'landscapes', url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800' },
  { id: '2', title: 'Retrato 1', category: 'portraits', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800' },
  { id: '3', title: 'Paisaje 2', category: 'landscapes', url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800' }
];


export default function Gallery({ photos = photosFalsas }) {
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
          <div key={photo.id} onClick={() => navigate(`/photo/${photo.id}`)}>
            <img src={photo.url} alt={photo.title} />
          </div>
        ))}
      </Masonry>
    </div>
  )
};




