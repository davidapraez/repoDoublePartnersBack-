## API de Gestión de Tickets

Esta API desarrollada en Node.js permite la creación, eliminación, edición y recuperación de tickets, con funcionalidades de paginación y filtrado. Los tickets tienen un ID único, un usuario asociado, fechas de creación y actualización, y un estado que puede ser 'abierto' o 'cerrado'.

## Requisitos Previos

Antes de ejecutar esta API, necesitarás:

Node.js
npm (viene incluido con Node.js)
Acceso a MongoDB Atlas (o tu base de datos MongoDB preferida)
Configuración e Instalación
Clonar el Repositorio:
Clona el repositorio a tu máquina local usando git. Abre tu terminal y ejecuta:

bash
Copy code
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_DIRECTORIO_DEL_REPOSITORIO>
Instalar Dependencias:
Dentro del directorio del proyecto, ejecuta el siguiente comando para instalar las dependencias necesarias:

Copy code
npm install
Configuración de la Base de Datos:

Asegúrate de tener una cuenta en MongoDB Atlas y de haber creado un cluster.
Obtiene la cadena de conexión de tu cluster en MongoDB Atlas.
Configura las variables de entorno necesarias en tu proyecto (puedes usar un archivo .env en tu directorio local) para incluir la cadena de conexión de MongoDB.
Ejecución del Proyecto
Para iniciar el servidor, ejecuta en tu terminal:

sql
Copy code
npm start
Esto iniciará la API en http://localhost:3000, a menos que hayas configurado un puerto diferente.

Uso de la API
La API tiene los siguientes endpoints:

GET /tickets: Obtiene una lista de todos los tickets.
POST /tickets: Crea un nuevo ticket.
PUT /tickets/:id: Actualiza un ticket existente por su ID.
DELETE /tickets/:id: Elimina un ticket por su ID.
Puedes probar estos endpoints utilizando herramientas como Postman o cURL, enviando las solicitudes correspondientes a tu servidor local.

## Notas Adicionales

Si realizas cambios en el código, el servidor deberá reiniciarse para reflejar esos cambios.
Asegúrate de que las configuraciones de seguridad en MongoDB Atlas permitan las conexiones desde tu entorno de desarrollo local.
