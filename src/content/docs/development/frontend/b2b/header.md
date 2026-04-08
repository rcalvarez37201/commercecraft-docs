---
description: Guia tecnica de frontend con pasos de implementacion, validacion y soporte.
title: Ajustes al header
---

### Principales ajustes de estilo que se realizan al Header

* Modificar el color del backgraound, esto se hace en el siguiente fichero, línea 23:

> packages\poc\frontend\src\components\organisms\header\index.tsx

* Modificar el color del Botón que está al lado del Logo, que abre el drawer, se hace en el siguiente fichero, línea 16:

> \packages\poc\frontend\src\components\organisms\header\navigation-drawer\index.tsx

* Modificar el color del enlace al cart, se hace en el siguiente fichero, línea 21:

> packages\poc\frontend\src\components\organisms\header\cart-link\index.tsx

También en este fichero se modifica el color del ícono del cart en el código siguiente:

```ts
<ShoppingCartIcon className="ml-0 w-6 text-white lg:ml-2 lg:w-5" />
```

* Modificar el color del texto del Quick Order, se hace en el siguiente fichero, línea 35:

> packages/poc/frontend/src/components/organisms/quick-order/quick-order-desktop/index.tsx

* Modificar el color del ícono de la cuenta en modo mobile, se hace en el siguiente fichero, línea 10:

> packages/poc/frontend/src/components/organisms/header/account-link/index.tsx

### Principales ajustes de estilo que se realizan al AnnouncementBar

* Modificar el color del backgraound, esto se hace en el siguiente fichero, línea 21:

> packages/poc/frontend/src/components/organisms/announcement-bar/index.tsx

* Modificar el el color del backgraound de los botones de Mi Account y Selector de Idiomas, esto se hace en el siguiente fichero, línea 13:

> packages/poc/frontend/src/components/molecules/popover/index.tsx

* Modificar el color del texto de My Account, se hace en el siguiente fichero, linea 10 y 14:

> frontend/src/components/organisms/announcement-bar/account-button/button/index.tsx

* Modificar el color del texto del selector de idiomas se hace en el siguiente fichero, linea 12 y 23:

> frontend/src/components/organisms/shipping-and-language/ship-and-language-desktop/flag-button/index.tsx

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
