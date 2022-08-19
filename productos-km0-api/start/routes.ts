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
import CalendarRoutes from './routes/calendars.routes'
import MessagesRoutes from './routes/messages.routes'
import ProductsRoutes from './routes/products.routes'
import ReviewsRoutes from './routes/reviews.routes'
import RolesRoutes from './routes/roles.routes'
import TransactionRoutes from './routes/transactions.routes'
import UsersRoutes from './routes/users.routes'

Route.group(() => {
  CalendarRoutes()
  MessagesRoutes()
  ProductsRoutes()
  ReviewsRoutes()
  RolesRoutes()
  TransactionRoutes()
  UsersRoutes()
})
  .prefix('v1')
  .as('api')
