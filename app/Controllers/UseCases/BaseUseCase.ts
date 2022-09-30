import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default interface BaseUseCase<T> {
  execute(ctx: HttpContextContract): Promise<T>
}
