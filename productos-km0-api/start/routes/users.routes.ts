import { MiddlewareStore } from '@adonisjs/core/build/standalone'
import Route from '@ioc:Adonis/Core/Route'

export default () => {
  Route.resource('users', 'UserController').apiOnly().middleware({ index: ['auth'], show: ['auth'], update: ['auth'], destroy: ['auth'] })
}
