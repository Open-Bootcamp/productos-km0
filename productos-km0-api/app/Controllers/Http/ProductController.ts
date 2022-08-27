import SearchProducts from '../UseCases/SearchProducts'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProductController {
  public async index(ctx: HttpContextContract) {
    try {
      ctx.response.send(await SearchProducts.new().execute(ctx))
    } catch (error) {
      ctx.response.badRequest(error)
    }
  }
}
