## V0.2.5

Se han realizado las siguientes correcciones: 
 * Utilizando la nueva API de Graphql se habilita el tarifario dinamico para un mejor rendimiento a la hora de      renderizar la web. Pasa de ser un SVG estático a componentes que se comunican al backend
 
 * De la misma manera se actualiza la portada de la revista en la sección de Sociedad, en vez de tener un elemento SVG en los archivos, esta info viene de la API  de Graphql.

 * Se crea un archivo de docker compose para el despliege de la aplicación en docker

 * Se agrega un context para tener toda la info en un solo lugar y no tener que pasar la data de forma Jerárquica de componentes padres a hijos. Se planea meter otro parche utilizando esta técnica en todo lo que requiere información de las páginas, por ende en el futuro se crearán más contextos para mejorar el rendimiento del blog.


 Para ejecutar el archivo de docker compose escriba `docker compose up -d` para ejecutar el contenedor en el "background", dentro de este tiene instalado una nueva librería para habilitar la actualización de la info, se resetea cada 15 min pero se puede cambiar, editando el archivo `package.json` y estableciendo en el `--cron '<Intervalo deseado>'`


    