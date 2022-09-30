import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm';
import Calendar from 'App/Models/Calendar';
import CreateCalendarValidator from 'App/Validators/CreateCalendarValidator';
import PaginationValidator from 'App/Validators/PaginationValidator';
import UpdateCalendarValidator from 'App/Validators/UpdateCalendarValidator';

export default class CalendarsController {
  public async index({ request, response }: HttpContextContract) {
    const { page = 1, size = 10 } = await request.validate(PaginationValidator)

    const calendar: ModelPaginatorContract<Calendar> = await Calendar.query().paginate(page, size)

    response.ok({
      totalResult: calendar.total,
      results: calendar.all(),
    })
  }

  public async store({ request, response }: HttpContextContract) {
    const body = await request.validate(CreateCalendarValidator)

    const calendar = await Calendar.create(body)

    response.ok(calendar)
  }

  public async show({ response, params: { id } }: HttpContextContract) {
    const calendar = await Calendar.findOrFail(id)

    response.ok({ data: calendar })
  }

  public async update({ request, response, params: { id } }: HttpContextContract) {
    const calendar = await Calendar.findOrFail(id)

    const body = await request.validate(UpdateCalendarValidator)
    await calendar.merge(body).save()

    response.ok(calendar)
  }

  public async destroy({ response, params: { id } }: HttpContextContract) {
    const calendar = await Calendar.findOrFail(id)

    await calendar.delete()

    response.ok(null)
  }
}
