import Product from 'App/Models/Product'
import Factory from '@ioc:Adonis/Lucid/Factory'
import { DateTime } from 'luxon'

export default Factory.define(Product, ({ faker }) => {
  return {
    status: true,
    name: faker.commerce.productName(),
    description: faker.commerce.productName(),
    picture: faker.image.food(),
    category: faker.random.numeric(1),
    createdAt: DateTime.now(),
    updatedAt: DateTime.now(),
  }
}).build()
