import { DateTime } from 'luxon'
import User from 'App/Models/User'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UserFactory from 'Database/factories/UserFactory'
import Database from '@ioc:Adonis/Lucid/Database'

export default class extends BaseSeeder {
  public async run() {
    // Database.rawQuery('CREATE EXTENSION postgis')

    // producers
    await UserFactory(1).createMany(10)
    // consumers
    await UserFactory(2).createMany(20)

    // User.createMany([
    //   {
    //     fullname: 'Maria Coin',
    //     username: 'mari0083',
    //     password: '',
    //     roleId: 1,
    //     email: 'mary.coin@gmail.com',
    //     address: '',
    //     range_distance: 2000,
    //     picture: '',
    //     status: false,
    //     rememberMeToken: '',
    //     createdAt: DateTime.now(),
    //     updatedAt: DateTime.now(),
    //     can_deliver_in_point: true,
    //     do_delivery: true,
    //   },
    //   {
    //     fullname: 'Rosa Melbate',
    //     username: 'rosita',
    //     password: '',
    //     roleId: 2,
    //     email: 'rosita.coin@gmail.com',
    //     address: '',
    //     range_distance: 2000,
    //     picture: '',
    //     status: false,
    //     rememberMeToken: '',
    //     createdAt: DateTime.now(),
    //     updatedAt: DateTime.now(),
    //     can_deliver_in_point: true,
    //     do_delivery: true,
    //   },
    // ])
  }
}
