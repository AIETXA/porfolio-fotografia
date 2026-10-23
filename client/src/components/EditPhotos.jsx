import { useEffect, useState } from "react";
import './EditPhotos.css';

export default function ManagePhotos() {
    const [photos, setPhotos] = useState([]);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(true);

    const [editId, setEditId] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editCategory, setEditCategory] = useState('');

    const apiUrl = import.meta.env.VITE_API_URL || 'https://porfolio-fotografia.onrender.com';

    
    const fetchPhotos = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${apiUrl}/api/photos`);
            const data = await response.json();
            if (response.ok) {
                setPhotos(data);
            } else {
                setMessage('Error al cargar las fotos');
                setIsError(true);
            }
        } catch (error) {
            console.error(error);
            setMessage('Error de conexión con el servidor');
            setIsError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPhotos();
    }, []);

  
    const handleDelete = async (id) => {
        if (!window.confirm('¿Estás seguro de que querés eliminar esta foto?')) return;

        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`${apiUrl}/api/photos/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response.ok) {
                setMessage('Foto eliminada con éxito');
                setIsError(false);
                fetchPhotos();
            } else {
                const data = await response.json();
                setMessage(data.message || 'Error al eliminar la foto');
                setIsError(true);
            }
        } catch (error) {
            console.error(error);
            setMessage('Error de red al intentar eliminar');
            setIsError(true);
        }
    };

  
    const startEditing = (photo) => {
        setEditId(photo._id || photo.id);
        setEditTitle(photo.title || '');
        setEditCategory(photo.category || '');
    };

  
    const cancelEditing = () => {
        setEditId(null);
        setEditTitle('');
        setEditCategory('');
    };

  
    const handleUpdate = async (id) => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`${apiUrl}/api/photos/${id}`, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ title: editTitle, category: editCategory })
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Foto actualizada con éxito');
                setIsError(false);
                setEditId(null);
                fetchPhotos(); 
            } else {
                setMessage(data.message || 'Error al actualizar la foto');
                setIsError(true);
            }
        } catch (error) {
            console.error(error);
            setMessage('Error de red al intentar actualizar');
            setIsError(true);
        }
    };

    return (
        <div className="manage-container">
            <h2>Gestión de Fotos</h2>
            <p className="manage-subtitle">Editá los títulos/categorías o eliminá fotos de tu portfolio</p>

            {message && <p className={`manage-message ${isError ? 'error' : 'success'}`}>{message}</p>}

            {loading ? (
                <p>Cargando galería...</p>
            ) : photos.length === 0 ? (
                <p>No hay fotos guardadas actualmente.</p>
            ) : (
                <div className="manage-grid">
                    {photos.map((photo) => {
                        const photoId = photo._id || photo.id;
                        const isEditing = editId === photoId;

                        return (
                            <div key={photoId} className="manage-card">
                                <img src={photo.url || photo.imageUrl} alt={photo.title} className="manage-thumb" />

                                <div className="manage-info">
                                    {isEditing ? (
                                        <div className="manage-edit-inputs">
                                            <input 
                                                type="text" 
                                                value={editTitle} 
                                                onChange={(e) => setEditTitle(e.target.value)} 
                                                placeholder="Título"
                                            />
                                            <input 
                                                type="text" 
                                                value={editCategory} 
                                                onChange={(e) => setEditCategory(e.target.value)} 
                                                placeholder="Categoría"
                                            />
                                        </div>
                                    ) : (
                                        <div className="manage-text">
                                            <h4>{photo.title || 'Sin título'}</h4>
                                            <span>Categoría: {photo.category || 'Sin categoría'}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="manage-actions">
                                    {isEditing ? (
                                        <>
                                            <button onClick={() => handleUpdate(photoId)} className="btn-save">Guardar</button>
                                            <button onClick={cancelEditing} className="btn-cancel">Cancelar</button>
                                        </>
                                    ) : (
                                        <>
                                            <button onClick={() => startEditing(photo)} className="btn-edit">Editar</button>
                                            <button onClick={() => handleDelete(photoId)} className="btn-delete">Eliminar</button>
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}