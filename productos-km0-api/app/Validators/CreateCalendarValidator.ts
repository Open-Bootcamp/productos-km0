import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateCalendarValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    date: schema.date({ format: 'yyyy-MM-dd HH:mm' }),
    sellerId: schema.number([rules.exists({ table: 'users', column: 'id' })]),
    buyerId: schema.number([rules.exists({ table: 'users', column: 'id' })]),
    address: schema.string(),
  })

  public messages: CustomMessages = {}
}
