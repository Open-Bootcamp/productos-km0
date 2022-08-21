import User from './User'
import { DateTime } from 'luxon'
import { v4 as uuid } from 'uuid'
import { BaseModel, column, manyToMany, ManyToMany, beforeSave } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @manyToMany(() => User, {
    pivotColumns: ['product_id'],
  })
  public users: ManyToMany<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(Product: Product) {
    if (!Product.id) Product.id = uuid()
  }
}
