import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Category } from 'App/Enums/Categories'

export default class CreateProductValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    picture: schema.string(),
    description: schema.string(),
    category: schema.enum.optional(Object.values(Category)),
    status: schema.boolean.optional(),
  })

  public messages: CustomMessages = {}
}
