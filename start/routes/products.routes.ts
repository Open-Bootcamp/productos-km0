import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User'

export default () => {
  Route.resource('products', 'ProductController').apiOnly()
  //Route.get('/products', 'ProductController.index')
  Route.get('/locations', async ({ response }) => {
    const a = await User.all()

    response.send(a.map((it) => [it.lat, it.lng, it.fullname]))
  })
}
