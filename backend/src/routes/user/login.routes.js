import { Router } from "express";

const Login = Router();

Login.get('/', (req,res)=>{
    res.send({message:'estas dentro del Login'}).status(200)
})

Login.put('loginUser', loginUserService)
export default Login;
