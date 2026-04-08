---
title: Guia de contribucion editorial
description: Flujo recomendado para crear y validar nuevas guias de documentacion.
tags:
  - backend
  - frontend
---

Esta guia define el flujo recomendado para proponer y publicar cambios en la documentacion.

## Objetivo

Reducir inconsistencias de estilo y mejorar la calidad de las guias nuevas antes de mergear.

## Flujo de contribucion

1. Identificar necesidad y alcance de la mejora.
2. Crear o actualizar la guia usando la [Plantilla base para guias](/reference/plantilla-guia).
3. Completar una revision rapida de estructura y metadatos.
4. Validar localmente el sitio y el script de auditoria.
5. Abrir PR con contexto, impacto y validaciones realizadas.

## Checklist minimo

- El documento incluye `title` y al menos 1 `tag`.
- La guia contiene secciones de la plantilla (o justifica excepciones).
- La guia tiene bloque **Relacionado** con al menos 2 enlaces utiles.
- El comando `pnpm build` finaliza sin errores.
- El comando `pnpm docs:audit` no introduce issues nuevos en los archivos modificados.

## Convenciones de estilo

- Mantener tono directo y accionable.
- Priorizar pasos verificables por otra persona.
- Evitar mezclar idiomas en titulos y navegacion principal.
- Incluir ejemplos de comandos cuando aplique.

## Validacion previa a PR

Ejecuta:

```bash
pnpm build
pnpm docs:audit
```

Si hay errores, corregirlos antes de abrir la PR.

## Relacionado

- [Plantilla base para guias](/reference/plantilla-guia)
- [Glosario de terminos](/reference/glosario)
