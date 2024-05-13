# Requisitos antes de iniciar

Los requisitos necesarios antes de probar la prueba técnica son:

- instalar [Node.js](https://nodejs.org/en/download)
- instalar [PostgreSQL](https://www.postgresql.org/download/)

Cuando se tenga estos 2 software instalados se debe hacer los siguiente:

0. Clonar el repositorio de GitHUB o descargar y extraer el contenido del mismo.
1. Crear un usuario en PostgreSQL llamado `demo` con password `demo`.
2. Crear una base de datos llamada `PruebaSAB`
3. Leer los archivos `README.md` de cada carpeta.

Notas: 
1. Debe crear un archivo `.env` en la carpeta API que incluya los siguientes datos:
 - DATABASE=PruebaSAB
 - USER="demo"
 - PASS="demo"
 - PORT=3000
2. Si no desea crear un nuevo usuario en PostgreSQL puede cambiar esos valores en el archivo `.env` que se de crear en la carpeta `API`
