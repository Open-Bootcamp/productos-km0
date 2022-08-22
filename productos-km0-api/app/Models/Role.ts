import User from './User'
import { DateTime } from 'luxon'
import { v4 as uuid } from 'uuid'
import { column, beforeSave, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

export default class Role extends BaseModel {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @column()
  public description: string

  @hasMany(() => User, { foreignKey: 'roleId' })
  public users: HasMany<typeof User>

  @column()
  public status: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(Role: Role) {
    if (!Role.id) Role.id = uuid()
  }
}
