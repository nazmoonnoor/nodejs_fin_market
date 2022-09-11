# Simple Financial Market API

The API project build with Node.js and Typescript.
Runtime and Tools that are used:

-   [Express.js](https://expressjs.com/)
-   [Typescript](https://gitlab.com/nazmoonnoor/nodejs_simple_blog)
-   [Mongoose](https://mongoosejs.com/)

## Clone the project

```bash
  git clone https://gitlab.com/nazmoonnoor/nodejs_fin_market.git
```

```bash
  cd nodejs_fin_market
```

## Run Locally

Go to the project directory

```bash
  cd nodejs_fin_market
```

Environment file

```bash
   Rename `.env.example` file to `.env`.
```

Create db

```bash
Install MongoDB, update `.env` with your MongoDB connection
```

Install

```bash
  yarn install
```

Run

```bash
  yarn run dev
```

## Run use cases with Postman collection

-   Postman collection has been shared in the root folder. Please download it and import to postman to test the endpoint.

## API Reference

#### Stock

```http
  GET api/v1/market/<SYMBOL>
```
