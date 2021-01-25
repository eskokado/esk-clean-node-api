import { MissingParamError } from './../../errors/missing-param-error'
import { badRequest } from './../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class LoginController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    return Promise.resolve(badRequest(new MissingParamError('email')))
  }
}
