import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
    public async index({response}:HttpContextContract){

        const producers = await User.query().preload('role')
        return response.ok(producers)
    }
}
