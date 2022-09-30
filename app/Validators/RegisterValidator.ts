import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    username: schema.string({}, [
      rules.unique( {table: 'users', column: 'username'} ),
    ]),
    password: schema.string(),
    email: schema.string({}, [
      rules.email(),
      rules.unique({ table: 'users', column: 'email'}),
    ]),
    roleId: schema.number(),
  })

  public messages: CustomMessages = {}
}
