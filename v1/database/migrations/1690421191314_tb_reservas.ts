import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tb_reservas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('id_hospede')
      table.integer('id_quarto')
      table.integer('id_agenda')
      table.string('status')
      table.integer('total')      
      table.timestamp('created_at', { useTz: true })
      table.string('updated_at')    
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
