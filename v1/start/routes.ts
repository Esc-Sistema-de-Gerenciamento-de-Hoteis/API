/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { message: 'The API is working...' }
})

/*********************************************************************/ 
/*                                                                   *
/*                   USUÁRIO - Aplicação                             *
/*                                                                   *
/* *******************************************************************/


Route
.group(() => {
  
/* ****************** Criando *****************************************/
Route.post('/criacao_usuario', 'UsuariosController.criacao_usuario')

/* ****************** Consultando **************************************/
Route.post('/consulta_usuario', 'UsuariosController.consulta_usuario')

Route.post('/atualizar_usuario', 'UsuariosController.atualizar_usuario')

/*********************************************************************/
/*                                                                   *
/*                   Perfil                                          *
/*                                                                   *
/* *******************************************************************/

/* ****************** Criando *****************************************/
Route.post('/criacao_perfil','PerfilsController.criacao_perfil_post')


/*********************************************************************/
/*                                                                   *
/*                   Auth                                            *
/*                                                                   *
/* *******************************************************************/

/* ****************** Database *****************************************/
Route.post('/autenticacao', 'AutenticacaosController.autenticacao')


/* ****************** Database *****************************************/
Route.post('/google_auth', 'AutenticacaosController.google_auth')

Route.get('/google_auth', 'AutenticacaosController.google_auth')

















}).prefix('/v1')


  //Off
  Route.post('/gerar_token','TokensController.gerar_token')

