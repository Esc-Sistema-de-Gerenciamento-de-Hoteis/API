import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tb_usuarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email')
      table.string('nome')
      table.string('password')
      table.string('sub')
      table.string('picture')
      table.integer('perfil_id')
      table.boolean('status').defaultTo(1)
      table.timestamp('created_at', { useTz: true })
      table.string('updated_at')
      table.dateTime("deleted_at").defaultTo(null); 
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
