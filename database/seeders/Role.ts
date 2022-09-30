import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role from 'App/Models/Role'

export default class RoleSeeder extends BaseSeeder {
  public async run() {
    await Role.createMany([
      {
        name: 'productor',
        description: 'productor',
      },
      {
        name: 'comprador',
        description: 'comprador',
      },
    ])
  }
}
