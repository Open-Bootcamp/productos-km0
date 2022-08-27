import { test } from '@japa/runner'
import Database from '@ioc:Adonis/Lucid/Database'
import UserFactory from 'Database/factories/UserFactory'
import RoleFactory from 'Database/factories/RoleFactory'

const productCreator = async ({ lat, lng, name, userType = 1, ...rest }) => {
  await UserFactory(userType)
    .merge({ lat, lng })
    .with('products', 1, (q) => q.pivotAttributes(rest).merge({ name }))
    .create()
}

const stringifyQs = (qs) => {
  return Object.entries(qs)
    .map(([k, v]) => `${k}=${v}`)
    .join('&')
}

// TODO : Talk with AMDevelop about some issue in the database clean up that forces me that repeact and skip code in theses tests.
// TODO : Read more Adonisjs testing docs
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

  test('should find two nearby available products', async ({ client }) => {
    await RoleFactory.merge({ name: 'productor' }).create()

    await productCreator({
      stock: 10,
      price: 10,
      name: 'Tomate',
      lat: 51.22975419253159,
      lng: 22.53862756515507,
    })

    // in 2.6 kms from the previous one
    await productCreator({
      stock: 10,
      price: 10,
      name: 'Cebolla',
      lat: 51.238316986559866,
      lng: 22.571899077984877,
    })

    // // in 3.9 kms from previous one
    await productCreator({
      stock: 10,
      price: 10,
      lat: 51.24270219076646,
      lng: 22.58740910652208,
      name: 'Zanahorias',
    })

    // ========================================
    // USER REQUEST
    // ========================================

    const clientCoordernates = {
      lat: 51.22975419253159,
      lng: 22.53862756515507,
    }

    const qs = stringifyQs({
      page: 1,
      size: 10,
      range: 2.9,
      ...clientCoordernates,
    })

    const response = await client.get('/api/v1/products?' + qs)

    response.assertBodyContains({ meta: { total: 2 } })
  })

  test('should all available products on not user coordenates', async ({ client }) => {
    await RoleFactory.merge({ name: 'productor' }).create()

    await productCreator({
      stock: 10,
      price: 10,
      name: 'Tomate',
      lat: 51.22975419253159,
      lng: 22.53862756515507,
    })

    // in 2.6 kms from the previous one
    await productCreator({
      stock: 10,
      price: 10,
      name: 'Cebolla',
      lat: 51.238316986559866,
      lng: 22.571899077984877,
    })

    // // in 3.9 kms from previous one
    await productCreator({
      stock: 10,
      price: 10,
      lat: 51.24270219076646,
      lng: 22.58740910652208,
      name: 'Zanahorias',
    })

    // ========================================
    // USER REQUEST
    // ========================================

    const qs = stringifyQs({
      page: 1,
      size: 10,
    })

    const response = await client.get('/api/v1/products?' + qs)

    response.assertStatus(200)

    response.assertBodyContains({ meta: { total: 3 } })
  }).skip(true)

  test('should find all available products in 20kms range on sent range equal or less than cero', async ({
    client,
  }) => {
    await RoleFactory.merge({ name: 'productor' }).create()

    await productCreator({
      stock: 10,
      price: 10,
      name: 'Tomate',
      lat: 51.22975419253159,
      lng: 22.53862756515507,
    })

    // in 2.6 kms from the previous one
    await productCreator({
      stock: 10,
      price: 10,
      name: 'Cebolla',
      lat: 51.238316986559866,
      lng: 22.571899077984877,
    })

    // // in 3.9 kms from previous one
    await productCreator({
      stock: 10,
      price: 10,
      lat: 51.24270219076646,
      lng: 22.58740910652208,
      name: 'Zanahorias',
    })

    // ========================================
    // USER REQUEST
    // ========================================

    const clientCoordernates = {
      lat: 51.22975419253159,
      lng: 22.53862756515507,
    }

    const qs = stringifyQs({
      page: 1,
      size: 10,
      range: -2.9,
      ...clientCoordernates,
    })

    const response = await client.get('/api/v1/products?' + qs)

    response.assertBodyContains({ meta: { total: 3 } })
  }).skip(true)

  test('should find only products from available productors', async ({ client }) => {
    await RoleFactory.merge({ name: 'productor' }).create()

    await productCreator({
      stock: 10,
      price: 10,
      status: 1,
      name: 'Tomate',
      lat: 51.22975419253159,
      lng: 22.53862756515507,
    })

    // in 2.6 kms from the previous one
    await productCreator({
      stock: 10,
      price: 10,
      status: 0,
      name: 'Cebolla',
      lat: 51.238316986559866,
      lng: 22.571899077984877,
    })

    const qs = stringifyQs({ page: 1, size: 10 })

    const response = await client.get('/api/v1/products?' + qs)

    response.assertBodyContains({ meta: { total: 1 }, data: { 0: { name: 'Tomate' } } })
  }).skip(true)

  test('should find only products in stock', async ({ client }) => {
    await RoleFactory.merge({ name: 'productor' }).create()

    await productCreator({
      stock: 10,
      price: 10,
      status: 1,
      name: 'Tomate',
      lat: 51.22975419253159,
      lng: 22.53862756515507,
    })

    // in 2.6 kms from the previous one
    await productCreator({
      stock: 0,
      price: 10,
      status: 1,
      name: 'Cebolla',
      lat: 51.238316986559866,
      lng: 22.571899077984877,
    })

    const qs = stringifyQs({ page: 1, size: 10 })

    const response = await client.get('/api/v1/products?' + qs)

    response.assertBodyContains({ meta: { total: 1 }, data: { 0: { name: 'Tomate' } } })
  }).skip(true)
})
