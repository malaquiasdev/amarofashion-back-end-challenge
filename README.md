# Amaro Fashion Back-end Challenge

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Amaro_logo.png" width="320" alt="Amaro Fashion Logo" />
</p>

## Description

This is an efficient and scalable server-side applications created with [Nest](https://github.com/nestjs/nest) and TypeScript, to resolve the [Amarofashion back-end-challenge](https://github.com/amarofashion/back-end-challenge).

You can read the challenge in english [here](./changelle.md).

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the [Node.js](https://nodejs.org/en/)
- You have installed the [Yarn](https://yarnpkg.com/getting-started/install)
- You have installed the [MongoDB](https://www.mongodb.com)
- You have installed the [RabbitMQ](https://www.rabbitmq.com)
- Or you can use a [Docker Container Platform](https://www.docker.com)

**I strongly recommend you to use docker as an option to run this project.**

## Running the app with DOCKER to development

```bash
# build
$ docker-compose build

# watch mode
$ docker-compose up
```

## Running the app with DOCKER to production

```bash
# build
$ docker-compose -f docker-compose.yml -f docker-compose.prd.yml build

# watch mode
$ docker-compose -f docker-compose.yml -f docker-compose.prd.yml up
```

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# test coverage
$ npm run test:cov
```

## Contributing

To contribute, follow these steps:

1. Fork this repository.
2. Create a branch: `$ git checkout -b <branch_name>`.
3. Make your changes.
4. Run the test suite: `$ yarn run test`
5. Run the linter suite: `$ yarn run lint`
6. Fix the test and linter errors if exists.
7. Commit your changes: `$ git commit -m '<commit_message>'`
8. Push to the original branch: `$ git push origin amarofashion-back-end-challenge/<branch_name>`
9. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contributors

Thanks to the following people who have contributed to this project:

- [@malaquiasdev](https://github.com/malaquiasdev)

## Contact

If you want to contact me you can reach me at <mateusmalaquiasdev@outlook.com>.

## License

This project uses the following license: [MIT licensed](LICENSE).
