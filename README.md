# Boilerplate with Next.js + TypeScript + Eslint + Prettier

## Next.js + TypeScript

```bash
yarn create-next-app -e with-typescript boilerplate-nextjs-typescript-eslint-prettier
```

## Eslint + Prettier

```bash
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb eslint-config-prettier eslint-import-resolver-alias eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks 
```

For run eslint

```bash
yarn lint
// or to fix it
yarn lint:fix
```

## You should

```bash
yarn
```

Install `eslint` and `prettier` on your VSCode

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

