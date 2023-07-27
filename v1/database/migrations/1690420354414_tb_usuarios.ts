import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tb_usuarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('email')
      table.string('login')
      table.string('nome')
      table.string('perfil')
      table.string('senha')
      table.string('sub')
      table.string('picture')
      table.string('token')
      table.timestamp('created_at', { useTz: true })
      table.string('updated_at')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
