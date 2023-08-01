import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tb_permissoes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('perfil').unsigned().references('id').inTable('tb_perfil')
      table.string('permissao')
      table.timestamp('created_at', { useTz: true })
      table.string('updated_at')    
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
