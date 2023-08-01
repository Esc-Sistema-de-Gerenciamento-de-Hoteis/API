import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AutenticacaosController {

  //#region Autenticacao
    public async autenticacao({auth,request, response}: HttpContextContract) {
      console.log("Autenticacao")
      try{

        const post = request.body()

        try {
          const token = await auth.use('api').attempt(post.email, post.password)
          
          return {
            message: 'Usuário autenticado',
            token: token.token
          }
        } catch {
          return response.unauthorized('Credenciais invalidas')
        }
  
      }catch(erro){
        return erro
      }
    }
    //#endregion

  //#region Autenticacao Com o Google
  public async google_auth({ally}: HttpContextContract) {
    console.log("google_auth")

    try{
      await ally.use('google')
      console.log(ally.use('google'))
      return ally.use('google').redirect()

      //if()

      }catch(erro){
        return erro
      }
  }
  //#endregion
    

}
