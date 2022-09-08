import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateProductValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string.optional(),
    picture: schema.string.optional(),
    description: schema.string.optional(),
    status: schema.boolean.optional(),
  })

  public messages: CustomMessages = {}
}
