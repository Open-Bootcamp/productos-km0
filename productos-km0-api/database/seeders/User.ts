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
        fullname: 'Maria Coin',
        username: 'mari0083',
        password: '',
        roleId: 1,
        email: 'mary.coin@gmail.com',
        address: '',
        range_distance: 2000,
        picture: '',
        status: false,
        rememberMeToken: '',
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
        can_deliver_in_point: true,
        do_delivery: true,
      },
      {
        fullname: 'Rosa Melbate',
        username: 'rosita',
        password: '',
        roleId: 1,
        email: 'jose.coin@gmail.com',
        address: '',
        range_distance: 3465,
        picture: '',
        status: true,
        rememberMeToken: '',
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
        can_deliver_in_point: false,
        do_delivery: true,
      },
      {
        fullname: 'Jose melarques',
        username: 'joseto',
        password: '',
        roleId: 1,
        email: 'rosita.coin@gmail.com',
        address: '',
        range_distance: 2000,
        picture: '',
        status: false,
        rememberMeToken: '',
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
        can_deliver_in_point: true,
        do_delivery: true,
      }
      ,
      {
        fullname: 'manuel castillo',
        username: 'manuelito',
        password: '',
        roleId: 1,
        email: 'manuel.coin@gmail.com',
        address: '',
        range_distance: 1760,
        picture: '',
        status: true,
        rememberMeToken: '',
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
        can_deliver_in_point: true,
        do_delivery: false,
      },
      {
        fullname: 'jime cabello',
        username: 'jime',
        password: '',
        roleId: 1,
        email: 'jime.coin@gmail.com',
        address: '',
        range_distance: 2000,
        picture: '',
        status: false,
        rememberMeToken: '',
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
        can_deliver_in_point: true,
        do_delivery: true,
      },
      {
        fullname: 'ippo makanaochi',
        username: 'ippo',
        password: '',
        roleId: 2,
        email: 'ippo.coin@gmail.com',
        address: '',
        range_distance: 6430,
        picture: '',
        status: false,
        rememberMeToken: '',
        createdAt: DateTime.now(),
        updatedAt: DateTime.now(),
        can_deliver_in_point: false,
        do_delivery: false,
      }
    ])
  }
}
