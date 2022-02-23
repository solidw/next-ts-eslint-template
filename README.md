# Boilerplate with Next.js 11 + TypeScript + ESLint + Prettier

## ESLint

For run ESLint

```bash
yarn lint
// or to fix it
yarn lint:fix
```

## You should

```bash
yarn
```

Install `eslint`.
Then in the `.vscode/settings.json` support auto-fix when you press save(Ctrl + s).

## You can

You can import files with absolute path using `#` when it is under `/src`

```javascript
import SomeComponent from '#/components/SomeComponent';
```

\# means `./src`.
Above import statement meaning

```javascript
import SomeComponent from './src/components/SomeComponent';
```

But aware that './src/components/SomeComponents' isn't work.
Only `#` is allowd when using import with absolute path.
