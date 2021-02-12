import { AuthenticationParams } from '@/domain/usecases/account/authentication'
import { AddAccountParams } from '@/domain/usecases/account/add-account'
import { AccountModel } from '@/domain/models/account'

export const mockAuthentication = (): AuthenticationParams => ({
  email: 'any_email@email.com',
  password: 'any_password'
})

export const mockAddAccountParams = (): AddAccountParams => Object.assign({}, mockAuthentication(), {
  name: 'any_name'
})

export const mockAccountModel = (): AccountModel => Object.assign({}, mockAddAccountParams(), {
  id: 'any_id'
})
