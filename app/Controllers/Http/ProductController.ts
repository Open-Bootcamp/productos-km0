import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateProductValidator from 'App/Validators/CreateProductValidator'
import Product from 'App/Models/Product'
import PaginationValidator from 'App/Validators/PaginationValidator'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import UpdateProductValidator from 'App/Validators/UpdateProductValidator'

export default class ProductController {
  /*
  public async index(ctx: HttpContextContract) {
    try {
      ctx.response.send(await SearchProducts.new().execute(ctx))
    } catch (error) {
      ctx.response.badRequest(error)
    }
  }
  */
  public async index({ request, response }: HttpContextContract) {
    const { page = 1, size = 40 } = await request.validate(PaginationValidator)

    const product: ModelPaginatorContract<Product> = await Product.query().paginate(page, size)

    response.ok({
      totalResults: product.total,
      results: product.all(),
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const body = await request.validate(CreateProductValidator)

    const product = await Product.create(body)

    response.ok(product)
  }

  public async show({ response, params: { id } }: HttpContextContract) {
    const product = await Product.findOrFail(id)

    response.ok({ data: product })
  }

  public async update({ request, response, params: { id } }: HttpContextContract) {
    const product = await Product.findOrFail(id)

    const body = await request.validate(UpdateProductValidator)
    await product.merge(body).save()

    response.ok(product)
  }

  public async destroy({ response, params: { id } }: HttpContextContract) {
    const product = await Product.findOrFail(id)

    await product.delete()

    response.ok(null)
  }
}
