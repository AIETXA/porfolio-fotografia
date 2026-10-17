import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'El título de la fotografia es obligatorio'],
        trim: true
    },

    category: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        default: 'paisajes'
    },

    imageUrl: {
        type: String,
        required: [true, 'La URL de la imágen es obligatoria']
    },

    publicId: {
        type: String,
        required: [true, 'El ID público de Cloudinary es obligatorio']
    }
}, {
    timestamps: true
});

const Photo = mongoose.model('Photo', photoSchema);

export default Photo;