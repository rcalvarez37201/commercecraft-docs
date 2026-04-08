---
description: Guia tecnica de frontend con pasos de implementacion, validacion y soporte.
title: Ajustes al footer
---

### Modificaciones de textos

El footer viene por defecto con 4 columnas de texto, cada una con un título, para modificar estos textos debemos ir al estudio correspondiente al proyecto, loguearnos e ir a la opción **Templates**, seleccionar  **Component groups**, luego la opción **Footer**, dar en el ícono de **editar**.

<img src="/footer/footer1.png" alt="Footer 1" />

Luego seleccionar el componente **commercetools UI Footer**, desglosar las **Nav Column** y editar los **Header**, si el proyecto tiene más de un lenguaje, se editan además en la opción de **Manage lenguages**.

<img src="/footer/footer2.png" alt="Footer 2" />

Los elementos de cada columna se editan en cada uno en la opción de **editar**, y se añaden igualmente los textos en otros lenguajes.

<img src="/footer/footer3.png" alt="Footer 3" />

### Modificaciones de íconos

Los íconos correspondientes a Redes sociales se modifican desde el estudio, elegir la opción **Templates**, seleccionar **Component groups**, luego la opción **Footer**, dar click en **Editar** y seleccionar **Social Media**, editar los íconos si es necesario.

Para modificar el Logo se hace el mismo proceso anterior y se elige la opción **Logo** en lugar de la opción de Redes sociales.

### Modificaciones de estilos

Las modificaciones de estilos generalmente son cambiar color de fondo y estilos en los textos.

Para modificar el color de fondo se va al fichero:

> \packages\poc\frontend\components\commercetools-ui\organisms\footer\index.tsx

y en la siguiente línea se modifica el **background** para la **vista desktop**:

```ts
<footer aria-labelledby="footer-heading" className="w-full bg-[#111]">
```

para modificar **background** en la **vista móvil** es en la siguiente línea:

```ts
<Accordion
  variant="arrow"
  closedSectionTitle={column.header ?? ''}
  openSectionTitle={column.header}
  buttonClassName="h-48 text-14 font-medium text-neutral-100 bg-white px-12 text-neutral-150"
  iconClassName="text-neutral-100"
>
```

Para modificar tamaños de texto y color es en el fichero:

> \packages\poc\frontend\components\commercetools-ui\organisms\footer\atoms\column.tsx

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
