import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tb_hospedes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string("nome")
      table.string("sobrenome")
      table.string("cpf")
      table.string("rg")
      table.string("data_nascimento")
      table.string("celular")
      table.string("telefone")
      table.string("endereco")
      table.string("bairro")
      table.string("cep")
      table.string("estado")
      table.string("contato_emergencia")
      table.string("estado_civil")
      table.integer("cadastrado_por").unsigned().references('id').inTable('tb_usuarios')
      table.timestamp('created_at', { useTz: true })
      table.string('updated_at')    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
