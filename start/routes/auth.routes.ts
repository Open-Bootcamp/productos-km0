import Route from '@ioc:Adonis/Core/Route'

export default () => {
  Route.post('/register', 'AuthController.register')
  Route.post('/login', 'AuthController.login')
  Route.get('/logout', 'AuthController.logout').middleware('auth')
  Route.post('/resetPassword/email', 'AuthController.forgotPassword')
  Route.post('/resetPassword', 'AuthController.resetPassword').middleware('auth')
}
