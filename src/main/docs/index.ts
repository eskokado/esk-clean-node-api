import { unauthorized, serverError, badRequest, notFound, forbidden } from './components'
import {
  accountSchema, loginParamsSchema, errorSchema, surveySchema, surveysSchema,
  surveyAnswerSchema, apiKeyAuthSchema, signUpParamsSchema , addSurveyParamsSchema,
  saveSurveyResultParamsSchema, surveyResultSchema
} from './schemas'
import { loginPath, surveyPath, signUpPath, surveyResultPath } from './paths'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description: 'API do curso do Mango para realizar enquetes entre programadores',
    version: '1.0.0'
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  },{
    name: 'Enquete'
  }],
  paths: {
    '/login': loginPath,
    '/signup': signUpPath,
    '/surveys': surveyPath,
    '/surveys/{surveyId}/results': surveyResultPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    signUpParams: signUpParamsSchema,
    error: errorSchema,
    survey: surveySchema,
    addSurveyParams: addSurveyParamsSchema,
    surveys: surveysSchema,
    surveyAnswer: surveyAnswerSchema,
    saveSurveyResultParams: saveSurveyResultParamsSchema,
    surveyResult: surveyResultSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    unauthorized,
    serverError,
    notFound,
    forbidden
  }
}
