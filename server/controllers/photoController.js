import Photo from '../models/Photo.js';
import cloudinary from '../config/cloudinary.js';



function uploadToCloudinary(buffer, customOptions = {}) {
    return new Promise((resolve, reject) => {
        const defaultOptions = {
            resource_type: 'image',
            folder: 'porfolio',
            fetch_format: 'auto',
            quality: 'auto:good',
        };

        const finalOptions = {...defaultOptions, ...customOptions}

        const uploadStream = cloudinary.uploader.upload_stream(
            finalOptions,
            (error, result) => {
                if(error) return reject(error);
                resolve(result)
            }
        );

        uploadStream.end(buffer);
        });
    };

export const uploadPhoto = async(req,res) => {
    try {
        const { title, category } = req.body;
        if(!req.file) {
            return res.status(400).json({message:'No se subió ninguna imágen'});
        }
        const cloudinaryResults = await uploadToCloudinary(req.file.buffer);

        const newPhoto = new Photo({
            title,
            category: category ? category.toLowerCase() : 'paisajes',
            imageUrl: cloudinaryResults.secure_url,
            publicId: cloudinaryResults.public_id

        });
        await newPhoto.save();

        res.status(200).json({
            message: 'Foto subida con éxito',
            photo: newPhoto
        });
    } catch (error) {
        console.error('Error al subir la foto', error);
        res.status(500).json({message:'Error interno del servidor'})
    }
};

export const getAllPhotos = async(req,res) => {
    try{
        const { category }  = req.query;
        const filter = category ? { category: category.toLowerCase() } : {};

        const photos = await Photo.find(filter).sort({createdAt: -1});
        res.status(200).json(photos);
    } catch (error) {
        console.error('Error al intentar obtener todas la fotos', error);
        res.status(500).json({message: 'Error al obtener las fotos'})
    }
};

export const getPhotoById = async(req, res) => {
    try{
        const {id} = req.params;
        const photoDetail = await Photo.findById(id);

        if(!photoDetail) {
            return res.status(404).json({message: 'Foto no encontrada'});
        }
        res.status(200).json(photoDetail);
    } catch (error) {
        console.error('Error al intentar obtener la foto', error);
        res.status(500).json({message: 'Error interno del servidor'})
    }
};

export const updatePhoto = async(req, res) => {
    try{
        const { id } = req.params;
        const { title, category } = req.body;

        const updateData = {};
        if (title !== undefined) updateData.title = title;
        if (category !== undefined) updateData.category = category.toLowerCase();
    
        const updatedPhoto = await Photo.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        });

        if(!updatedPhoto) {
            return res.status(404).json({message: 'Foto no encontrada'});
        }

        res.status(200).json({
            message: 'Foto actualizada',
            photo: updatedPhoto
        });
    } catch (error) {
        console.error('Error al actualizar la foto', error);
        res.status(500).json({message: 'Error interno del servidor'});
    }
};

export const deletePhoto = async(req, res) => {
    try {
        const {id} = req.params;
        const img = await Photo.findById(id);
        if(!img) {
            return res.status(404).json({message: 'Foto no encontrada'});
        }

        await cloudinary.uploader.destroy(img.publicId);

        await Photo.findByIdAndDelete(id);

        res.status(200).json({message: 'Foto eliminada con éxito'});
    } catch (error) {
        console.error('No se pudo eliminar la foto', error);
        res.status(500).json({message: 'Error al intentar eliminar la foto'})
    }
};
