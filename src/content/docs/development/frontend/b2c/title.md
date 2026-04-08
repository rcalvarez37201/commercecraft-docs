---
description: Guia tecnica de frontend con pasos de implementacion, validacion y soporte.
title: Extracción y configuración del Title.
---

## Objetivo

Extraer el `title` desde la web original y configurarlo en Studio para Home y páginas dinámicas.

## Prerrequisitos

- Acceso a la web original.
- Acceso al Studio del proyecto.
- Permisos para editar SEO y Page rules.

## Pasos

### 1) Extraer el title en la web original

1. Abrir la página a la que se desea extraer el título.
2. Hacer clic derecho en cualquier parte de la página web que estés viendo.
3. Seleccionar la opción **Inspeccionar** o **Inspeccionar elemento** del menú contextual, o usar  un atajo de teclado: Ctrl + Shift + I o F12
4. Ir a la opción Elements, desglosar la etiqueta <*Head*>.
5. Buscar la etiqueta <*title*>:
    <img src="/title/titleImg.png" alt="Title" />
6. Copiar su contenido.

### 2) Configurar el title en Studio

1. Acceder a la url del Studio correspondiente al proyecto en curso.
2. Loguearse en el Studio.
3. Ir a la opción **Site builder**.
4. Nos ponemos sobre la opción **Home**.
5. Click sobre el ícono **settings**.

    <img src="/title/config1.png" alt="Configuration 1" />
6. Ir a la opción **SEO**.

    <img src="/title/config2.png" alt="Configuration 2" />

7. En la opción **Title**, eliminar el que viene por defecto y copiar el que habíamos extraído.
8. Click en la opción **Save**.
9. Luego regresamos al menú del Studio, y vamos a la opción **Dynamic pages**.

    <img src="/title/config3.png" alt="Configuration 3" />

10. Seleccionamos el primer elemento de la lista.
11.  Nos ponemos sobre la opción **"Page rules"**.
12.  Click sobre el ícono **settings**.
    <img src="/title/config4.png" alt="Configuration 4" />
13. Ejecutar los pasos 6, 7 y 8.
14. Luego ejecutar los pasos 11, 12 y 13 en todos los elementos de la lista del paso 9.

## Validación

- Home muestra el título configurado en `<title>`.
- Las páginas dinámicas reflejan el título esperado.

## Rollback

- Restaurar el título anterior en SEO de Home.
- Repetir en las reglas de página modificadas.

## Errores comunes

- **Cambios no visibles:** limpiar caché o esperar propagación.
- **Sólo cambia Home:** faltó configurar Dynamic pages.

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
