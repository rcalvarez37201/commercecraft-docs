import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const DOCS_ROOT = path.resolve('src/content/docs');
const DOC_EXTENSIONS = new Set(['.md', '.mdx']);
const REQUIRED_TEMPLATE_SECTIONS = [
  'Objetivo',
  'Prerrequisitos',
  'Pasos',
  'Validación',
  'Rollback',
  'Errores comunes',
];
const COMMON_TYPO_SEGMENTS = ['adjusment'];

async function walkDocs(dirPath) {
  const entries = await readdir(dirPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkDocs(fullPath)));
      continue;
    }

    if (!DOC_EXTENSIONS.has(path.extname(entry.name))) {
      continue;
    }

    files.push(fullPath);
  }

  return files;
}

function withoutFrontmatter(content) {
  if (!content.startsWith('---')) {
    return content;
  }

  const end = content.indexOf('\n---', 3);
  if (end === -1) {
    return content;
  }

  return content.slice(end + 4);
}

function parseFrontmatter(content) {
  if (!content.startsWith('---')) {
    return null;
  }

  const end = content.indexOf('\n---', 3);
  if (end === -1) {
    return null;
  }

  return content.slice(3, end);
}

function parseFrontmatterField(frontmatter, field) {
  if (!frontmatter) {
    return null;
  }

  const fieldMatch = frontmatter.match(
    new RegExp(`^\\s*${field}\\s*:\\s*(.+)\\s*$`, 'm')
  );
  if (!fieldMatch) {
    return null;
  }

  return fieldMatch[1].trim().replace(/^['"]|['"]$/g, '');
}

function toRouteSlug(filePath) {
  const relative = path.relative(DOCS_ROOT, filePath).replaceAll('\\', '/');
  const noExt = relative.replace(/\.(md|mdx)$/i, '');
  return noExt.endsWith('/index') ? noExt.slice(0, -('/index'.length)) : noExt;
}

function isKebabSegment(segment) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(segment);
}

function extractMarkdownH2(content) {
  const body = withoutFrontmatter(content);
  return [...body.matchAll(/^##\s+(.+?)\s*$/gm)].map((m) => m[1].trim());
}

function shouldValidateTemplateSections(routeSlug) {
  if (!routeSlug.startsWith('development/')) {
    return false;
  }

  return !routeSlug.endsWith('/index') && routeSlug !== 'development';
}

async function runAudit() {
  const files = await walkDocs(DOCS_ROOT);
  const duplicateTitleMap = new Map();
  const titleIssues = [];
  const slugIssues = [];
  const templateIssues = [];
  const metadataIssues = [];

  for (const filePath of files) {
    const raw = await readFile(filePath, 'utf8');
    const routeSlug = toRouteSlug(filePath);
    const frontmatter = parseFrontmatter(raw);
    const title = parseFrontmatterField(frontmatter, 'title');
    const description = parseFrontmatterField(frontmatter, 'description');

    if (title) {
      const found = duplicateTitleMap.get(title) ?? [];
      found.push(routeSlug || '/');
      duplicateTitleMap.set(title, found);
    }

    const segments = routeSlug.split('/').filter(Boolean);
    for (const segment of segments) {
      if (!isKebabSegment(segment)) {
        slugIssues.push(
          `${routeSlug}: segmento no normalizado "${segment}" (usar kebab-case).`
        );
      }

      for (const typo of COMMON_TYPO_SEGMENTS) {
        if (segment.includes(typo)) {
          slugIssues.push(
            `${routeSlug}: posible typo detectado en slug ("${segment}").`
          );
        }
      }
    }

    if (shouldValidateTemplateSections(routeSlug)) {
      const headings = new Set(extractMarkdownH2(raw));
      const missingSections = REQUIRED_TEMPLATE_SECTIONS.filter(
        (section) => !headings.has(section)
      );

      if (missingSections.length > 0) {
        templateIssues.push(
          `${routeSlug}: faltan secciones -> ${missingSections.join(', ')}`
        );
      }
    }

    const missingMetadata = [];
    if (!title) {
      missingMetadata.push('title');
    }
    if (!description) {
      missingMetadata.push('description');
    }
    if (missingMetadata.length > 0) {
      metadataIssues.push(
        `${routeSlug || '/'}: faltan metadatos -> ${missingMetadata.join(', ')}`
      );
    }
  }

  for (const [title, slugs] of duplicateTitleMap) {
    if (slugs.length > 1) {
      titleIssues.push(`"${title}" aparece en: ${slugs.join(', ')}`);
    }
  }

  const hasIssues =
    titleIssues.length > 0 ||
    slugIssues.length > 0 ||
    templateIssues.length > 0 ||
    metadataIssues.length > 0;

  console.log('\n== Auditoria de documentacion ==');
  console.log(`Archivos analizados: ${files.length}`);

  console.log('\n1) Titulos repetidos');
  if (titleIssues.length === 0) {
    console.log('- OK: sin titulos duplicados');
  } else {
    for (const issue of titleIssues) {
      console.log(`- ${issue}`);
    }
  }

  console.log('\n2) Slugs inconsistentes');
  if (slugIssues.length === 0) {
    console.log('- OK: sin inconsistencias detectadas');
  } else {
    for (const issue of slugIssues) {
      console.log(`- ${issue}`);
    }
  }

  console.log('\n3) Secciones faltantes de plantilla');
  if (templateIssues.length === 0) {
    console.log('- OK: todas las guias cumplen plantilla');
  } else {
    for (const issue of templateIssues) {
      console.log(`- ${issue}`);
    }
  }

  console.log('\n4) Metadatos obligatorios');
  if (metadataIssues.length === 0) {
    console.log('- OK: todos los documentos tienen title y description');
  } else {
    for (const issue of metadataIssues) {
      console.log(`- ${issue}`);
    }
  }

  if (hasIssues) {
    console.log('\nResultado: FAIL (se detectaron problemas)');
    process.exitCode = 1;
    return;
  }

  console.log('\nResultado: OK');
}

runAudit().catch((error) => {
  console.error('Error ejecutando auditoria:', error);
  process.exit(1);
});
