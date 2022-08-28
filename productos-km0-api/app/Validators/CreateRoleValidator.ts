import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateRoleValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    description: schema.string(),
    status: schema.number.optional(),
  })

  public messages: CustomMessages = {
    'name.required': 'Role name is required',
    'description.required': 'Role description is required',
  }
}
