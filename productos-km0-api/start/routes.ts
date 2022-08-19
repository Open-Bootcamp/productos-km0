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

import './routes/calendars.routes'
import './routes/messages.routes'
import './routes/products.routes'
import './routes/reviews.routes'
import './routes/roles.routes'
import './routes/transactions.routes'
import './routes/users.routes'

import Route from '@ioc:Adonis/Core/Route'

Route.get('/healthcheck', async () => ({ status: 200 }))
