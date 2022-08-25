import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role from 'App/Models/Role'

export default class RoleSeeder extends BaseSeeder {
  public async run() {
    await Role.createMany([
      {
        id: 1,
        name: 'productor',
        description: 'productor',
      },
      {
        id: 2,
        name: 'comprador',
        description: 'comprador',
      },
    ])
  }
}
