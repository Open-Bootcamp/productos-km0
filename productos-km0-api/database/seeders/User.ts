import { DateTime } from 'luxon'
import User from 'App/Models/User'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class extends BaseSeeder {
  public async run() {
    // Database.rawQuery('CREATE EXTENSION cube')
    // Database.rawQuery('CREATE EXTENSION earthdistance')
    // Database.rawQuery('CREATE EXTENSION postgis')

    User.createMany([
      {
        id: 1,
        fullname: 'Maria Coin',
        username: 'mari0083',
        password: '12345',
        email: 'mary.coin@gmail.com',
        address: '',
        range_distance: 2000,
        picture: '',
        status: 1,
        rememberMeToken: '',
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
      },
    ])
  }
}
