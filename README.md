# Taobao Shopping Web

A simple and reusable Next.js project structure for an ecommerce app.

## Goals

- Keep folders minimal and easy to understand.
- Reuse UI and feature code without over-engineering.
- Add new folders only when a feature actually needs them.

## Folder Structure

```text
src/
	app/                 # Next.js routes (pages, layouts)
	components/          # Reusable UI and shared view components
		ui/                # Base UI primitives (button, input, sheet, ...)
	data/                # Static/mock data for now
	features/            # Domain logic by feature (auth, cart, products...)
	lib/                 # Global helpers/utilities
	stores/              # Global client stores (if needed)
	types/               # Shared TypeScript types
```

Current feature domains:

- `features/auth`
- `features/cart`
- `features/checkout`
- `features/orders`
- `features/products`

## Simple Rules

1. Start each feature folder flat.
2. Only create subfolders (`components`, `hooks`, `services`) when code grows.
3. Put generic, app-wide UI in `components/ui`.
4. Keep route files in `app` thin, and move logic into `features`.
5. If a file is used by only one feature, keep it inside that feature.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.
