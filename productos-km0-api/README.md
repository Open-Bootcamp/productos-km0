# Productos-km0 API Backend

## Requirements
- [NodeJS](https://nodejs.org) 
- [NPM](https://www.npmjs.com)
- AdonisJS `npm i -g @adonisjs/cli`

## Installation

1. Initialize the project:
    ```bash
    git clone [repository_name]
    cd ./productos-km0/productos-km0-api
    npm i
    ```

2. Create a database in PostgreSQL with the name `productos-km0`.

3. In the project root, create `.env` file and set your environment by following the `.env.example` file.  
    And set the field `PG_DB_NAME=productos-km0`

4. Run the command: 
    ```bash
    node ace migration:run
    ```
5. Run the project:
    ```bash
    npm run dev
    ```

