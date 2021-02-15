import { apiKeyAuthSchema } from './schemas/'
import {
  unauthorized,
  serverError,
  badRequest,
  notFound,
  forbidden
} from './components/'

export default {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema
  },
  badRequest,
  unauthorized,
  serverError,
  notFound,
  forbidden
}
