import Route from '@ioc:Adonis/Core/Route'

export default () => {
  Route.resource('products', 'ProductController')
}
