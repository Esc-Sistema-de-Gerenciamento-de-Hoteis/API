import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tb_usuarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('email')
      table.string('nome')
      table.string('perfil')
      table.string('password')
      table.string('sub')
      table.string('picture')
      table.boolean('status').defaultTo(1)
      table.timestamp('created_at', { useTz: true })
      table.string('updated_at')
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
