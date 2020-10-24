<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->
  
## Introcucción
Aplicación que permite carga se usuarios por medio de un archivo JSON.
Cuenta con 3 peticiones:
GET: Muestra todos los usuarios registrados en la base de datos
GET/id: Muestra la información de un usuario en especifico
POST: Permite agregar la información de un usuario por medio de un formato JSON

Las pruebas fueron realizadas en Postman

## Tecnologias
Se utilizó 
-NestJS, opte por utilizar este framework, ya que es un frame para el cual estan buscando desarrolladores y yo de igual manera ya contaba con un poco de conocimiento, lo cual no fue muy buena idea ya que me trave en algunas partes que mencionare más abajo en una zona de "Problemas".
-TypeORM MySQL para la conexion a una base de datos de MySQL
-Class-Validator para validar que los datos fueran string, email y numericos, también se verifica que el nombre y correo tengan un máximo de 50 caracteres

## Instalación
TypyORM
  npm install --save @nestjs/typeorm typeorm mysql
Class-Validator
  npm install class-validator --save
Generales
  npm install

## Problemas
-Comunicación entre servicios
  Este es el principal problema con el que aún cuento para ser honesto. Como la base de datos cuenta con 2 tablas (usuarios y roles), es necesario hacer un JOIN para las peticiones y un SELECT en él caso del POST, esto para obtener los datos de la tabla de roles con una FK y de igual manera para obtener la clave de los roles con el ID.
  Para realizar los GET opte por crear un servicio para las peticiones ha la tabla de roles, dicho servicio iba/es utilizado desde el servicio para usuarios, y al momento de realizar la llamada, me salta un error, primero era sobre los modulos, ya que no reconocia las importaciones en ambos, actualmente estoy utilizando ModuleRef para realizar el "enlace", pero al momento de llamar la función del servicio, no reconoce el provider

  Este lo menciono como el problema principal, porque para la transformacion del archivo a JSON, tambien se tenía pensado utilizar un servicio independiente con la idea de que pudiera ser reutilizable en todo el sistema, actualmente hay una función POST comentada, la cual recibe como tal el archivo, pero no se le aplico nungún proceso. 

  Voy a dejar el código funcionando de manera muy simple, para que puedan ver mi estructura de programación y mis errores.

  Desafortunadamente para mi no pude cumplir con la meta y reconozco mi culpa por querer aventurarme en un Framework que conozco poco, una enorme disculpa por eso. 
  
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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
