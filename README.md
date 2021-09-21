# NodeJS standard project with Typescript and Express

## Default project to start a rest api with express

* NodeJS
* Typescript
* Express
* PG
* Knex
* JWT
* Jest
* Supertest
* DDD
* Eslint
* Eslint Standard
* Lint Staged
* Husky


## Install NVM
To start, I suggest installing the NVM.
https://github.com/nvm-sh/nvm

### Install with YARN
```
npm install -g yarn
```

### Installation of dependencies
```
yarn
```

### Run in DEV mode
```
yarn dev
```

### Run Build
```
yarn build
```

### Run Start Production
```
yarn start
```

### Create Migration
```
npx knex migrate:make migration_name -x ts
```

### Create Seeds
```
npx knex seed:make seed_name -x ts
```
