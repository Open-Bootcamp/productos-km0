import { test } from '@japa/runner'
import Database from '@ioc:Adonis/Lucid/Database'

test.group('Products search feature', (group) => {
  group.each.setup(async () => {
    await Database.beginGlobalTransaction()
    return () => Database.rollbackGlobalTransaction()
  })

  test('should return 200 on well coordinates', async ({ client }) => {})
})
