import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    fullname: schema.string(),
    username: schema.string({}, [
      rules.unique( {table: 'users', column: 'username'} )
    ]),
    password: schema.string(),
    email: schema.string({}, [
      rules.email(),
      rules.unique({ table: 'users', column: 'email'}),
    ]),
    roleId: schema.number(),
    address: schema.string(),
    range_distance: schema.number.optional(),
    picture: schema.string(),
    status: schema.boolean.optional(),
  })

  public messages: CustomMessages = { }
}
