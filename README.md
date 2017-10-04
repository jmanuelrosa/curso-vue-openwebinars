# Codit

> A new way to discover github!

Busca y encuentra al usuario que desees en Github, y obten toda la información relevante acerca de esta persona.


### Curso sobre Vue para OpenWebinars
https://openwebinars.net/

## Requisitos

Para el curso sobre [VueJS](https://vuejs.org/) es necesario tener instalado:

* Cualquier editor como [Atom](https://atom.io/), [Sublime Text](https://www.sublimetext.com/), [VSCode](https://code.visualstudio.com/), o cualquier otro editor/IDE que nos guste.
* [NodeJS](https://nodejs.org/es/) en su [última version](https://nodejs.org/es/download/).

| Dependencias | Version  |
|:-------------|:---------| 
| __node__     | >= 8.4.0 |
| __npm__      | >= 5.3.0 |
| __yarn__     | >= 1.0.1 |

### Github Personal Token

Aunque la [API de Github](https://developer.github.com/v3/) es totalmente abierta, tiene una serie de limitaciones a la hora de utilizarla y consiste en limitar el número de llamadas que podemos hacer a la API de forma totalmnete anónima. Para ello, necesitaremos crear nuestro Personal Access Token, que conseguiremos realizando estos sencillos pasos (es necesario tener cuenta en Github, es totalmente gratuito):

* Hacemos login en nuestra cuenta de Github o creamos una cuenta nueva [aquí](https://github.com/)
* Accedemos a las __settings__ de nuestro usuario, concretamente, al apartado de __Perosonal access tokens__ en el bloque __Developer settings__ [aquí](https://github.com/settings/tokens)
* Hacemos click en la opción __Generate new token__ y nos validamos como usuario con nuestra clave
* Asignamos un nombre a nuestro token, por ejemplo, *curso_vue*, y seleccionamos todos los scopes
* Una vez seleccionado todo, hacemos click en el botón __Generate token__ que se encuentra en la parte inferior
* Veremos que se nos ha generado un token de este estilo _2f06c9e8578e92bdc9f2c64cb06b6e316f7bXXXX_
* Copiamos este token, y lo pegamos en el fichero __dev.env.js__ que se encuentra en el directorio __config__ de la aplicación __codit__

Con esto, podemos realizar más peiticiones a la API de Github, aunque seguiremos teniendo limitaciones, pero el número de peticiones que nos permite hacer la API con esta autenticación es suficiente para este curso

## Desarrollo

Tareas que podemos ejecutar dentro de nuestra aplicación:

* npm run dev - Ejecuta el entorno de desarrollo, y todas las tareas asociadas, junto al hot-loader
* npm run start - Otra forma de ejecutar `npm run dev`
* npm run build - Genera un directorio con todos nyuestro ficheros preparados para desplegar en nuestro servidor
* npm run unit - Ejecuta los test unitarios de nuestro proyecto
* npm run e2e - Ejecuta los test e2e o funcionales
* npm run test - Ejecutamos los test unitarios y funcionales de nuetsro proyecto
* npm run lint -  Ejecutamos el linter sobre nuestro código

## Realizado con

* [Vue](https://vuejs.org/) - Framework progresivo que estudiaremos durante el curso
* [Vue-cli](https://github.com/vuejs/vue-cli) - Interfaz de linea de comandos para vue
* [Vue-template PWA](https://github.com/vuejs-templates/pwa) - Template para nuestra aplicación, basado en Progressive Web App
* [PostCSS](http://postcss.org/) - Herramienta para transformar CSS, y utilizar el CSS del futuro

## Author
* [José Manuel Rosa Moncayo](https://twitter.com/jmanuel_rosa)

## License
Este proyecto esta licenciado bajo licencia __MIT__, si desea saber más, visite el fichero LICENSE