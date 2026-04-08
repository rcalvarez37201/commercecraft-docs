---
description: Guia tecnica de frontend con pasos de implementacion, validacion y soporte.
title: B2B register error
---

En la siguiente ruta:

> packages/poc/backend/commerce-commercetools/actionControllers/AccountController.ts

```ts
if (!(error instanceof ExternalError && error.statusCode === 404)) {
  throw error;
}
```

```ts
const isNotFoundError =
  error instanceof ExternalError &&
  (error.statusCode === 404 || (error.statusCode === 503 && error.message?.includes('URI not found')));

if (!isNotFoundError) {
  throw error;
}
```

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
