import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TbUsuario from 'App/Models/TbUsuario'

export default class UsuariosController {
  //#region Criação de Usuário
  public async criacao_usuario({request,auth,response}: HttpContextContract) {
    console.log("criacao_usuario")
    try{
      const post = request.body()
      console.log(post)

      if(await TbUsuario.findBy('email', post.email)){
        return {
          message: "Usuário já cadastrado."
        }
      }

    const user = await TbUsuario.create(post)

    const email = post.email
    const password = post.password

    const token = await auth.use('api').attempt(email, password, {
      expiresIn: '1day',
      name: user?.serialize().email,  //passando informações pertinentes ao usuário no login
    })

    response.status(201)

    return{
      message: "Usuário cadastrado com sucesso",
      //token: token, 
      //user: user?.serialize(), //passando informações pertinentes ao usuário no login
    }
      


    }catch(message){
      console.log(message)
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
        const post = request.only(['email','nome','perfil','password','status'])

        var selectUsuario = await TbUsuario.findByOrFail('email',post.email)
        selectUsuario.nome = post.nome
        selectUsuario.perfil = post.perfil
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

  //#region Autenticacao
    public async autenticacao({auth,request, response}: HttpContextContract) {
      console.log("Autenticacao")
      try{

        const post = request.body()

        try {
          const token = await auth.use('api').attempt(post.email, post.password)
          console.log("Usuário autenticado")
          return 'Usuario autenticado'
        } catch {
          return response.unauthorized('Credenciais invalidas')
        }
  
      }catch(erro){
        return erro
      }
    }
    //#endregion

}

