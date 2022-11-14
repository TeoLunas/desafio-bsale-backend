## Tech Stack
**dependencies**:
Node, Express, cors, dotenv, MySql.


**devDependencies**: nodemon
## Installation

Install my-project with npm

```bash
  cd my-project
  npm install
```
    
## Description
El objetivo de esta API es disponibilizar rutas con productos, para ser consumidos por un cliente de una tienda.

Las tecnologidas usas son:
- Node.js y su framwork Express.js para crear el servidor y disponibilizar ruta.
- Dotenv para el uso de variables de entorno.
- Nodemon para el desarrollo y tener disponible livereload de la API.
- Deploy en Heroku.


## Como funciona

Routing.

La api tiene disponible 4 rutas

- GET /api/v1/products
Ruta que devulve un objeto con todos los productos disponibles en la DB 


- GET /api/category
Ruta que devuelve un objeto con todas las categoruas disponibles en la DB.

- GET /api/category/:id
Ruta que devuelve un objeto con el nombre de la categoria y todos los productos asociados a esta categoria.

Require que el parametro id venga indicado

- https://bsale-api-app-deplo.herokuapp.com/api/doc/

Documentacion
