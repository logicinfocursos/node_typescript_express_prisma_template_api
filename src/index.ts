// src/index.ts
import express, { Express } from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import router from './routes/router'

config()

const app: Express = express()

app.use(cors())
app.use(express.json())
app.use(router)

const port: string | number = process.env.PORT || 3001

app.listen(port, () => {

  console.log(`Server is running on http://localhost:${port}!`)
  
})