---
title: Atributo suffix en imágenes dentro del proyecto
---

## Objetivo

Corregir la carga de imágenes eliminando el atributo `suffix` en los componentes que aún lo utilizan.

## Prerrequisitos

- Proyecto frontend disponible en editor (Cursor/VSCode).
- Permisos para modificar código.

## Pasos

Durante el desarrollo del proyecto, se trabajan con imágenes para mostrar producto(s) en:

- PLP (Product List Page)
- PDP (Product Details Page)
- Product Slider
- Product List
- Algolia Search
- Otras secciones y componentes del Proyecto

Por defecto las imágenes no cargan por lo que se debe eliminar el atributo "suffix" de todos los componentes que lo utilicen para visualizar las imágenes.

Podemos utilizar varias vías. Recomendado:

- Desde nuestro editor de código: VSCode, Cursor, etc. Ir a la sección del buscador dentro de los archivos del proyecto y buscar por la siguiente instrucción: "suffix=" y eliminar todas las instancias del mismo dentro de los archivos del proyecto.

Esta es una tarea importante dentro de los [Ajustes Finales del Proyecto](/development/frontend/b2c/final-adjusment).

## Validación

- Las imágenes se visualizan correctamente en PLP, PDP y sliders.
- No hay referencias residuales a `suffix=` en el proyecto.

## Rollback

- Revertir los cambios en archivos afectados (git restore / revert).
- Verificar que el comportamiento anterior se restablece.

## Errores comunes

- **Quedan imágenes sin cargar:** quedaron ocurrencias de `suffix=` sin eliminar.
- **Se rompe un componente:** revisar props esperadas tras remover `suffix`.

Nota: actualmente se trabaja en una solución para evitar este paso; cuando esté lista, se actualizará este artículo.
