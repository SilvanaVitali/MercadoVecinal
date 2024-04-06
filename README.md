# Mercado Vecinal
## Descripción del Proyecto
Sitio web que consiste en un sistema de Gestión de Mercado Vecinal utilizando sistema de gestión Postgres y consultas a base de datos.

## Funcionalidades del Sistema
* Creación de cuenta en el sitio e inicio de sesión.
* Almacenamiento de información en base de datos SQL.
* La pagina muestra un listado de los productos disponibles (con stock mayor a 0)
* Contiene NavBar donde usuario puede registrarse o iniciar sesión.
* Se puede publicar un producto para la venta con precio, cantidad y descripción, la carga de foto del producto no está implementada.
* Usuario puede revisar todos los productos que ha puesto a la venta y editarlos.
* Se puede ver el detalle de cada producto que de la opción de reservar y validar el stock disponible. 
* Las funcionalidades descritas están protegidas para que sean realizadas sólo por usuarios registrados y autentificados correctamente. 

## Estado del proyecto
Terminado

## Instrucciones de instalación
* Descargar el proyecto y luego descomprimirlo.
* Abrir proyecto en Visual Studio Code.
* Ejecutar npm install desde la terminal.
* Configurar variables de entorno en archivo .env en la raíz del proyecto con el siguiente contenido:
        DB_NAME='nombre_db’
        DB_USER='usuario_postgres'
        DB_PASS='contraseña'
        SECRET_KEY='llavesecreta'
* Iniciar servidor ejecutando comando nodemon app.js en terminal.

## Librerías utilizadas
    "axios": "^1.4.0",
    "bcrypt": "^5.1.1",
    "bootstrap": "^5.3.1",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-handlebars": "^7.1.2",
    "jquery": "^3.7.0",
    "jquey": "0.0.1-security",
    "jsonwebtoken": "^9.0.1",
    "pg": "^8.11.3",
    "sequelize": "^6.32.1",
    "toastr": "^2.1.4"

## Información adicional
Datos sesión de prueba: 
```
Email: prueba@gmail.com
Password: prueba
```

## Proyecto desarrollador por
Silvana Vitali Astorga