import Route from '@ioc:Adonis/Core/Route'

export default () => {
  Route.resource('transactions', 'TransactionController')
  Route.post('/:id/transactions', 'TransactionController.store')
}
