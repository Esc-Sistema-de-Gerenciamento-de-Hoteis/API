import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tb_agenda'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.date('data')
      table.string('status')
      table.integer('cadastrado_por')
      table.timestamp('created_at', { useTz: true })
      table.string('updated_at')    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
