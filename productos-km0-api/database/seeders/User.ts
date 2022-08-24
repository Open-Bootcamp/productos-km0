import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UserFactory from 'Database/factories/UserFactory'


export default class extends BaseSeeder {
  public async run() {
    // Database.rawQuery('CREATE EXTENSION cube')
    // Database.rawQuery('CREATE EXTENSION earthdistance')
    // Database.rawQuery('CREATE EXTENSION postgis')


    const fakes = await UserFactory.with('role', 1).createMany(10)
    await Promise.all(fakes.map((it) => it.save()))

  }
}
