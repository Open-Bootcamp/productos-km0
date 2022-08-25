import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import PaginationValidator from 'App/Validators/PaginationValidator'
import UserValidator from 'App/Validators/UserValidator'

export default class UsersController {
  public async index ({ request, response }: HttpContextContract) {
    const { page = 1, size = 10 } = await request.validate(PaginationValidator)

    const user: ModelPaginatorContract<User> = await User.query().paginate(page, size)

    response.ok({
      totalResuslts: user.total,
      results: user.all(),
    })
  }

  public async store ({ request, response }: HttpContextContract) {
    const body = await request.validate(UserValidator)

    const user = await User.create(body)

    response.ok(user)
  }

  public async show ({ request, response }: HttpContextContract) {
    const id: string = request.param('id')

    const user: User = await User.findOrFail(id)

    response.ok(user)
  }

  public async update ({ request, response, params: { id } }: HttpContextContract) {
    const user = await User.findOrFail(id)

    const body = await request.validate(UserValidator)
    await user.merge(body).save()

    response.ok(user)
  }

  public async destroy ({ response, params: { id } }: HttpContextContract) {
    const user = await User.findOrFail(id)

    await user.delete()

    response.ok(null)
  }
}
