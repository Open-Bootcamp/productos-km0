import { test } from '@japa/runner'
import Database from '@ioc:Adonis/Lucid/Database'

test.group('Products search feature', (group) => {
  group.each.setup(async () => {
    await Database.beginGlobalTransaction()
    return () => Database.rollbackGlobalTransaction()
  })

  test('should return validation error on invalid coordenates', async ({ client }) => {
    const response = await client.get('/api/v1/products?lat=13f23&lng=3433')

    response.assertStatus(400)

    response.assertBodyContains({
      messages: { errors: { 0: { message: 'Invalid User latitude' } } },
    })

    response.assertBodyContains({
      messages: { errors: { 1: { message: 'Invalid User longitud' } } },
    })
  })
})
