# Konstantin

Проект-скелет: планирование (`Plan/`), база знаний (`kb/`), сайт на Next.js (`web/`).

## Структура
- `Plan/` — документация по планированию
- `kb/` — база знаний и источники
- `web/` — Next.js + TypeScript + Tailwind CSS v4
- `agents.md` — инструкции для AI-агентов

## Что не хранится в git
В корневом `.gitignore` исключены тяжёлые файлы и локальные ассеты:
- `photo/`
- `*.pdf`

## Запуск сайта
```bash
cd web
npm install
npm run dev
```
