import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TbUsuario from 'App/Models/TbUsuario'

export default class UsuariosController {
  //#region Criação de Usuário
  public async criacao_usuario({request,auth}: HttpContextContract) {
    console.log("criacao_usuario")
    try{
      const post = request.body()
      console.log(post)

      if(await TbUsuario.findBy('email', post.email)){
        return {
          message: "Usuário já cadastrado."
        }
      }

    await TbUsuario.create(post)

    const usuario = await TbUsuario.findBy('email', post.email)

    const token = await auth.use('api').attempt(post.email, post.password,{
      expiresIn: '1day',
      name: usuario?.serialize().email
    })

    return {
      message: 'Usuário cadastrado com sucesso!',
      token: token.token
    }

    }catch(message){
      return message
    }

  }
  //#endregion

  //#region Consulta Usuário
  public async consulta_usuario({auth}: HttpContextContract) {

    if(await auth.use('api').authenticate()){
      const select = await TbUsuario.all()

      return select
    }else{
      return {
        message: 'Token inválido'
      }
    }
      
  }
  //#endregion

  //#region Atualizar Usuário
  public async atualizar_usuario({auth,request}: HttpContextContract) {
    try{
      if(await auth.use('api').authenticate()){
        const post = request.only(['email','nome','perfil_id','password','status'])

        var selectUsuario = await TbUsuario.findByOrFail('email',post.email)
        selectUsuario.nome = post.nome
        selectUsuario.perfil_id = post.perfil_id
        selectUsuario.password = post.password
        selectUsuario.status = post.status

        selectUsuario.save()

        return{
          message: 'Usuário atualizado com sucesso'
        }

      }else{
        return{
          message: 'Usuário não encontrado'
        }
      }

    }catch(erro){
      return erro
    }
  }
  //#endregion


}

