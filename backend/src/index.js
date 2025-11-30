import 'dotenv/config'
import envs from './config/env.config.js'
import app from './app.js'


const PORT = envs.PORT || 8080

app.listen(PORT, async()=>{
    console.log('Server on port', PORT)
    //conexion a la BD
    try{
        //Funcion de conexion con la BD
    }catch(e){
        console.log("Error de conexion con la BD")
    }
})

app.get('/', async (req,res)=>{
    res.send("Conectado al Servidor").status(200)
})