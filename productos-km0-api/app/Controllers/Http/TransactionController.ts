import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Product from 'App/Models/Product'
import User from 'App/Models/User'
import PaginationValidator from 'App/Validators/PaginationValidator'

export default class TransactionsController {
  public async index({ request, response }: HttpContextContract) {
    const { page = 1, size = 10 } = await request.validate(PaginationValidator)

    const transaccion = await Database.from('product_buyer')
      .innerJoin('products', 'product_buyer.product_id', '=', 'products.id')
      .paginate(page, size)

    response.ok({ transaccion })
  }

  public async store({ request, response, params: { id } }: HttpContextContract) {
    const user = await User.findOrFail(id)
    const productId = await request.input('product_id')
    const precio = await request.input('price')
    const quantity = await request.input('quantity')
    const product = await Product.find(productId)
    const priceTotal = precio * quantity

    const transaccion = await user.related('productBuyer').attach({
      [product.id]: {
        quantity: `${quantity}`,
        totalPrice: `${priceTotal}`,
      },
    })

    response.ok({ transaccion })
  }

  public async show({ response, params: { id } }: HttpContextContract) {
    const transaccion = await Database.from('product_buyer')
      .innerJoin('products', 'product_buyer.product_id', '=', 'products.id')
      .where('product_buyer.id', '=', `${id}`)

    response.ok({ transaccion })
  }

  public async destroy({ response, params: { id } }: HttpContextContract) {
    await Database.from('product_buyer').where('id', '=', `${id}`).delete()

    response.ok(null)
  }
}
