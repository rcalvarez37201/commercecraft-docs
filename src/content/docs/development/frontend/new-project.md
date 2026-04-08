---
title: Iniciando un proyecto
---

Lo primero es recibir la invitación al proyecto en el cual vamos a trabajar, esta "invitación" se realiza vía correo, la cual cuenta de 3 partes:

- Invitación para el repositorio del proyecto en github: Aquí recibimos el acceso al repositorio del proyecto para poder clonarlo y posteriormente manejar el repositorio.
- Invitación al studio: Al aceptar nos pedirá que creemos nuestra contraseña, una vez creada podemos acceder al studio. En el studio es donde se desarrolla gran parte del proyecto, la mayoría de componentes que se crean se agregan aquí.
- Invitación al Merchant Center (MC): Aquí a través de nuestras credenciales accedemos al MC para poder visualizar los productos, entre otras informaciones, esto más adelante también nos permite trabajar con el entregable del proyecto.

Una vez que tenemos el repositorio, y las cuentas creadas en el MC y Studio, podemos continuar:

- Los primero es clonar el proyecto, nos ubicamos en la carpeta en la que vamos a trabajar, abrimos la terminal (consola) y ejecutamos el comando "git clone <url del repositorio>.  A tener en cuenta si no nos deja clonar una de las causas puede ser que necesitemos incluir el token dentro de la url del repositorio, el token lo podemos obtener de la siguiente forma. Dentro de tu perfil de github ir a Settings/ Developer Settings/ Personal Access Token / Tokens (classic), una vez ahí damos a la opción de "Generate new token (classic)", una vez generado guardamos ese token pues lo usaremos de ahora en adelante para todos los proyectos que clonemos. El siguiente paso es reestructurar la línea de comando que utilizamos antes para clonar, la cual quedaría de la siguiente forma: git clone https://<token que generamos>@github.com/<nombre del repositorio>, de esta forma clonamos el proyecto. En caso de que esta vía no resuelva el problema, revisar la conexión o vpn.
- Una vez clonado el proyecto, procedemos a inicializarlo, para ello nos ubicamos dentro de la carpeta del proyecto, levantamos la terminar o nos movemos desde la terminar que utilizamos para clonar el proyecto hasta el mismo y ejecutamos el comando:

```js
frontastic init
```
Si estamos dentro de la carpeta del proyecto nos debe reconocer el nombre del mismo y ponerlo por defecto, este nombre no se debe cambiar para evitar cualquier tipo de conflicto, al presionar enter nos pedirá que introduzcamos el token api del proyecto. Este token se encuentra iniciando el studio, dentro accedemos a Account/ Profile y copiamos el Api Token, este token lo copiamos en la terminal y en unos breves segundos nos debe confirmar que estamos listos para instalar nuestras dependencias.

Lo siguiente es ejecutar el comando:

```js
frontastic install
```

Este comando inicia la instalación de las dependencias del proyecto, este proceso puede durar más o menos en dependencia de la conexión con que se cuente, una vez concluya el proceso podemos abrir el proyecto. Una vez levantando el proyecto en nuestro IDE de desarrollo ejecutamos el comando:

```js
frontastic run
```

Este comando iniciará el proyecto en el puerto local 3000.

Con estos pasos ya podemos empezar a trabajar en el proyecto 😊.

## Relacionado

- [Preparando el entorno de desarrollo](/development/frontend/development-environment)
- [Agregar Google Analytics al proyecto](/development/frontend/google-analytics)