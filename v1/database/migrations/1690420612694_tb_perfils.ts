import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tb_perfils'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome')
      table.string('descricao')
      table.string('status')
      table.timestamp('created_at', { useTz: true })
      table.string('updated_at')    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
