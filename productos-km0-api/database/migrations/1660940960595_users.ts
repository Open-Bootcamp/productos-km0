import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.string('fullname', 255).notNullable()
      table.string('username', 255).notNullable().unique()
      table.string('password', 180).notNullable()
      table.string('email', 255).notNullable().unique()
      table.point('location').notNullable()
      table.double('range_distance').notNullable()
      table.string('picture').nullable()
      table.string('status').notNullable().defaultTo(1)

      table.string('remember_me_token').nullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
