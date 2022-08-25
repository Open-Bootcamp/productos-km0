import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('role_id').unsigned().references('id').inTable('roles')
      table.string('fullname', 255).notNullable()
      table.string('username', 255).notNullable() //.unique()
      table.string('password', 180).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('address').notNullable()
      table.double('range_distance').notNullable()
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
    this.schema.dropTable(this.tableName)
  }
}
