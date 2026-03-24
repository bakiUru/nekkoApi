//Credenciales de la conexion a la BD
import envs from "./config/env.config.js"
import 'dotenv/config'
import mongoose from "mongoose"

const MAX_ATTEMPTS = 5
const DELAY_BETWEEN_ATTEMPTS = 1000


const dbConfig = {
    host: envs.DB_HOST,
    port: envs.DB_PORT,
    user: envs.DB_USER,
    password: envs.DB_PASSWORD,
    database: envs.DB_NAME
}

const connectDB = async () => {
    let attempts = 0
    while(attempts < MAX_ATTEMPTS){
        try{
            const db = await mongoose.connect(`mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`)
            console.log('Conexion exitosa a la BD')
            return db
        }catch(e){
            attempts++
            console.log(`Intento ${attempts} de ${MAX_ATTEMPTS}`)
            await new Promise(resolve => setTimeout(resolve, DELAY_BETWEEN_ATTEMPTS))
        }
    }
    console.log('Error de conexion con la BD')
}

export default connectDB