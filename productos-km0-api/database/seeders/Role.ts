import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import RoleFactory from 'Database/factories/RoleFactory'

export default class extends BaseSeeder {
  public async run() {
    const fakeRoles = await RoleFactory.createMany(5)
    await Promise.all(fakeRoles.map((it) => it.save()))
  }
}
