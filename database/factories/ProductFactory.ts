import Product from 'App/Models/Product'
import Factory from '@ioc:Adonis/Lucid/Factory'
import { DateTime } from 'luxon'
import { Category } from 'App/Enums/Categories'

export default Factory.define(Product, ({ faker }) => ({
  status: true,
  name: faker.commerce.productName(),
  description: faker.commerce.productName(),
  picture: faker.image.food(),
  category: Category.FRUTAS,
  createdAt: DateTime.now(),
  updatedAt: DateTime.now(),
})).build()
