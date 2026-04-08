// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import commercecraftLogo from './src/assets/commercecraft.svg';
import commercecraftLogoWhite from './src/assets/commercecraft_white.svg';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'My Docs',
          logo: {
            light: commercecraftLogo,
            dark: commercecraftLogoWhite,
            alt: 'Commercecraft',
            replacesTitle: true,
          },
          customCss: [
            './src/styles/global.css',
          ],
          components: {
            Hero: "./src/components/hero.astro",
            Head: "./src/components/head.astro",
          },
        //   social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
          sidebar: [
            {
              label: "Development",
              items: [
                {
                  label: "Getting Started",
                  slug: "development",
                },
                {
                  label: "Backend",
                  items: [
                    {
                      label: "Pasos necesarios para crear un nuevo proyecto",
                      slug: "development/backend/new-project",
                    },
                    {
                      label: "Organizador Personal (Personal Organizer)",
                      slug: "development/backend/personal-organizer",
                    },
                    {
                      label: "CommerceCraft Working Process",
                      slug: "development/backend/commercecraft-working-process",
                    },
                    {
                      label: "Power BI",
                      slug: "development/backend/power-bi",
                    },
                    {
                      label: "Nested Data 1",
                      slug: "development/backend/nested-data-create-product-type",
                    },
                  ],
                },
                {
                  label: "Frontend",
                  items: [
                    {
                      label: "Entorno de desarrollo",
                      slug: "development/frontend/development-environment",
                    },
                    {
                      label: "Iniciando un proyecto",
                      slug: "development/frontend/new-project",
                    },
                    {
                      label: "Google Analytics",
                      slug: "development/frontend/google-analytics",
                    },
                    {
                      label: "Ajustes al proyecto cuando hay más de 250 categorías",
                      slug: "development/frontend/more-categories",
                    },
                    {
                      label: "Migrando a la versión 4.4.1 de yarn",
                      slug: "development/frontend/migrating-yarn",
                    },
                    {
                      label: "Warnings",
                      slug: "development/frontend/warning",
                    },
                    {
                      label: "B2C",
                      items: [
                        {
                          label: "Iconos",
                          slug: "development/frontend/b2c/iconos",
                        },
                        {
                          label: "Proyectos con varios productTypes",
                          slug: "development/frontend/b2c/many-product-types",
                        },
                        {
                          label: "Atributo suffix en imágenes",
                          slug: "development/frontend/b2c/suffix",
                        },
                        {
                          label: "Extracción y configuración del favicon.ico",
                          slug: "development/frontend/b2c/favicon",
                        },
                        {
                          label: "Extracción y configuración del Title",
                          slug: "development/frontend/b2c/title",
                        },
                        {
                          label: "Ajustes al footer",
                          slug: "development/frontend/b2c/footer",
                        },
                        {
                          label: "Ajustes al header",
                          slug: "development/frontend/b2c/header",
                        },
                        {
                          label:
                            "Ajustes de enlaces en el Empty cart y el Empty Wishlist",
                          slug: "development/frontend/b2c/wishlist-cart",
                        },
                        {
                          label: "Añadir un nuevo componente al proyecto",
                          slug: "development/frontend/b2c/new-component-to-studio",
                        },
                        {
                          label: "Configurar el componente Slider",
                          slug: "development/frontend/b2c/slider",
                        },
                        {
                          label: "Ajustes Finales",
                          slug: "development/frontend/b2c/final-adjusment",
                        },
                      ],
                    },
                    {
                      label: "B2B",
                      items: [
                        {
                          label: "Ajustes al header",
                          slug: "development/frontend/b2b/header",
                        },
                        {
                          label: "Varias variantes dependientes de otro atributo",
                          slug: "development/frontend/b2b/multivariant",
                        },
                        {
                          label: "Limpiar el carrito de compras",
                          slug: "development/frontend/b2b/clean-cart",
                        },
                        {
                          label: "Register error",
                          slug: "development/frontend/b2b/register-error",
                        },
                        {
                          label: "Ajustes finales",
                          slug: "development/frontend/b2b/final-adjusment",
                        },
                      ],
                    },
                  ],
                },
                // {
                //   label: "Scraping",
                //   slug: "development/scraping/scraping",
                // },
                {
                  label: "AI",
                  slug: "development/ai",
                },
                {
                  label: "Checkout Config",
                  slug: "development/checkout-config",
                },
                {
                  label: "Add or Change Languages in the Project",
                  slug: "development/languages",
                },
              ],
              //   autogenerate: { directory: 'development' },
            },
            {
              label: "Keys",
              slug: "keys",
            },
            {
              label: "Project set-up by Luciano",
              slug: "project-setup-by-luciano",
            },
          ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});