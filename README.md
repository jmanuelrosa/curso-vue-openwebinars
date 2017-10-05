# Curso sobre Vue para OpenWebinars

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

## Proyectos

### __My-Tasks__
Gestión de tareas, o Todo list personal. Basado en componentes, como define la documentación oficial, sin CLI, y demás tools que nos provee __Vue__.

### __Codit__
A new way to discover Github! Busca y encuentra al usuario que desees en Github, y obten toda la información relevante acerca de esta persona.

## Clases

* __Introducción__
  
  1. Vue.js 
  2. Comunidad y ecosistema 
  3. ¿Componentes?  
  4. Entorno de desarrollo y CLI (Scaffolding) 
  5. Nuestro primer componente 

* __Ecmascript__
  
  6. Nuevas features
  7. Babel 

* __Componentes en VueJS__
  
  8. [JSX, pero para Vue](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/08-jsx-per-para-vue)
  9. [Data y Props](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/09-data-y-props)
  10. [Computed properties y watchers](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/10-computed-properties-y-watchers)
  11. [Ciclo de vida](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/11-ciclo-de-vida)
  12. [Comunicación entre componentes](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/12-comunicacion-entre-componentes)
  13. [Bus de eventos__](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/13-bus-de-eventos)
  14. [Componentes asíncronos](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/14-componentes-asincronos)

* __Estilizando nuestros componentes__
  
  15. [Sintaxis en nuestros templates](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/15-sintaxis-en-nuestros-templates)
  16. [HTML o Pug](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/16-html-o-pug)
  17. [CSS, Sass o PostCSS](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/17-css-sass-o-post-css)
  18. [Bindings](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/18-bindings)
  19. [Directivas](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/19-directivas)
  20. [Filtros](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/20-filtros)
  21. [Transiciones](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/21-transiciones)

* __Servicios externos__
  
  22. [Fetch en nuestros componentes](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/22-fetch-en-nuestros-componentes)
  23. [Vitaminando nuestras peticiones con Axios](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/23-vitaminando-nuestras-peticiones-con-axios)

* __Rutas con Vue.js__
  
  24. [Vue-router](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/24-vue-router)
  25. [Definición de rutas](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/25-definicion-de-rutas)
  26. [Heredar propiedades](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/26-heredar-propiedades)
  27. [Hooks](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/27-hooks)
  28. [Redirecciones](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/28-redirecciones)
  29. [Navegación desde nuestros componentes](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/29-navegacion-desde-nuestros-componentes)

* __Testeando nuestros components__
  
  30. Karma, nuestro test runner
  31. [Test unitarios de nuestros componentes](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/31-test-unitarios-de-nuestros-componentes)
  32. [End-to-end con Nightwatch](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/32-end-to-end-con-nightwatch)

* __Flux mediante Vuex__
  
  33. Introducción al patrón Flux
  34. ¿Vuex?
  35. [State y Getters](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/35-state-y-getters)
  36. [Mutaciones y Acciones](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/36-mutaciones-y-acciones)
  37. [Módulos y organización](https://github.com/jmanuelrosa/curso-vue-openwebinars/tree/37-modulos-y-organizacion)

* __Producción__
  
  38. Vamos a generar nuestro build !

* __Solucionando el SEO desde el servidor__
  
  39. ¿Que es SSR y porque es necesario?
  40. ¿Cómo lo implementariamos?

* __Nuxt.js y otros frameworks__

## Author
* [José Manuel Rosa Moncayo](https://twitter.com/jmanuel_rosa)

## License
Este proyecto esta licenciado bajo licencia __MIT__, si desea saber más, visite el fichero LICENSE