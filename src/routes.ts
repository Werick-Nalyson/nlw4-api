import { Router } from 'express'
import SurveyController from './controllers/SurveyController'
import userController from './controllers/UserController'

const router = Router()

router.post('/users', userController.create)

router.post('/surveys', SurveyController.create)
router.get('/surveys', SurveyController.findAll)

export default router