import BaseUseCase from './BaseUseCase'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserCoordenatesValidator from 'App/Validators/UserCoordenatesValidator'

export default class SearchProducts implements BaseUseCase<any> {
  public async execute(ctx: HttpContextContract): Promise<any> {
    await ctx.request.validate(UserCoordenatesValidator)
  }

  public static new(): SearchProducts {
    return new SearchProducts()
  }
}
