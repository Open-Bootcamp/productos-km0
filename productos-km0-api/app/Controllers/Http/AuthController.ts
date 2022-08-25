import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User"
import Mail from '@ioc:Adonis/Addons/Mail'
import Env from '@ioc:Adonis/Core/Env'
import ResetPasswordValidator from 'App/Validators/ResetPasswordValidator'
import RegisterValidator from 'App/Validators/RegisterValidator'

export default class AuthController {
  public async register ({ request, response }) {
    const data = await request.validate(RegisterValidator)

    const user = await User.create(data)

    return response.created({ data: user })
  }

  public async forgotPassword ({ request, response, auth }: HttpContextContract) {
      const email = request.input('email')
      const user = await User.findByOrFail('email', email)

      const token = await auth.use('api').generate(user)

      const url = Env.get('URL_RESET_PASSWORD') + token.token

      if(user){
        await Mail.send((message) => {
          message
            .from(Env.get('FROM_EMAIL'))
            .to(user.email)
            .subject('Reset your password')
            .html(`<a href="${url}">Click here</a> for reset password`)
        })
      }

      response.status(200)
  }

  public async resetPassword ({ request, response, auth }: HttpContextContract) {
    const { password } = await request.validate(ResetPasswordValidator)

    auth.user?.merge({ password }).save()

    response.status(200)
  }

  public async login ({ request, response, auth }) {
    const email = request.input('email')
    const password = request.input('password')
    try {
      const token = await auth.use('api').attempt(email, password)
      return { token: token, data: auth.user }
    } catch {
      return response.unauthorized('Invalid Credentials')
    }
  }

  public async logout({ auth }) {
    await auth.use('api').revoke()
    return { revoked: true }}
}


