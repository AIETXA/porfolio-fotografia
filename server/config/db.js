import mongoose from 'mongoose'

export const conectedDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('DB conectada con éxito')
    } catch (error) {
        console.error('Error al conectar DB', error.message);
        process.exit(1)

    }
}