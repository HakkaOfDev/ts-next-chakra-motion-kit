<p align="center">
  <a href="https://github.com/hakkaofdev/ts-next-chakra-motion-kit">
    <h1 align="center">Typescript Next.js Chakra-UI Framer-Motion Starter Kit</h1>
  </a>
</p>

<h2 align="center">Start with a powerful template ⚡️</h2>

<br>

<p align="center">
  <img alt="Github Stars" src="https://badgen.net/github/stars/hakkaofdev/ts-next-chakra-motion-kit"/>
  <img alt="Code quality" src="https://api.codiga.io/project/30800/score/svg"/>
  <img alt="Code grade" src="https://api.codiga.io/project/30800/status/svg"/>
  <img alt="Top languages" src="https://img.shields.io/github/languages/top/hakkaofdev/ts-next-chakra-motion-kit"/>
  <img alt="Opensource License" src="https://img.shields.io/badge/licence-OPENSOURCE-green"/>
</p>
<br />

<h1 align='center'>Table of contents</h1>

- Getting started
- Paths & Files
- Useful dependencies (`Important`)
- Components
- Internationalization
- Theme
- Framer Motion
- SEO

<br />

### See a DEMO [here](https://ts-next-chakra-motion-kit.vercel.app/).

<h2 align='center'>Getting started</h2>

First, you need to open a `Terminal` and clone this repo by using :

```bash
git clone https://github.com/hakkaofdev/ts-next-chakra-motion-kit
```

Enter to the folder :

```bash
cd ./ts-next-chakra-motion-kit
```

And install dependencies

```bash
npm install
```

Finally, run in dev :

```bash
npm run dev
```

<h2 align='center'>Paths & Files</h2>

This is the main structure of the template.

### Structure

```text
.
├── data
├── .env
├── .eslintrc.json
├── next-env.d.ts
├── next-sitemap.js
├── package.json
├── .prettierrc.json
├── tsconfig.json
├── internationalization
│  ├── i18n.ts
│  └── locales
├── pages
│  ├── 404.tsx
│  ├── _app.tsx
│  ├── _document.tsx
│  └── index.tsx
├── public
│  └── assets
├── src
│  ├── components
│  ├── constants.ts
│  ├── providers
│  ├── theme
│  ├── types
│  └── utils
```

- You can upload your constants like URL's in the `constants.ts` in `.src/`.
- Dependencies can be found in `package.json`.
- Your types in `./src/types`.
- The theme system of Chakra-UI in `./src/theme/`.
- Components in `./src/components/`.
- Pages in `./pages/`
- Locales for your langs in `./internationalization/locales/`.
- Default `env` variables in `.env`.

### Customs Paths

For imports you can use this list :

- @/components/\*
- @/types/\*
- @/utils/\*
- @/data/\*
- @/providers/\*
- @/internationalization/\*
- @/theme

Each imports refer to the specific folder.

<h2 align='center'>Useful Dependencies</h2>

By default, I installed a list of useful dependencies.

- `react-use` in `v17.4.0` for useful hooks.
- `react-intersection-observer` in `v9.4.1` for advanced animations. You can find an example of use [here](https://github.com/HakkaOfDev/hakkaofdev.fr/blob/main/src/components/scene/index.tsx).
- `prettier` in `v2.8.1` for formatting code.
- `eslint` in `v8.31.0` for errors.
- `@react-icons` in `v4.7.1` for icons. [React-Icons](https://react-icons.github.io/react-icons/)
- `Fonts` to [fontsource.org](https://fontsource.org/fonts).

<h2 align='center'>Components</h2>

- `<ThemeButton />` in `.src/components/theme-button/index.tsx`.
- `<LanguagesButton />` in `.src/components/languages-button/index.tsx`.
- `<PageLayout />` in `.src/components/page-layout/index.tsx`.

<h2 align='center'>Internationalization</h2>

### Default config

She can be found in `./internationalization/i18n.ts`

```typescript
const resources = {
  us: {
    translation: en_US,
  },
  fr: {
    translation: fr_FR,
  },
};

export const availableLanguages = Object.keys(resources);

const options = {
  order: ['localStorage', 'navigator'],
};

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'us',
    detection: options,
    supportedLngs: ['us', 'fr'],
    interpolation: {
      escapeValue: false,
    },
    debug: false,
  });
```

### Add a new lang

Add it in `ressources` like others.
Create un folder with prefix in `./internationalization/locales/` like others.
And customize the constant in your `.ts` file.

```typescript
export const en_US = {
  home: {
    title: 'Home',
  },
};
```

### How to use it

```typescript
import { Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Example = () => {
  const { t } = useTranslation();

  return <Text align='center'>{t('home.title')}</Text>;
};
```

<h2 align='center'>Theme</h2>

You can find a complete documentation [here](https://chakra-ui.com/docs/theming/customize-theme).

<h2 align='center'>Framer Motion</h2>

`Framer Motion` was directly installed when `@chakra-ui/react` is added as dependency.

### Use Framer Motion with Chakra-UI

First, you have to declare your variants :

```typescript
import { Variants } from 'framer-motion';

const variants: Variants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: -40,
    transition: { duration: 0.4, type: 'easeOut' },
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.4, type: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: -0,
    y: 40,
    transition: { duration: 0.4, type: 'easeOut' },
  },
};
```

Declare your custom container, a `MotionContainer` !

```typescript
import { Container, ContainerProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionContainer = motion<ContainerProps>(Container);
```

And use it as a component :

```typescript
<MotionContainer
  display='flex'
  maxW='container.lg'
  minH={{ base: 'auto', md: '100vh' }}
  px={{ base: 4, lg: 8 }}
  initial='hidden'
  animate='enter'
  exit='exit'
  variants={variants}
  centerContent
>
  {children}
</MotionContainer>
```

You can find my article with an another example [here](https://www.hakkaofdev.fr/blog/my-first-typescript-next-chakra-website).

<h2 align='center'>SEO</h2>

The `Search Engine Optimization (SEO)` is important on any websites.

For this template, I used `next-seo` and `next-sitemap`.

### Use the SEO

For that you've a `PageLayout` component with SEO.
The default config for SEO is that:

```typescript
<NextSeo
  title={title + ' | ' + process.env.siteName}
  description={description}
  twitter={{
    cardType: 'summary_large_image',
    handle: '@hakkaofdev',
  }}
  openGraph={{
    url: 'https://www.hakkaofdev.fr',
    title: title + ' | ' + process.env.siteName,
    description: description,
    locale: 'en_US',
    images: [
      {
        url: 'https://www.hakkaofdev.fr/assets/images/social.png',
        width: 1200,
        height: 630,
        alt: 'Alexandre Gossard',
        type: 'image/png',
      },
    ],
  }}
  additionalLinkTags={[
    {
      rel: 'icon',
      href: 'https://www.hakkaofdev.fr/favicon.ico',
    },
  ]}
/>
```

Just use it like this:

```typescript
import PageLayout from '@/components/page-layout';

return (
  <PageLayout title='This is a template' description='Created by @HakkaOfDev'>
    {children}
  </PageLayout>
);
```

### Sitemap

Default site-map.

```javascript
module.exports = {
  siteUrl: process.env.baseURL,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
};
```

You have to `npm run postbuild` to generate it.

> Don't hesitate to contact me if you want advices or if you have any questions or post an issue.
