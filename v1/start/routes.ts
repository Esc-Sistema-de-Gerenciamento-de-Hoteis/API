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
  
    Route.post('/criacao_usuario', 'UsuariosController.criacao_usuario')

    Route.post('/consulta_usuario', 'UsuariosController.consulta_usuario')

    Route.post('/atualizar_usuario', 'UsuariosController.atualizar_usuario')

    Route.post('/autenticacao', 'UsuariosController.autenticacao')



  }).prefix('/v1')


