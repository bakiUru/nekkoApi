import { Router } from "express";
import Login from "./user/login.routes.js";

const RoutesNekko = Router();

RoutesNekko.use('/login', Login);

export default RoutesNekko;