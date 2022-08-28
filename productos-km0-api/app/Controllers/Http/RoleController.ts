import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateRoleValidator from 'App/Validators/CreateRoleValidator';
import Role from 'App/Models/Role';
import PaginationValidator from 'App/Validators/PaginationValidator';
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm';

export default class RolesController {
  public async index({ request, response }: HttpContextContract) {
    const { page = 1, size = 10 } = await request.validate(PaginationValidator)

    const role: ModelPaginatorContract<Role> = await Role.query().paginate(page, size)

    response.ok({
      totalResults: role.total,
      results: role.all(),
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const req = await request.validate(CreateRoleValidator)

    const role = await Role.create(req)

    response.ok(role)
  }

  public async show({ response, params: { id } }: HttpContextContract) {
    const role = await Role.findOrFail(id)

    response.ok(role)
  }

  public async update({ request, response, params: { id } }) {
    const role = await Role.findOrFail(id)

    const req = await request.validate(CreateRoleValidator)
    await role.merge(req).save()

    response.ok(role)
  }

  public async destroy({ response, params: { id } }) {
    const role = await Role.findOrFail(id)

    await role.delete()

    response.ok(null)
  }
}
