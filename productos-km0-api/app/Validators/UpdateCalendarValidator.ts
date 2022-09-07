import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateCalendarValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    date: schema.date.optional({ format: 'yyyy-MM-dd HH:mm' }),
    address: schema.string.optional(),
  })

  public messages: CustomMessages = {}
}
