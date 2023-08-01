import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tb_perfil'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nome')
      table.string('descricao')
      table.string('status').defaultTo(1)
      table.timestamp('created_at', { useTz: true })
      table.string('updated_at')    
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
