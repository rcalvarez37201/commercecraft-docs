---
description: Guia tecnica de frontend con pasos de implementacion, validacion y soporte.
title: Añadir un nuevo componente al proyecto
---

### Creación del schema y obtención de la data del componente

Para añadir un nuevo componente al proyecto debemos tener en cuenta dos pasos:

1. Crear el esquema que se va a cargar posteriormente en el studio para enviar los datos al cliente.
2. Crear el componente que va a contener la definición visual.

En el primer paso nos dirigimos a la carpeta frontastic/tastic dentro de ella se pueden visualizar algunos de los componentes que la plantilla del proyecto crea por defecto,

<img src="/new-component-to-studio/ncts1.png" alt="ncts 1" />

aquí es donde crearemos el esquema de nuestro nuevo componente, el cual va a tener 2 archivos:

1. schema.json - Archivo que contiene el esquema de las propiedades que va a tener el componente en el studio.
2. index.tsx - Archivo que va a contener la definición visual o funcional del componente que va a renderizar.
   Quedando algo como la siguiente imagen:

<img src="/new-component-to-studio/ncts2.png" alt="ncts 2" />

El archivo schema.json como su nombre indica es el esquema o modelo que va a tener nuestro componente, aquí se definen la estructura, propiedades, como vamos a identificarlo posteriormente en el studio, etc.

### Estructura del archivo schema.json

Este archivo esta compuesto por los siguientes atributos:

- tasticType: identificador del componente.
- name: nombre con el que vamos a identificar al componente en el studio.
- category: categoría donde se ubica dicho componente en el studio.
- icon: icono que representa al componente en el studio.
- schema: esquema del componente, propiedades y valores.

```json
{
  "tasticType": "commercetools/ui/category-slider",
  "name": "Commercetools UI Category Slider",
  "category": "Content",
  "icon": "card_giftcard",
  "schema": []
}
```

Una vez definido, los atributos del componente, dentro del atributo **schema** definiremos las propiedades que utilice dicho componente e hijos en caso de que los tenga, si utilizamos el ejemplo del **category-slider**, se define cada **tile** que pueda contener teniendo la siguiente definición:

```json
"schema": [
    {
      "name": "Tiles",
      "fields": [
        {
          "label": "Tile",
          "field": "tiles",
          "type": "group",
          "min": 1,
          "fields": [
            {
              "label": "Title",
              "field": "title",
              "type": "string"
            },
            {
              "label": "Image",
              "field": "image",
              "type": "media"
            },
            {
              "label": "Target",
              "field": "target",
              "type": "reference"
            }
          ]
        }
      ]
    }
  ]
```

### Tastic index.tsx

Como se explica en el punto 2, en el archivo con extensión .tsx, es donde definimos que componente vamos a cargar, propiedades que posee, etc. Como se muestra un ejemplo en la imagen a continuación.

```ts
'use client';

import React from 'react';
import CategorySlider, { Props as CategorySliderProps } from 'components/commercetools-ui/organisms/category-slider';
import { TasticProps } from '../types';

const CategorySliderTastic = ({ data }: TasticProps<CategorySliderProps>) => {
  return <CategorySlider {...data} />;
};

export default CategorySliderTastic;
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
