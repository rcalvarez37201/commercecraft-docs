---
title: Ajustes finales
tags:
  - frontend
  - b2b
---

1. Eliminar el atributo suffix en las imagenes.
2. Navbar: Ajustar o eliminar texto en el banner.
3. Título en la pestaña del navegador.
4. Icono en la pestaña del navegador.
5. Font family.
6. Quitar slider en el cart overlay.
7. Agregar el logo en todas las secciones de la cuenta en las páginas dinámicas(Login, Register, etc.).
8. Agregar el Logo en el Header (headers and headers checkout).
9. GA (Google Analytics).
10. Ajustar el límite para las categorías.
11. Ajustar auth layout.
12. Ajustar quick order.
13. Ajustar clear cart.


### Eliminar el atributo suffix en las imagenes.

Buscar en el proyecto los "suffix=" y eliminarlos, debido a que por problemas con dicho atributo no cargan las imágenes

### Navbar: Ajustar o eliminar texto en el banner.

A partir de la definición visual, si el banner que se encuentra arriba del header lleva texto, modificarlo, en caso de no llevarlo eliminar dicho texto.

Ir a el path:

> organisms/announcement-bar/index.tsx 

y eliminar la línea 22 que con tiene:

```ts
  <p className="text-14 text-white">{textBar}</p>
```

### Título en la pestaña del navegador.

Buscar en la sitio oficial, dentro del inspeccionar elementos, el contenido de la etiqueta `<title>`, copiarlo y dentro del studio, en el site builder y dinamics pages, cambiar en el SEO todos los títulos.

También puedes visitar el [siguiente enlace](/development/frontend/b2c/title) para más detalles.

### Icono en la pestaña del navegador.

Aquí tenemos varias alternativas:
* Ir a inspeccionar elementos (click derecho en el navegador del sitio oficial, penúltima opción), buscar el favicon.ico, favicon.svg
* En el navegador tocar F12 o Inspeccionar (click derecho en el navegador, última opción), ir a Network y buscar el favicon o icon (el nombre puede cambiar a otro que no sean los dos anteriores).
* Puedes buscar en la siguiente url "https://brandfetch.com/" y poner el nombre de la empresa y te puede salir su logo, favicon y otros datos.

También puedes visitar el [siguiente enlace](/development/frontend/b2c/favicon) para más detalles.

### Font family.

1. Vamos a inspeccionar en el navegador y damos click en cualquier texto y en la parte de "cumputed" revisar el font-family.
2. Una vez ya identificamos el fontfamily lo guardamos que ese va a ser el identificador de la fuente de letra
3. Después vamos a network y buscamos el primer font, lo descargamos haciendo doble click en el.
3. Una vez descargado, lo copiamos en la carpeta "fonts", con el mismo nombre.
4. Vamos a la carpeta "styles/global/typography.css" y copiamos el siguiente código:
```css
@font-face {
  font-family: 'FFDINWebPro / identificador fontfamily';
  src: url('../fonts/DINPro-Regular.woff2 / dirección del archivo') format('woff2 / extensión del archivo');
  font-weight: normal;
  font-style: italic;
}
```
5. Después vamos al archivo "tailwindcss.config.js" y reemplazamos en la línea 51 - 53 (fontfamily)
```js
fontFamily: {
  body: ['FFDINWebPro / identificador', 'cursive'],
  heading: ['FFDINWebPro / identificador', 'cursive'],
},
```

Con estos pasos debe cambiar la fuente de la web.

### Quitar slider en el cart overlay.

Nos dirigimos a la siguiente ruta:

> packages/poc/frontend/src/components/molecules/added-to-cart-modal

quitar la línea 23, o buscar donde se encuentre:
```tsx
 <FrequentlyBoughtContainer sliderProducts={sliderProducts} />
```
Luego eliminar las variables o importaciones asociadas para mantener la limpieza del código.


### Agregar el logo en todas las secciones de la cuenta en las páginas dinámicas(Login, Register, etc.).

Dentro del studio, acceder a vista de login, register, etc. **(En Dynamics Pages)** y cambiar el logo por el del proyecto en cuestión.

### Agregar el Logo en el Header (headers and headers checkout).

Lo mismo que el paso anterior pero en **Templates/Components**, **Group/Header** y **Headers Checkout**.

### GA (Google Analytics).

Esta tarea se encuentra detallada en el artículo [Google Analytics](/development/frontend/google-analytics)

### Ajustar el límite para las categorías.

Ir a a siguiente ruta dentro del proyecto: 

> packages\poc\frontend\src\lib\hooks\useCategories\index.ts

```tsx
export const useCategories = () => {
  const { data: categoriesData, mutate: mutateCategories } = useSWR('/action/product/queryCategories?format=tree', () =>
    sdk.composableCommerce.product.queryCategories({ format: 'tree', limit: 99 }),
  );
```

Cambiar el límite de 99 por 500.


### Ajustar auth layout.

Remplazar el código existente por el siguiente en la ruta: 

> packages/poc/frontend/src/components/organisms/authentication/layouts/auth-layout.tsx

```tsx
'use client';

import { PropsWithChildren } from 'react';
import { AuthLayoutProps } from '../types';
import HeaderLogo from '../../header/logo';

const AuthLayout = ({ logo, logoLink, children }: PropsWithChildren<AuthLayoutProps>) => {
  return (
    <div className="grid min-h-screen">
      <div className="relative md:col-span-1">
        <div className="grid w-full content-center border-b border-neutral-400 px-4 py-5 md:px-6 lg:absolute lg:border-none lg:px-12 lg:py-7">
          <div className="w-[170px] lg:w-[215px]">
            <HeaderLogo logo={logo} logoLink={logoLink} />
          </div>
        </div>

        <div className="flex size-full flex-col gap-6 px-4 pt-9 md:mx-auto md:w-[372px] md:px-0 md:pt-16 lg:grid lg:w-[452px] lg:content-center lg:gap-0 lg:px-0 lg:py-20">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
```

### Ajustar quick order.

Ir a la siguiente ruta: 

> packages/poc/frontend/src/components/organisms/quick-order/quick-order-desktop/index.tsx

Dentro de este fichero es cambiar el Link por div.
```tsx
<div className="cursor-pointer whitespace-nowrap p-1 text-gray-700 hover:underline" onClick={onOpen}>
```

### Ajustar clear cart.

Nos dirigimos a la siguiente ruta:

> packages\poc\frontend\src\lib\tastics\thank-you\components\thank-you-client-wrapper\index.tsx

Dentro agregamos el siguiente código:

```tsx
const { selectedBusinessUnit, selectedStore } = useStoreAndBusinessUnits();

const { clearCart } = useCart(selectedBusinessUnit?.key, selectedStore?.key);
```

Importamos (useStoreAndBusinessUnits y useCart).

Luego agregamos el useEffect:

```tsx
useEffect(() => {

    clearCart();

  }, []);
```
