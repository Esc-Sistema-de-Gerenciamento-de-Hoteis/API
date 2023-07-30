import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'logs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('id_usuario').unsigned().references('id').inTable('tb_usuarios')
      table.string('tela')
      table.string('descricao')
      table.string('observacao')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.string('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
