---
description: Guia tecnica de frontend con pasos de implementacion, validacion y soporte.
title: Implementar selectores de variantes dependientes de otro atributo
---

Primer paso agregar  las variantes al ProductDetails componente en el archivo:

> lib/tastics/product-details/component/product-datails-mapper.tsx

Agregar la siguiente línea:

<img src="/multivariant/multivariant1.png" alt="Variantes Múltiples 1" />

Se debe agregar el type en la linea 111, en la siguiente ruta:
 
> lib/tastics/product-details/types/index.tsx 

<img src="/multivariant/multivariant2.png" alt="Variantes Múltiples 2" />

Luego modificaremos los types de ColorVariantsProps y SpecsVariantsProps en el mismo archivo y le agregaremos:

```ts
variants: Variant[];   
product: Product;
```
Quedando así: 

<img src="/multivariant/multivariant3.png" alt="Variantes Múltiples 3" />

Luego les pasamos los campos en el archivo `main-info`:

```ts
{currentSpecs && currentColor && product.specs && (
          <SpecsVariants
            currentSpecs={currentSpecs}
            currentColor={currentColor}
            specs={product.specs}
            onChangeSpecs={(value) => onChangeVariant('paymentMethod', value)}
            variants={variants}
            product={product}
          />
        )} 

{currentColor && currentSpecs && product.colors && (
          <ColoredVariants
            currentColor={currentColor}
            currentSpecs={currentSpecs}
            colors={product.colors}
            onChangeColor={(value) => onChangeVariant('colorCode', value)}
            variants={variants}
            product={product}
          />
        )}
```

Con esto listo entraremos al componente colorvariant por ejemplo y lo modificaremos de esta forma:

<img src="/multivariant/multivariant4.png" alt="Variantes Múltiples 4" />

En esta línea:

```ts
const colorOptions = variants
    .filter((e) => e.attributes?.paymentMethod === currentSpecs.value)
    ?.map(
      (e) =>
        ({
          label: e.attributes?.colorName,
          value: e.attributes?.colorCode,
        }) as Attribute,
    );
```

Modificaremos y filtraremos basados en el atributo que tendremos en cuenta en este caso es spec que lo mapeo desde paymentMethod asi te mostrara todos los colores que tengan el attributo igual a la variante seleccionada, se debe realizar algo similar para el specvariant  lo que invirtiendo el filtrado.

```ts
 const specsOptions = variants
    .filter((e) => e.attributes?.colorCode === currentColor.value)
    ?.map(
      (e) =>
        ({
          label: e.attributes?.paymentMethod,
          value: e.attributes?.paymentMethod,
        }) as Attribute,
    );
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
