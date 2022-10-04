import User from './User'
import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public picture: string

  @column()
  public description: string

  @column()
  public category: number

  @manyToMany(() => User, {
    localKey: 'id',
    pivotForeignKey: 'product_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'seller_id',
    pivotTable: 'product_users',
    pivotColumns: ['product_id', 'seller_id', 'price', 'status', 'stock'],
  })
  public users: ManyToMany<typeof User>

  @manyToMany(() => User, {
    localKey: 'id',
    pivotForeignKey: 'product_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'buyer_id',
    pivotTable: 'product_buyer',
    pivotColumns: ['product_id', 'buyer_id', 'status', 'quantity', 'totalPrice'],
  })
  public userBuyer: ManyToMany<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public status: boolean
}
