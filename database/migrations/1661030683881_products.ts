import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { Category } from 'App/Enums/Categories'

export default class extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 255)
      table.string('picture', 255)
      table.text('description')
      table.enu('category', Object.values(Category)).defaultTo(Category.OTROS).notNullable()
      table.boolean('status')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
