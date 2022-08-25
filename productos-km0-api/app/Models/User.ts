import Role from './Role'
import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  BaseModel,
  belongsTo,
  BelongsTo,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public fullname: string

  @column()
  public username: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public email: string

  @column()
  public roleId: number

  @column()
  public address: string

  @column()
  public lat: number

  @column()
  public lng: number

  @column()
  public range_distance: string

  @column()
  public picture: string

  @manyToMany(() => Product, {
    localKey: 'id',
    pivotForeignKey: 'seller_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'product_id',
    pivotTable: 'product_users',
    pivotTimestamps: true,
    pivotColumns: ['price', 'status', 'stock'],
    onQuery: (q) => q.where('status', 1),
  })
  public products: ManyToMany<typeof Product>

  @column()
  public status: boolean

  @column()
  public can_deliver_in_point: boolean

  @column()
  public do_delivery: boolean

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(User: User) {
    if (User.$dirty.password) {
      User.password = await Hash.make(User.password)
    }
  }

  @belongsTo(() => Role)
  public role: BelongsTo<typeof Role>
}
