import Route from '@ioc:Adonis/Core/Route'
import CalendarRoutes from './routes/calendars.routes'
import MessagesRoutes from './routes/messages.routes'
import ProductsRoutes from './routes/products.routes'
import ReviewsRoutes from './routes/reviews.routes'
import RolesRoutes from './routes/roles.routes'
import TransactionRoutes from './routes/transactions.routes'
import UsersRoutes from './routes/users.routes'
import AuthRoutes from './routes/auth.routes'

Route.group(() => {
  Route.group(() => {
    AuthRoutes()
  }).prefix('v1')
}).prefix('api')

Route.group(() => {
  Route.group(() => {
    CalendarRoutes()
    MessagesRoutes()
    ProductsRoutes()
    ReviewsRoutes()
    RolesRoutes()
    TransactionRoutes()
    UsersRoutes()
  }).prefix('v1')
})
  .prefix('api')
  .middleware('auth')
