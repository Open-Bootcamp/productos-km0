import { test } from '@japa/runner'
import Database from '@ioc:Adonis/Lucid/Database'

test.group('Reviews creation feature', (group) => {
  // Write your test here
  group.each.setup(async () => {
    await Database.beginGlobalTransaction()
    return () => Database.rollbackGlobalTransaction()
  })

  test('blabla', async ({ }) => {}).skip(true)
})
