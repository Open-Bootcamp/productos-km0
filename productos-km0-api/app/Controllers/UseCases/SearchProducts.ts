import BaseUseCase from './BaseUseCase'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SearchProducts implements BaseUseCase<any> {
  public async execute(ctx: HttpContextContract): Promise<any> {
    throw new Error('SearchProducts is not implemented')
  }

  public static new(): SearchProducts {
    return new SearchProducts()
  }
}
