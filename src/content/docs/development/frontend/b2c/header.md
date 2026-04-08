---
description: Guia tecnica de frontend con pasos de implementacion, validacion y soporte.
title: Ajustes al Header
---

En el caso del **Header** lo primero es modificar el Logo de la web, que se cambia desde el Studio, primeramente lo descargamos de la web original, inspeccionando la página, buscamos el elemento de la imagen y le damos Guardar como...

Una vez tengamos el logo, vamos a la URL del Studio del proyecto en curso y seleccionamos la opción **Templates**, luego seleccionar **Component groups**, luego la opción **Header**, dar en el ícono de **editar**.

<img src="/header/header1.png" alt="Header 1" />

Luego seleccionar el componente **commercetools UI Header**, desglosar la opción **Header Menú**, y en el campo Logo damos editar y ponemos el logo deseado. También debemos hacer esto mismo en la opción siguiente que es el **Header Menú Mobile**.

<img src="/header/header2.png" alt="Header 2" />

Luego modificamos **estilos**, la principal modificación que se hace siempre es cambiar el color de las **categorías**, para esto vamos al fichero siguiente:

> \frontend\components\commercetools-ui\organisms\header\header-navigation\header-navigation-desktop\header-navigation-button\index.tsx

y en el siguiente código se hacen las modificaciones del texto de las categorías:

```ts
const navLinkClassNames = useClassNames([
  'flex border-primary-black py-4 text-[#FF2100] cursor-pointer relative hover:border-b-2',
  show ? 'border-b-2' : '',
]);
```

Para modificar el estilo de las subcategorías sería en el siguiente fichero:

> \frontend\components\commercetools-ui\organisms\header\header-navigation\header-navigation-desktop\menu-dropdown\index.tsx

en la línea 107:

```ts
<Typography className="text-14 text-[#FF2100]">{field.name}</Typography>
```

Si es necesario cambios en el **buscador** del Header se  realizan en el siguiente fichero:

> /frontend/components/commercetools-ui/atoms/search/index.tsx

Para modificar el color del boton de buscar que contiene el icono de la lupita es en la linea 88:

```ts
className={`shrink-0 border-l border-neutral-400 px-16 py-10 transition ${focused ? 'bg-primary-black' : 'bg-white'
```

Otra de las principales modificaciones que se hace en el Header es eliminar el **selector de idiomas** cuando hay uno solo, para esto vamos al siguiente fichero:

> /frontend/frontastic/tastics/header/index.tsx

y eliminamos la siguiente línea:

```ts
<AnnouncementBar {...announcementBarData} />
```

Para eliminar el **selector de idiomas** en la **vista móvil**,  vamos al siguiente fichero:

> \frontend\components\commercetools-ui\organisms\header\header-navigation\header-navigation-mobile\content\mobile-menu-footer.tsx

y eliminamos la siguiente línea:

```ts
<MarketButtonMobile menuTop={languageMenuTop} />
```

Cuando hay más de un idioma no se elimina todo el selector, pero se elimina un texto que incluye que no debe estar en la web final, para esto vamos al siguiente fichero:

> /frontend/components/commercetools-ui/organisms/announcement-bar/index.tsx

y eliminamos el siguiente código:

```ts
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="whitespace-nowrap text-center text-12 leading-loose text-white">
             {previewText.prefix}
          <Link link={target} className="underline underline-offset-2">
             {previewText.middle}
          </Link>
          {previewText.suffix}
        </p>
 </div>
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
