import User from 'App/Models/User'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Database from '@ioc:Adonis/Lucid/Database'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

class Point extends BaseModel {
  @column({
    prepare: (value?: string) => {
      return value ? Database.st().geomFromText(value, 4326) : value
    },
  })
  public geom: string
}

export default class extends BaseSeeder {
  public async run() {
    const point = new Point()
    point.geom = 'POINT(0 0)'
    console.log(point.toJSON())

    Database.rawQuery('CREATE EXTENSION cube')
    Database.rawQuery('CREATE EXTENSION earthdistance')
    Database.rawQuery('CREATE EXTENSION postgis')

    Database.rawQuery('CREATE EXTENSION postgis')

    User.createMany([
      {
        id: 1,
        fullname: 'Maria Coin',
        username: 'mari0083',
        password: '12345',
        email: 'mary.coin@gmail.com',
        location: 'Point(45.74847870430802 4.825761606685732)',
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
