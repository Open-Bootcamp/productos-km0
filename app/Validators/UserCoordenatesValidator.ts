import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'

const rule = rules.regex(new RegExp('^-?([1-8]?[1-9]|[1-9]0)\\.{1}\\d{1,6}'))

export default class UserLocationValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    lat: schema.string.optional([rule]),
    lng: schema.string.optional([rule]),
  })

  public messages: CustomMessages = {
    'lat.regex': 'Invalid User latitude',
    'lng.regex': 'Invalid User longitud',
  }
}
