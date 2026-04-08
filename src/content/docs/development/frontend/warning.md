---
description: Guia tecnica de frontend con pasos de implementacion, validacion y soporte.
title: Warnings
---
### B2B

* Error: A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

> packages/poc/frontend/src/app/[locale]/layout.tsx

```ts
  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <body>
        <CookiesProvider>
          <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
          </NextIntlClientProvider>
        </CookiesProvider>
      </body>
    </html>
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
