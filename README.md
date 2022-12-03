## Description

Amqpman is an AMQP service for developers to design, build, test and iterate their AMQPs. Amqpman like postman for Amqp protocol.

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


## How can I use

Call Post API below with your routingKey and payload.

|  **Methods** | **URL**  | **Body**  | **Response**  |
| :------------: | :------------: | :------------: | :------------: |
|  Post | http://localhost:25672/amqp/rpc  | routingKey -  payload | Success + data or Error  |
| Post  | http://localhost:25672/amqp/publish  | routingKey -  payload  |  Success or Error |



## License

[MIT licensed](LICENSE).
