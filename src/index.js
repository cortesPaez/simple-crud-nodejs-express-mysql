import express from 'express'
import route from './routes/index.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3006

app.use(express.json())
app.use('/simple-crud', route)
app.use(cors)

app.listen(PORT, () => console.log(`server online on ${PORT}`))