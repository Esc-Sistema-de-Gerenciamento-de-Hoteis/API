import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tb_quartos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('status')
      table.string('descricao')
      table.integer('cadastrado_por').unsigned().references('id').inTable('tb_usuarios')
      table.timestamp('created_at', { useTz: true })
      table.string('updated_at')   
     })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
