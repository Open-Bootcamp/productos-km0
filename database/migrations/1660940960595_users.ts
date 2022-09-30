import Database from '@ioc:Adonis/Lucid/Database'
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    Database.rawQuery('CREATE EXTENSION cube')
    Database.rawQuery('CREATE EXTENSION earthdistance')

    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('role_id').unsigned().references('id').inTable('roles').nullable()
      table.string('fullname', 255).notNullable()
      table.string('username', 255).notNullable() //.unique()
      table.string('password', 180).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('address').notNullable()
      table.double('range_distance').notNullable()
      table.double('lat', 14).notNullable()
      table.double('lng', 14).notNullable()
      table.boolean('do_delivery').notNullable().defaultTo(false)
      table.boolean('can_deliver_in_point').notNullable().defaultTo(false)
      table.string('picture').nullable()
      table.boolean('status').defaultTo(1)
      table.string('remember_me_token').nullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    Database.rawQuery('DROP EXTENSION cube')
    Database.rawQuery('DROP EXTENSION earthdistance')
    this.schema.dropTable(this.tableName)
  }
}