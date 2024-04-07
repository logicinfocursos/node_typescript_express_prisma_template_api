// src\routes\router.ts - (created by: logicinfo.com.br/ael)
import { Router } from 'express'
import productRoute from './product.route'
import categoryRoute from './category.route'



const router = Router()

router.use('/product', productRoute)
router.use('/category', categoryRoute)

export default router