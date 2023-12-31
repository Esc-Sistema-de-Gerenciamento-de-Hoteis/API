import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class tb_logs extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public usuario_id: number
  
  @column()
  public tela: string

  @column()
  public descricao: string

  @column()
  public observacao: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
