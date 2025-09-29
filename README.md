## How to run this project

Склонируй репозиторий и запусти команду ниже для установки пакетов:

```bash
npm ci
```

После установки пакетов запусти команду ниже для запуска проекта
```bash
npm run dev
```

Открой [http://localhost:3000](http://localhost:3000) в своем браузере, чтобы увидеть домашнюю страницу.

## Tech
- [Next.js](https://nextjs.org/docs) - фреймворк с возможностью server side rendering. Используется для фетчинга данных на стороне сервера и отправки клиенту готовой страницы
- [react-redux](https://react-redux.js.org/) - глобальный стейт менеджер для React. Используется подход Toolkit для избежания boilerplate кода
- [next-redux-wrapper](https://www.npmjs.com/package/next-redux-wrapper) - пакет, который упрощает инициализацию стора на стороне сервера и его гидрацию на стороне клиента
- [axios](https://axios-http.com/docs/intro) - http клиент, используется для вызовов API, позволяет создавать отдельные инстансы, что позволяет лучше организовать код
- [tailwindcss](https://tailwindcss.com/) - утилитарная CSS библиотека, позволяет быстро создавать UI, обладает большой экосистемой и популярностью, требует минимальной конфигурации
- [lucide-react](https://lucide.dev/guide/packages/lucide-react) - библиотека иконок для React
- [date-fns](https://date-fns.org/) - утилитарная библиотека для React, для работы с датами - форматирование и преобразование
- [clsx](https://www.npmjs.com/package/clsx) - утилитарная функция, для построения className по условию, что очень полезно при работе с tailwind
- [class-variance-authority](https://cva.style/docs) - платформенно-независимая утилитарная библиотека, для построения различных вариантов (variants) UI компонентов. Упрощает создание UI библиотек

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
