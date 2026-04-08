---
title: Ajustes Finales
tags:
  - frontend
  - b2c
---

Se deben tener en cuenta los siguientes pasos para realizar los ajustes finales del proyecto.

1. Ajustar Wishlist
2. Ajustar Cart
3. Eliminar el suffix de las imágenes
4. Navbar: ajustar o eliminar el texto en el banner
5. Eliminar el selector de idiomas del Banner si es solo uno.
6. Icono en la pestaña del navegador
7. Título en la pestaña del navegador
8. Font family
9. Quitar slider en el cart overlay
10. Agregar google analytics
11. Ajustar el límite para las categorías

### Ajustar Wishlist y Cart

### Eliminar el suffix de las imágenes

En nuestro editor de código ir a la sección del buscador de archivos, al lado del Explorer como se muestra en la imagen:

<img src="/final-adjusment/search.png" alt="Search" />

Luego escribimos en el buscador la palabra **"suffix="** como se muestra en la imagen

<img src="/final-adjusment/search2.png" alt="Search 2" />

Y eliminamos todas las instancias en todos los archivos que la encontremos.

Esta solución se explica en el articulo: [Atributo suffix en imágenes](/development/frontend/b2c/suffix)

### Navbar: ajustar o eliminar el texto en el banner

Para acceder al **Banner**, vamos a la siguiente ruta:

> packages\poc\frontend\frontastic\tastics\header\index.tsx

en la línea 88 si el proyecto no lo requiere solamente debemos eliminar el componente de **"AnnouncementBar"**.

```ts
<AnnouncementBar {...announcementBarData} />
```

En caso de tener que editarlo ir a la siguiente ruta:

> frontend\components\commercetools-ui\organisms\announcement-bar

### Eliminar el selector de idiomas del Banner si es solo uno.

Para quitar el selector de idiomas cuando este la pantalla en mobile, en el drawner o barra lateral ir a:

> organisms/header/header-navigation/header-navigation-movile/content/mobile-menu-footer.tsx.

lo encontramos en la línea 98

```ts
<div className="p-16" ref={marketButtonRef}>
  <MarketButtonMobile menuTop={languageMenuTop} />
</div>
```

eliminar todas las importaciones , variables de esta sección.

### Icono en la pestaña del navegador

Para cambiar el icono en la pestaña del navegador podemos ir a la url del sitio oficial y agregarle favicon.ico o favicon.svg y descargarlo. Luego en el proyecto vamos a public y sustituimos el favicon que trae la plantilla por el que descargamos.

Esta es otra vía por la que podemos acceder al favicon del sitio oficial, otra forma puede ser como se explica en el artículo [Extracción y configuración del favicon.ico](/development/frontend/b2c/favicon)

### Título en la pestaña del navegador

Aplicar los siguientes pasos:

- Extraer el título de el sitio oficial.
- Ir al Studio.
- Dentro del **Site Builder** y **Dynamics Pages** modificar todas las vistas.
- Acceder a la configuración de cada vista y modificar el título en la sección de **SEO**.

Los pasos más detallados se pueden encontrar en el artículo [Extracción y configuración del Title](/development/frontend/b2c/title)

### Font family

1. Vamos a inspeccionar en el navegador y damos click en cualquier texto y en la parte de **"computed"** revisar el font-family.
2. Una vez ya identificamos el fontfamily lo guardamos que ese va a ser el identificador de la fuente de letra
3. Después vamos a **network** y buscamos el primer font, lo descargamos haciendo doble click en el.
4. Una vez descargado, lo copiamos en la carpeta **"fonts"**, con el mismo nombre.
5. Vamos a la carpeta **"styles/app.css"** y copiamos el siguiente código:

```css
@font-face {
  font-family: 'FFDINWebPro / identificador fontfamily';
  src: url('../fonts/DINPro-Regular.woff2 / dirección del archivo') format('woff2 / extensión del archivo');
  font-weight: normal;
  font-style: italic;
}
```

6. Después vamos al archivo **"tailwindcss.config.js"** y reemplazamos en la línea 51 - 53 **(fontfamily)**

```js
fontFamily: {
  body: ['FFDINWebPro / identificador', 'cursive'],
  heading: ['FFDINWebPro / identificador', 'cursive'],
},
```

Con estos pasos debe cambiar la fuente de la web

### Quitar slider en el cart overlay

En la siguiente ruta:

> packages/poc/frontend/context/add-to-cart-overlay/index.tsx

quitar el div de la línea 137 con todo su contenido:

```ts
<div className={`mt-36 hidden bg-neutral-200 py-24 md:block ${isTouchDevice ? 'px-48' : 'px-96'}`}>
```

luego quitar importaciones y variables que dejan de utilizarce.

### Agregar google analytics

- Acceder a Google Analytics.
- Crear una **Propiedad** y **Código de Seguimiento**.
- Configurar y crear variables de entorno dentro del proyecto.
- Crear componente de **GoogleAnalytics**.
- Integrar **GoogleAnalytics** al **Layout**.

Para ver los detalles de cada paso acceder al artículo: [Google Analytics](/development/frontend/google-analytics)

### Ajustar el límite para las categorías

Acceder a la siguiente ruta:

> /backend/commerce-commercetools/apis/ProductApi.ts

moverse a la línea 178 o a la siguiente sección del código:

```ts
this.queryCategories({ limit: 250, format: CategoryQueryFormat.TREE })
```

Cambiar el límite a **500**.

## Relacionado

- [Atributo suffix en imágenes](/development/frontend/b2c/suffix)
- [Agregar Google Analytics al proyecto](/development/frontend/google-analytics)
