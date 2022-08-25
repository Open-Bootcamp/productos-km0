import { DateTime } from 'luxon'
import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'
import RoleFactory from './RoleFactory'

export default Factory.define(User, ({ faker }) => {
  return {
    fullname: faker.name.fullName(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    address: faker.address.direction(),
    range_distance: parseInt(faker.random.numeric(4)),
    picture: faker.image.people(),
    status: 1,
    rememberMeToken: '',
    createdAt: DateTime.now(),
    updatedAt: DateTime.now(),
  }
}).relation('role', () => RoleFactory).build()
