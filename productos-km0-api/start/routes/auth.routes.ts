import Route from '@ioc:Adonis/Core/Route'

export default () => {
  Route.post('/login', 'AuthController.login')
  Route.get('/logout', 'AuthController.logout')
}
