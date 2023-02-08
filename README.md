# react-additional


## запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev - запуск режима разработки(сборка webpack)
npm run start:dev:vite - запуск режима разработки(сборка vite)
```


## скрипты

- `npm run start` - запуск проекта (front) на webpack dev server
- `npm run start:vite` - запуск проекта (front) на vite
- `npm run start:dev` - запуск проекта (front) на webpack dev server + back (json server)
- `npm run start:dev:vite` - запуск проекта (front) на vite + back (json server)
- `npm run start:dev:server` - запуск back (json server)
- `npm run build:prod` - сборка в prod режиме(минимизирован)
- `npm run build:dev` - сборка в dev режиме 
- `npm run lint` - проверка файлов .ts линтером eslint
- `npm run lint:ts:fix` - исправление файлов .ts линтером eslint
- `npm run lint:scss` - проверка файлов .scss style линтером
- `npm run lint:scss:fix` - исправление файлов .scss style линтером
- `npm run test:unit` - запуск unit тестов jest
- `npm run test:ui` - запуск ui скриншотных тестов loki
- `npm run test:ok` - подтверждение новых скриншотов
- `npm run test:ui:ci` - запуск скриншотных тестов в CI
- `npm run test:ui:report` - полный отчет по скриншотным тестам
- `npm run test:ui:html` - полный HTML отчет по скриншотным тестам 
- `npm run storybook` - запуск storybook
- `npm run storybook:build` - запуск storybook build
- `npm run prepare` - запуск пре-коммит хуков
- `npm run generate:slice` - скрипт генерирует слайс


## архитектура проекта

Проект написан по методолгии FSD

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/)


## работа с переводами

Для переводов используется библиотека [i18next](https://www.npmjs.com/package/i18next-typescript)
Файлы для перевода хранятся в public/locales
Для комфортной работы можно установить плагин [i18n Ally](https://github.com/lokalise/i18n-ally)


## тестирования

Используется 4 вида тестирования:
- unit test jest - `npm run test:unit`
- тесты компонентов react testin library - `npm run test:unit`
- скриншотное тестирование loki - `npm run test:ui`
- e2e тестирование Cypress - `npm run test:e2e`

Подробнее о тестах - [документация](/docs/tests.md)


## линтинг

Используется специальный [плагин](https://www.npmjs.com/package/eslint-plugin-paths-react-aditional) для проверки и исправления соответствия импортов методологии FSD

В нем 3 основных правила:
- path-checker - запрещает использовать абсолютные пути
- layer-imports - проверяет корректность импортов
- public-api-imports - разрешает импорт только из index.ts

Запуск линтеров:
- `npm run lint` - проверка файлов .ts линтером eslint
- `npm run lint:ts:fix` - исправление файлов .ts линтером eslint
- `npm run lint:scss` - проверка файлов .scss style линтером
- `npm run lint:scss:fix` - исправление файлов .scss style линтером


## Storybook

Каждый компонент проекта можно посмотреть в [storybook](https://storybook.js.org/). 
Запуск по команде: 
- `npm run storybook`

Сторикейс описан в файле .stories.tsx рядом с компонентом. Пример:

```typescript jsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: 'function sum (a,b) {\n  return a + b;\n}\n\nconsole.log(sum(1,2)); // Вернет 3',
};
```


## конфигурация проекта

Конфигурация хранится в в /config 

- /config/babel -babel
- /config/build - webpack
- /config/jest - jest
- /config/storybook - storybook

В папке `scripts` хранятся все скрипты для упрощения разработки проекта


## pre-commit хуки CI pipline

В .husky лежит конфиг для проверки пре-коммит хуками

В ./github/workflows лежит конфигурация github actions, в СI прогоняются все виды тестов


## работа с данными

Используется redux toolkit, для запросов на сервер [RTKQuery](src/shared/api/rtkApi.ts).

Для асинхронного подкючения редьюсеров используется [DynamicModuleLoader](src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)
