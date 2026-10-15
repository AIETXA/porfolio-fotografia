import { useEffect, useState } from "react";


export default function AdminPanel() {
    const [ title, setTitle ] = useState('');
    const [ file, setFile ] = useState(null);
    const [ preview, setPreview ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ message, setMessage ] = useState(' ')

    
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if(selectedFile) {
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if(droppedFile) {
            setFile(droppedFile);
            setPreview(URL.createObjectURL(droppedFile));
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!file) {
            setMessage('Seleccioná una imagen');
            return;
        }

        setLoading(true);
        setMessage('');

        const formData = new FormData();
        formData.append('image', file);
        formData.append('title', title);

        try {
            const response = await fetch('http://localhost:5000/api/photos', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if(response.ok) {
                setMessage('Imagen subida y guardada con éxito');
                setTitle('');
                setFile(null);
                setPreview(null);
            } else {
                setMessage(data.message || 'Error al subir la imagen');
            }
        } catch (error) {
            console.error(error);
            setMessage('Error de red al conectar con el servidor')
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-container">
            <h2>Panel de administración</h2>
            <p className="admin-sutitle">Subí una nueva foto al portfolio</p>

            <form onSubmit={handleSubmit} className="admin-form">
                <div className="form-group">
                    <label>Título</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                </div>

                <div className="dropzone-area" onDragOver={handleDragOver} onDrop={handleDrop}>
                    {preview ? (
                        <div className="preview-container">
                            <img src={preview} alt="Vista previa"/>
                            <span>Cambiar imágen</span>
                        </div>
                        ) : ( 
                            <div className="dropzone-instructions">
                                <span className="material-symbols-outline">cloud_upload</span>
                                <p>Arrastrá tu foto aquí</p>
                                <span>o haz clic para buscarla</span>
                            </div>    
                        )}
                        <input type="file" accept="image/*" onChange={handleFileChange} className="file-input-hidden"/>
                </div>

                <button type="submit" disabled={loading} className="btn-submit">
                    {loading ? 'Subiendo a Cloudinary...' : 'Guardar y publicar'}
                </button>

                {message && <p className={`admin-message ${loading ? '' : 'fade-in'}`}>{message}</p>}
            </form>        
        </div>
    );
    
}




