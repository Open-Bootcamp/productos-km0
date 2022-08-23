import Route from '@ioc:Adonis/Core/Route'

export default () => {
  Route.resource('users', 'UsersController')

  Route.get('/producers', 'UsersController.index')
}
