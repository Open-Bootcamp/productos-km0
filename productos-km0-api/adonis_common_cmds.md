# All commond adonis commands here

## Migrations

[pls read deep docs](https://docs.adonisjs.com/guides/database/migrations)

### Create a new migration base on lucid model

`node ace make:model User --migration`

`node ace make:model -m flag`

### Run all migrations

`node ace migration:run`

### Rollback the latest batch

`node ace migration:rollback`

### Rollback the latest batch: just rollback all and then run all

`node ace migration:refresh`

the same as `node ace make:model -m flag` + `node ace migration:rollback`

if we want after refresh run all seeders enter this:

`node ace migration:refresh --seed`

## Seeders

[pls read deep docs](https://docs.adonisjs.com/guides/database/seeders)

### Create a seeder for a model

`node ace make:seeder <model>`

### Seed all

`node ace db:seed`

or seed an given file

`node ace db:seed --files "./database/seeders/<model>.ts"`
