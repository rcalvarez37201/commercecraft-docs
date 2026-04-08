---
description: Guia tecnica de frontend con pasos de implementacion, validacion y soporte.
title: Limpiar el carrito de compras
---

Se esta generando un problema que aún después de terminar el proceso de compra, no se limpia el carrito de la compra, para ello, vamos a ajustar lo siguiente:

Nos dirigimos a la siguiente ruta:

> packages\poc\frontend\src\lib\tastics\thank-you\components\thank-you-client-wrapper\index.tsx

Dentro agregamos el siguiente código:

```ts
const { selectedBusinessUnit, selectedStore } = useStoreAndBusinessUnits();

 const { clearCart } = useCart(selectedBusinessUnit?.key, selectedStore?.key);

importamos (useStoreAndBusinessUnits y useCart)

Luego agregamos el useEffect:

useEffect(() => {

    clearCart();

  }, []);
```

Quedando nuestro archivo como se muestra en la imagen:

<img src="/cart/clean-cart.png" alt="Limpiando el carrito de compras" />

 Con estos pasos garantizamos limpiar el carrito de compras.

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
