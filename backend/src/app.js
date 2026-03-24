import express from "express"
import morgan from "morgan"
import RoutesNekko from "./routes/routesNekko.js"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

app.use('/api', RoutesNekko)








export default app