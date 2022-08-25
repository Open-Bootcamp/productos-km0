import { test } from '@japa/runner'

test.group('Products search', (group) => {
  group.each.setup(() => {
    console.log('executed before the test')
  })

  group.each.teardown(() => {
    console.log('executed after the test')
  })

  test('should fail on not coordinates present', async ({ client }) => {
    const response = await client.get('/api/v1/products')

    response.assertStatus(400)

    response.assertBody({
      errors: [
        {
          rule: 'required',
          field: 'lat',
          message: 'User latitude is required',
        },
        {
          rule: 'required',
          field: 'lng',
          message: 'User longitud is required',
        },
      ],
    })
  })

  test('should fail on invalid sent coordinates', async ({ client }) => {
    const response = await client.get('/api/v1/products?lat=123&lng=3433')

    response.assertStatus(400)

    response.assertBody({
      errors: [
        {
          rule: 'regex',
          field: 'lat',
          message: 'Invalid User latitude',
        },
        {
          rule: 'regex',
          field: 'lng',
          message: 'Invalid User longitud',
        },
      ],
    })
  })

  test('should return 200 on well coordinates', async ({ client }) => {
    const response = await client.get('/api/v1/products?lat=47.04879993460173&lng=8.30724805994125')
    response.assertStatus(200)
  })
})
