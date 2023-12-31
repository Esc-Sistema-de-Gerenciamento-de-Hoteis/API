import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel } from '@ioc:Adonis/Lucid/Orm'

export default class TbUsuario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public nome: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public perfil_id: number

  @column()
  public status: boolean

  @column()
  public sub: string

  @column()
  public picture: string

  @column()
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime({ serializeAs: null})
  public deletedAt: DateTime

  @beforeSave()
  public static async hashPassword (tbUsuario: TbUsuario) {
    if (tbUsuario.$dirty.password) {
      tbUsuario.password = await Hash.make(tbUsuario.password)
    }
  }
}
