import { Router } from 'express'
import { createController, deleteController, readController, updateController } from '../controllers/index.js'

const route = Router()

route.get('/read', readController)
route.post('/create', createController)
route.put('/update/:id', updateController)
route.delete('/delete/:id', deleteController)


export default route