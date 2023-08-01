import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Log from 'App/Models/Log'
import TbPerfil from 'App/Models/TbPerfil'

export default class PerfilsController {
  
  //#region Modelo de Controller
    public async modelo({auth}: HttpContextContract) {
      try{
        if(await auth.use('api').authenticate()){ //Caso esteja autenticado
  
        }else{ //Caso não esteja autenticado
          await Log.create({usuario_id: await auth.use('api').user?.id,tela: 'Criacao de Perfil', descricao: 'Usuário nao autenticado', observacao: ''})
          return {
            message: 'Erro ao cadastrar o perfil'
          }  
  
        }
  
      }catch(Erro){
        await Log.create({usuario_id: await auth.use('api').user?.id,tela: 'Criacao de Perfil', descricao: 'Erro ao efetuar a criacao de perfil', observacao: Erro})
        return {
          message: 'Erro ao cadastrar o perfil'
        }
      }
    }
    //#endregion

  //#region Criando Perfil
  public async criacao_perfil_post({request,auth}: HttpContextContract) {
    try{
      if(await auth.use('api').authenticate()){ //Caso esteja autenticado
        const post = request.only(['nome','descricao'])
        

        await Database
        .rawQuery("insert into tb_perfil (nome, descricao) values ('" + post.nome + "','" + post.descricao + "')")
        await Log.create({usuario_id: await auth.use('api').user?.id,tela: 'Criacao de Perfil', descricao: 'Perfil: ' + post.nome + ' criado com sucesso', observacao: ''})

        return{
          message: 'Perfil: ' + post.nome + ' criado com sucesso'
        }


      }else{ //Caso não esteja autenticado
        await Log.create({usuario_id: await auth.use('api').user?.id,tela: 'Criacao de Perfil', descricao: 'Usuário nao autenticado', observacao: ''})
        return {
          message: 'Erro ao cadastrar o perfil'
        }  

      }

    }catch(Erro){
     await Log.create({usuario_id: await auth.use('api').user?.id,tela: 'Criacao de Perfil', descricao: 'Erro ao efetuar a criacao de perfil', observacao: "" + Erro + ""})
     console.log(Erro) 
     return {
        message: 'Erro ao cadastrar o perfil'
      }
    }
  }
  //#endregion


}
