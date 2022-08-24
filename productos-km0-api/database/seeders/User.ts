import { DateTime } from 'luxon'
import User from 'App/Models/User'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UserFactory from 'Database/factories/UserFactory'
import Role from 'App/Models/Role'

export default class extends BaseSeeder {
  public async run() {
    // Database.rawQuery('CREATE EXTENSION cube')
    // Database.rawQuery('CREATE EXTENSION earthdistance')
    // Database.rawQuery('CREATE EXTENSION postgis')

    /*await UserFactory
    .with('role', role.id)
    .createMany(10)*/
    const fakes = await UserFactory.createMany(10)

    await Promise.all(fakes.map((it) => it.save()))

    const role = await Role.query().firstOrFail()

    User.createMany([
      {
        id: '8c18be3f-9f06-4ec4-88f6-dffd09b536b3',
        fullname: 'Maria Coin',
        roleId: role.id,
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
