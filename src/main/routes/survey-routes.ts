import { Router } from 'express'
import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeLoadSurveysController } from '@/main/factories/controllers/survey/load-surveys/load-surveys-controller-factory'
import { makeAddSurveyController } from '@/main/factories/controllers/survey/add-survey/add-survey-controller-factory'
import { auth } from '@/main/middlewares/auth'
import { adminAuth } from '@/main/middlewares/admin-auth'

export default (router: Router): void => {
  router.post('/surveys', adminAuth, adaptRoute(makeAddSurveyController()))
  router.get('/surveys', auth, adaptRoute(makeLoadSurveysController()))
}
