## Как запустить проект

Склонируй репозиторий и запусти команду ниже для установки пакетов:

```bash
npm ci
```

После установки пакетов запусти команду ниже для старта проекта в dev режиме
```bash
npm run dev
```

Для production сборки проекта и его запуска выполни команды ниже:
```bash
npm run build
npm start
```

Открой [http://localhost:3000](http://localhost:3000) в своем браузере, чтобы увидеть домашнюю страницу.

## Тех описание
- [Next.js](https://nextjs.org/docs) - фреймворк с возможностью server side rendering. Используется рендера страниц на строне сервера и отправки клиенту готовой разметки
- [react-redux](https://react-redux.js.org/) - глобальный стейт менеджер для React. Используется подход Toolkit для избежания boilerplate кода
- [next-redux-wrapper](https://www.npmjs.com/package/next-redux-wrapper) - пакет, который упрощает инициализацию стора на стороне сервера и его гидрацию на стороне клиента
- [axios](https://axios-http.com/docs/intro) - http клиент, используется для вызовов API, позволяет создавать отдельные инстансы, что дает возможность лучше организовать код
- [tailwindcss](https://tailwindcss.com/) - утилитарная CSS библиотека, позволяет быстро создавать UI, обладает большой экосистемой и популярностью, требует минимальной конфигурации
- [lucide-react](https://lucide.dev/guide/packages/lucide-react) - библиотека иконок для React
- [date-fns](https://date-fns.org/) - утилитарная библиотека для React, для работы с датами - форматирование и преобразование
- [clsx](https://www.npmjs.com/package/clsx) - утилитарная функция, для построения className по условию, что очень полезно при работе с tailwind
- [class-variance-authority](https://cva.style/docs) - платформенно-независимая утилитарная библиотека, для построения различных вариантов (variants) UI компонентов. Упрощает создание UI библиотек
- [@radix-ui/react-select](https://www.radix-ui.com/primitives/docs/components/select) - headless ui библиотека для компонентов-примитивов. Упрощает создание базовых компонентов, позволяя их кастомизировать, а также предоставляет accessibility из коробки
- [@radix-ui/react-slot](https://www.radix-ui.com/primitives/docs/utilities/slot) - утилитарный компонент, мержит свои пропсы в его непосредственные чайлды, упрощает создания базовых компонентов.

