import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'

const rule = rules.regex(new RegExp('^-?([1-8]?[1-9]|[1-9]0)\\.{1}\\d{1,6}'))

export default class UserLocationValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    lat: schema.string([rule]),
    lng: schema.string([rule]),
  })

  public messages: CustomMessages = {
    'lat.regex': 'Invalid User latitude',
    'lat.required': 'User latitude is required',
    'lng.regex': 'Invalid User longitud',
    'lng.required': 'User longitud is required',
  }
}
