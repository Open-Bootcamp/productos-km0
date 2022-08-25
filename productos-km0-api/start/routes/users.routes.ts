import Route from '@ioc:Adonis/Core/Route'

export default () => {

  Route.get('users/producers', 'UsersController.index')
  


  Route.resource('users', 'UsersController')
}
