<!-- PROJECT LOGO -->

<p align="center">
   <p align="center">
    <img src="https://parq-resources.s3.amazonaws.com/logotypo-green.svg" alt="Logo" width="80" height="80">
  </p>
   
  <p align="center">
    La App de Estacionamiento
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#api-endpoints">API Endpoints</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## Installation

1. Get a free API Key at [geocoding](https://developers.google.com/maps/documentation/geocoding/overview?hl=es-419)

   Use the package manager [npm](https://docs.npmjs.com/) to install AnexosApp.

2. Clone the repo

   ```sh
   git clone https://github.com/martinEchavez/PARQ.git
   ```

3. Install NPM packages

   ```bash
   npm install
   ```

4. Enter your API in `.env`
   ```js
   const GEOCODE_API_KEY = 'ENTER YOUR API';
   ```

## Usage

1. Create an `.env` file with the following environment variables.

   | name            |        value        |
   | --------------- | :-----------------: |
   | PORT            |        3000         |
   | GEOCODE_API_KEY | Api key Google Maps |

   Conection DB

   | name     |     value     |
   | -------- | :-----------: |
   | USER     |   Your user   |
   | PASSWORD | Your password |
   | SERVER   |  Your Server  |
   | DATABASE | Your Database |

2. Run the following command

   ```bash
     npm run dev
   ```

## API Endpoints

| `GET` | : `localhost:3000/users`

`Response`

```json
"Users": [
  {
    "nombre": "Carlos",
    "apellido": "Pertuz",
    "direccion": "29 champs elysée",
    "ciudad": "France",
    "longitud": "2.3071806",
    "latitud": "48.8693856",
    "estadogeo": "A"
  },
  {
    "nombre": "Martin",
    "apellido": "Echavez",
    "direccion": "29 champs elysée",
    "ciudad": "France",
    "longitud": "2.3071806",
    "latitud": "48.8693856",
    "estadogeo": "A"
  },
]
```

| `GET` | : `localhost:3000/users/15`

`Response`

```json
{
  "nombre": "Claudia",
  "apellido": "Echavez",
  "direccion": "Turbaco",
  "ciudad": "Bolivar",
  "longitud": "0",
  "latitud": "0",
  "estadogeo": "F"
}
```

| `POST` | : `localhost:3000/users`

`Body Json Input`

```json
{
  "nombre": "Luis",
  "apellido": "Estrada",
  "direccion": "Cartagena",
  "ciudad": "Colombia"
}
```

`Response`

```json
{
  "nombre": "Luis",
  "apellido": "Estrada",
  "direccion": "Cartagena",
  "ciudad": "Colombia",
  "longitud": -75.4832311,
  "latitud": 10.3932277,
  "estadogeo": "A"
}
```

| `DELETE` | : `localhost:3000/users/21`

`Response`

> `Status`: _204_ `No Content`

## License

[MIT](https://choosealicense.com/licenses/mit/)
