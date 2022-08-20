import { DateTime } from 'luxon'
import Role from 'App/Models/Role'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Role, ({ faker }) => {
  return {
    name: faker.word.verb(),
    description: faker.lorem.words(2),
    createdAt: DateTime.now(),
    updatedAt: DateTime.now(),
  }
}).build()
