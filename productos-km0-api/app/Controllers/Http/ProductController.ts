import Product from 'App/Models/Product'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserLocationValidator from '../../Validators/UserLocationValidator'
import Database from '@ioc:Adonis/Lucid/Database'
import User from 'App/Models/User'

export default class ProductController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const { lat, lng } = await request.validate(UserLocationValidator)
      const { range = 20 } = request.qs()

      let user = await User.query()
        .preload('products', (q) => {})
        .select('fullname')
        .select('products')
      // .orderBy('distance')

      response.send(
        user.map((it) => ({
          distance: it.$extras.distance,
          name: it.fullname,
          lat: it.lat,
          lng: it.lng,
          products: it.products,
        }))
      )
    } catch (error) {
      console.log(error)

      response.badRequest(error.messages)
    }
  }
}
// .select(
//   Database.raw(
//     `(ROUND(earth_distance(ll_to_earth(users.lat, users.lng), ll_to_earth(?,?))::NUMERIC, 2) / 1000) AS distance`,
//     [lat, lng]
//   )
// )

// .whereRaw(
//   Database.raw(
//     `(earth_box(ll_to_earth (?, ?), ?) @> ll_to_earth (users.lat, users.lng) )`,
//     [lat, lng, range * 1000]
//   )
// )
// .andWhereRaw(
//   Database.raw(
//     `(earth_distance(ll_to_earth (?, ?), ll_to_earth (users.lat, users.lng)) < ? )`,
//     [lat, lng, range * 1000]
//   )
// )
