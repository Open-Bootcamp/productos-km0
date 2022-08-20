import Route from '@ioc:Adonis/Core/Route'

export default () => {
  Route.post('login', async ({ auth, request, response }) => {
    const email = request.input('email')
    const password = request.input('password')
    try {
      const { token, user } = await auth.use('api').attempt(email, password)
      const { id, fullname, username, address } = user
      return { id, fullname, username, address, token }
    } catch {
      return response.unauthorized('Invalid credentials')
    }
  })

  Route.get('isAuthenticated', async ({ auth, response }) => {
    try {
      await auth.use('api').authenticate()
      const user = auth.use('api').user!
      const { id, fullname, username, address } = user
      return { id, fullname, username, address }
    } catch (error) {
      return response.unauthorized('Invalid credentials')
    }
  })

  Route.get('/logout', async ({ auth }) => {
    await auth.use('api').revoke()
    return { revoked: true }
  })
}
