import Database from '@ioc:Adonis/Lucid/Database'

export const createDistaceColumn = (tableName, lat, lng) => {
  return Database.raw(
    `(ROUND(earth_distance( ll_to_earth(${tableName}.lat, ${tableName}.lng), ll_to_earth(?,?) )::NUMERIC, 2) / 1000) as distance`,
    [lat, lng]
  )
}

export const insideRange = (tableName, lat, lng, range) => {
  return Database.raw(
    `(earth_distance(ll_to_earth (?, ?), ll_to_earth (${tableName}.lat, ${tableName}.lng)) < ? )`,
    [lat, lng, range * 1000]
  )
}
