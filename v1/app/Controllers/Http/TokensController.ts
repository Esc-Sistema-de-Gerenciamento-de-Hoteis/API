import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TbUsuario from 'App/Models/TbUsuario'
import Hash from '@ioc:Adonis/Core/Hash'


export default class TokensController {

//#region Criação de Usuário
    public async gerar_token({request,auth,response}: HttpContextContract) {
      console.log("gerar_token")
      try{
        const post = request.only(['email','password'])
        console.log(post)
  
      const user = await TbUsuario.findByOrFail('email', post.email)

      // Verify password
      if (!(await Hash.verify(user.password, post.password))) {
        return response.unauthorized('Invalid credentials')
      }

      // Generate token
      const token = await auth.use('api').generate(user)
  
      response.status(201)
  
      return{
       token: token.token, 
      }
  
      }catch(message){
        return message
      }
  
    }
    //#endregion
  
  

}
