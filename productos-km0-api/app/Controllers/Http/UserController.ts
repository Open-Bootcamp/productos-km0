import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import PaginationValidator from 'App/Validators/PaginationValidator'
import UserValidator from 'App/Validators/UserValidator'

export default class UsersController {
  public async index({ request, response }: HttpContextContract) {
    const { page = 1, size = 10 } = await request.validate(PaginationValidator)

    const user: ModelPaginatorContract<User> = await User.query()
      .preload('role')
      .paginate(page, size)

    response.ok({
      totalResuslts: user.total,
      results: user.all(),
    })
  }

  public async getProducers({request, response}: HttpContextContract){
    const { page = 1, size = 10 } = await request.validate(PaginationValidator)

    const req = request.qs()


    const producers: ModelPaginatorContract<User> =
    await User.query()
      .where('roleId', 1)
      .if(req.fullname, (query) => {
        query.where('fullname', 'ilike', `%${req.fullname}%`)
      })
      .if(req.id, (query) => {
        query.where('id', `${req.id}`)
      })
      .if(req.delivery, (query) => {
        query.where('do_delivery', `${req.delivery}`)
      })
      .if(req.inPoint, (query) => {
        query.where('can_deliver_in_point', `${req.inPoint}`)
      })
      .preload('role')
      .paginate(page, size)

    response.ok({
      totalResuslts: producers.total,
      results: producers.all(),
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const body = await request.validate(UserValidator)

    const user = await User.create(body)

    response.ok(user)
  }

  public async show({ response, params: { id } }: HttpContextContract) {
    const user = await User.findOrFail(id)

    await user.load('role')

    response.ok({ data: user })
  }

  public async update({ request, response, params: { id } }: HttpContextContract) {
    const user = await User.findOrFail(id)

    const body = await request.validate(UserValidator)
    await user.merge(body).save()

    response.ok(user)
  }

  public async destroy({ response, params: { id } }: HttpContextContract) {
    const user = await User.findOrFail(id)

    await user.delete()

    response.ok(null)
  }
}
