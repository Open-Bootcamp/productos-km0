import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'calendars'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('seller_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('buyer_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('transaction')
      table.timestamp('date').notNullable()
      table.string('address').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
