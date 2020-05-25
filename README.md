<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Amaro_logo.png" width="320" alt="Amaro Fashion Logo" />
</p>

## Description

This is an efficient and scalable server-side applications created with [Nest](https://github.com/nestjs/nest) and TypeScript, to resolve the [Amarofashion back-end-challenge](https://github.com/amarofashion/back-end-challenge).

You can read the challenge in english [here](./changelle.md).

## TODO REVER ESSA DISGRACA, rodar com docker

### dev

```bash
$ docker-compose build
$ docker-compose up
```

### prod

```bash
$ docker-compose -f docker-compose.yml -f docker-compose.prd.yml build
$ docker-compose -f docker-compose.yml -f docker-compose.prd.yml up
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
