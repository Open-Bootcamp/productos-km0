import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UserFactory from 'Database/factories/UserFactory'

export default class extends BaseSeeder {
  public async run() {
    await UserFactory(2).createMany(2)

    await UserFactory(1)
      .with('products', 3, (q) => q.pivotAttributes({ stock: 1, price: 10 }))
      .create()

    await UserFactory(1)
      .with('products', 3, (q) => q.pivotAttributes({ stock: 1, price: 10 }))
      .create()
  }
}
