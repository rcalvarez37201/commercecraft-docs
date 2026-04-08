# Roadmap de mejoras - Commercecraft Docs

Este documento define mejoras para implementar de forma incremental en la documentación.

## Estado actual

- [x] Copiar rutas de archivo desde la documentación (incluye bloques tipo cita).
- [x] Copiar comandos en bloques de código (`bash`, `sh`, `ts`, `js`) (resuelto con copy nativo de Starlight, sin duplicar botones).
- [x] Plantilla base para guías (3 guías migradas + plantilla reusable).

---

## Fase 1 - Usabilidad inmediata (quick wins)

### 1) Copiar comandos
- **Objetivo:** permitir copiar comandos y fragmentos de terminal con un click.
- **Alcance inicial:**
  - Botón `Copiar` en bloques de código de terminal.
  - Feedback visual (`Copiado` / `Error`).
- **Criterio de aceptación:**
  - El usuario copia correctamente comandos en al menos 5 páginas distintas.

### 2) Plantilla base para guías
- **Objetivo:** homogeneizar estructura y reducir ambiguedad.
- **Plantilla sugerida:**
  - Objetivo
  - Prerrequisitos
  - Pasos
  - Validación
  - Rollback
  - Errores comunes
- **Criterio de aceptación:**
  - Al menos 3 guías migradas a la plantilla.
- **Estado:** completado.

### 3) Definir `site` en Astro config
- **Objetivo:** habilitar sitemap correctamente y mejorar base SEO/navegación.
- **Criterio de aceptación:**
  - Build sin warning de sitemap.
- **Estado:** completado.

---

## Fase 2 - Navegación y encontrabilidad

### 4) Normalización de nombres y slugs
- **Objetivo:** corregir inconsistencias y typos (ej. `final-adjusment`).
- **Criterio de aceptación:**
  - Lista de slugs normalizada y redirecciones donde aplique.
- **Estado:** completado.

### 5) Tags por dominio
- **Objetivo:** mejorar búsqueda/filtros por tema.
- **Tags base sugeridos:**
  - `frontend`, `backend`, `b2c`, `b2b`, `ai`, `analytics`, `checkout`
- **Criterio de aceptación:**
  - Cada artículo nuevo incluye al menos 1 tag.
- **Estado:** completado.

### 6) Bloque "Relacionado" al final de cada guía
- **Objetivo:** facilitar continuidad de lectura.
- **Criterio de aceptación:**
  - Todas las guías clave enlazan al menos 2 artículos relacionados.
- **Estado:** completado.

---

## Fase 3 - Calidad operativa

### 7) Checklist final por guía
- **Objetivo:** que cualquier persona valide cambios sin depender de memoria.
- **Criterio de aceptación:**
  - Cada guía técnica tiene checklist de verificación.
- **Estado:** completado.

### 8) Auditoría automática de docs
- **Objetivo:** detectar rápido:
  - títulos repetidos,
  - slugs inconsistentes,
  - secciones faltantes de plantilla.
- **Criterio de aceptación:**
  - Script ejecutable por `pnpm` con reporte en consola.
- **Estado:** completado.

### 9) Glosario de términos
- **Objetivo:** unificar lenguaje (ES/EN) y evitar duplicidad semántica.
- **Criterio de aceptación:**
  - Documento de glosario enlazado desde la home de docs.
- **Estado:** completado.

---

## Fase 4 - Mejora continua

### 10) Enlazar referencias clave desde sidebar
- **Objetivo:** mejorar descubrimiento de contenido sin depender de la home.
- **Criterio de aceptación:**
  - `Reference` visible en sidebar con enlaces a glosario y plantilla.
- **Estado:** completado.

### 11) Normalización de idioma en navegación
- **Objetivo:** mantener consistencia de idioma en UI principal de docs.
- **Criterio de aceptación:**
  - Sidebar y etiquetas principales sin mezcla innecesaria ES/EN.
- **Estado:** completado.

### 12) Validación de metadatos SEO mínimos
- **Objetivo:** asegurar consistencia de `title` y `description` en documentos.
- **Criterio de aceptación:**
  - Auditoría automática reporta faltantes de metadatos obligatorios.
- **Estado:** completado.

### 13) Guía de contribución editorial
- **Objetivo:** estandarizar cómo proponer, escribir y validar nuevas guías para reducir retrabajo.
- **Criterio de aceptación:**
  - Existe una guía en `Reference` con flujo de contribución y checklist mínimo.
- **Estado:** completado.

### 14) Cobertura SEO en documentos de referencia
- **Objetivo:** reducir faltantes de metadatos en la sección `Reference` para mejorar consistencia editorial.
- **Criterio de aceptación:**
  - Todos los documentos de `Reference` tienen `description` en frontmatter.
- **Estado:** completado.

### 15) Cobertura SEO en páginas raíz
- **Objetivo:** completar metadatos mínimos en páginas raíz para mejorar indexación y consistencia.
- **Criterio de aceptación:**
  - `development`, `keys` y `project-setup-by-luciano` incluyen `description`.
- **Estado:** completado.

### 16) Cobertura SEO en secciones principales de desarrollo
- **Objetivo:** reducir faltantes de `description` en hubs principales de `development`.
- **Criterio de aceptación:**
  - `development/ai`, `development/checkout-config`, `development/languages` y `development/scraping/scraping` incluyen `description`.
- **Estado:** completado.

### 17) Cobertura SEO en guías backend
- **Objetivo:** eliminar faltantes de `description` en documentación de backend.
- **Criterio de aceptación:**
  - Todas las guías bajo `development/backend` incluyen `description`.
- **Estado:** completado.

### 18) Cobertura SEO en guías frontend
- **Objetivo:** eliminar faltantes de `description` en documentación de frontend.
- **Criterio de aceptación:**
  - Todas las guías bajo `development/frontend` incluyen `description`.
- **Estado:** completado.

### 19) Cobertura de plantilla en guías de desarrollo
- **Objetivo:** homogeneizar estructura mínima de guías técnicas de `development`.
- **Criterio de aceptación:**
  - Todas las guías auditadas de `development` incluyen: `Objetivo`, `Prerrequisitos`, `Pasos`, `Validación`, `Rollback` y `Errores comunes`.
- **Estado:** completado.

---

## Plan de ejecución recomendado

1. Fase 1 completa.
2. Fase 2 en paralelo con mantenimiento de contenido.
3. Fase 3 tras estabilizar estructura.

---

## Notas

- Priorizar siempre cambios que reduzcan tiempo de onboarding.
- Evitar cambios masivos de una sola vez en slugs sin plan de redirecciones.
- Mantener este archivo como fuente de verdad del progreso.
