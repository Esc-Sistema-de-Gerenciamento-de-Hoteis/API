import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ApiToken extends BaseSchema {
  protected tableName = 'api_tokens'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id')
      table.string('name').notNullable()
      table.string('type').notNullable()
      table.string('token', 64).notNullable().unique()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.dateTime('expires_at').nullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.dateTime("deleted_at").defaultTo(null); //software delete
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
