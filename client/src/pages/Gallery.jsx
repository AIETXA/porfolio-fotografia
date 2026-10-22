import { useState, useEffect } from "react"
import Masonry from 'react-masonry-css' 
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import '../styles/gallery.css'



export default function Gallery() {
    const navigate = useNavigate();
    const [ photos, setPhotos ] = useState([]);
    const [ selectedCategory, setSelectedCategory ] = useState('all');
    const [ searchInput, setSearchInput ] = useState('');
    
    useEffect(() => {
      const apiUrl = import.meta.env.VITE_API_URL;
      fetch(`${apiUrl}/photos`)
      .then(res => res.json())
      .then(data => setPhotos(data))
      .catch(err => console.error('Error al cargar las fotos:', err))
    }, []);

    const categories = ['all', ...new Set(photos?.map((p) => p.category) || [])];

    const filteredPhotos = photos.filter((p) => {
        const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
        const matchSearch = p.title?.toLowerCase().includes(searchInput.toLowerCase());
        return matchCategory && matchSearch;
    });

    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };

 

  return (
    <div className="gallery-view">
      <div className="searcher">
        <input 
          type="text" 
          name="search" 
          id="search" 
          placeholder="Buscar..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

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
            <div className="item" key={photo._id} onClick={() => navigate(`/photo/${photo._id}`)}>
              <img src={photo.imageUrl} alt={photo.title} />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  )
};




