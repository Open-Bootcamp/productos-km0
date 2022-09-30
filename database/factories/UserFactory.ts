import { DateTime } from 'luxon'
import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'
import RoleFactory from './RoleFactory'
import ProductFactory from './ProductFactory'

export default function (type: number) {
  return Factory.define(User, ({ faker }) => ({
    status: true,
    fullname: faker.name.fullName(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.direction(),
    range_distance: parseInt(faker.random.numeric(3)),
    picture: faker.image.people(),
    roleId: type,

    // This will give us a good range of area to find near products that match with a given searcher position
    lat: parseFloat(faker.address.latitude(33, 32, 3)),
    lng: parseFloat(faker.address.latitude(51, 50, 4)),

    rememberMeToken: '',
    createdAt: DateTime.now(),
    updatedAt: DateTime.now(),
  }))
    .relation('products', () => ProductFactory)
    .relation('role', () => RoleFactory)
    .build()
}
