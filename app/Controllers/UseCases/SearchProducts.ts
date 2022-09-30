import BaseUseCase from './BaseUseCase'
import { ProductDTO } from 'App/Types/Product'
import { string } from '@ioc:Adonis/Core/Helpers'
import PaginationValidator from 'App/Validators/PaginationValidator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { createDistaceColumn, insideRange } from 'App/Shared/GeoLocation'
import UserCoordenatesValidator from 'App/Validators/UserCoordenatesValidator'
import Database, { SimplePaginatorContract } from '@ioc:Adonis/Lucid/Database'

const sortDefinition = {
  price: 'asc',
  do_delivery: 'desc',
  can_deliver_in_point: 'desc',
  // extends here
}

const props = [
  'products.id',
  'products.name',
  'products.picture',
  'products.category',
  'products.description',
  'product_users.price',
  'product_users.stock',
]

const DEFAULT_SEARCH_RANGE = 20

export default class SearchProducts implements BaseUseCase<SimplePaginatorContract<ProductDTO>> {
  //

  public async execute(ctx: HttpContextContract): Promise<SimplePaginatorContract<ProductDTO>> {
    const sort = ctx.request.input('sort', '')
    const rangeInput = ctx.request.input('range', 0)
    const range = rangeInput <= 0 ? DEFAULT_SEARCH_RANGE : rangeInput
    const { lat = 0, lng = 0 } = await ctx.request.validate(UserCoordenatesValidator)
    const { page = 1, size = 10 } = await ctx.request.validate(PaginationValidator)
    const thereAreCoordenates = lat && lng

    if (thereAreCoordenates) sortDefinition['distance'] = 'asc'

    const userInputSort = sort
      .split(',')
      .filter((column: string) => Object.keys(sortDefinition).includes(string.snakeCase(column)))
      .map((column: string) => ({ column, order: sortDefinition[string.snakeCase(column)] }))

    return await Database.from('product_users')
      .innerJoin('users', 'product_users.seller_id', '=', 'users.id')
      .innerJoin('products', 'product_users.product_id', '=', 'products.id')
      .select(...props)
      .where('stock', '>', '0')
      .andWhere('users.status', '=', '1')
      .andWhere('product_users.status', '=', '1')
      .if(thereAreCoordenates, (query) => query.andWhereRaw(insideRange('users', lat, lng, range)))
      .if(thereAreCoordenates, (query) => query.select(createDistaceColumn('users', lat, lng)))
      .orderBy(userInputSort)
      .paginate(page, size)
  }

  public static new(): SearchProducts {
    return new SearchProducts()
  }
}
