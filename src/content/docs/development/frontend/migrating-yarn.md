---
description: Guia tecnica de frontend con pasos de implementacion, validacion y soporte.
title: Migrando a la versión 4.4.1 de yarn
---

**Yarn** es un gestor de dependencias que permite administrar paquetes en proyectos **JavaScript**, Commercetools ha actualizado sus repositorios base por lo que es necesario migrar a la versión 4.4.1 de yarn.

```ts
yarn set version 4.4.1
```

### Requisitos Previos

Antes de proceder con la migración, asegúrate de lo siguiente:

* Tener instalada una versión reciente de Node.js compatible con Yarn 4.4.1 (Node 14.x o superior).
* Asegúrate de que yarn esté instalado globalmente en tu máquina.

Luego, abrir una terminal y ejecutar los siguientes pasos:

* corepack enable
* corepack prepare yarn@4.4.1 --activate 
* yarn --version

Al hacer estos pasos ya debemos tener actualizada la versión de yarn.

Si al hacer estos pasos la versión de yarn no se actualiza correctamente te recomendamos hacer los siguientes pasos:

* Actualizar node a la versión 18.20.4
* Ir hacia la ruta donde está instalado node C:\Users\Dev\AppData\Roaming\nvm\v18.20.4 y eliminar los siguientes archivos:

<img src="/yarn/yarn.png" alt="Migrating Yanrn to version 4.4.1" />

* Ejeucutar en la terminal los siguientes pasos:
* npm install -g yarn@berry
* yarn set version 4.4.1
* yarn --version

Siguiendo estos pasos se debe eliminar cualquier conflicto existente entre versiones de yarn y quedar instalada correctamente la versión 4.4.1

## Objetivo

Define brevemente que resuelve esta guia y cuando aplica.

## Prerrequisitos

- Accesos necesarios.
- Herramientas requeridas.

## Pasos

1. Ejecutar el procedimiento principal descrito en esta guia.
2. Ajustar segun el contexto del proyecto.

## Validación

- Confirmar resultado esperado en entorno objetivo.
- Verificar que no haya errores en consola o logs.

## Rollback

- Revertir cambios realizados en esta guia si el resultado no es el esperado.

## Errores comunes

- Revisar credenciales, variables de entorno y rutas antes de reintentar.
