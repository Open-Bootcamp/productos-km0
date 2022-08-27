//import { MiddlewareStore } from '@adonisjs/core/build/standalone'
import Route from '@ioc:Adonis/Core/Route'

export default () => {
  Route.get('users/producers', 'UserController.getProducers')
  //Route.resource('users', 'UserController').apiOnly().middleware('auth')
}
