# Crema App - Web 🌐

[![Build Status](https://github.com/cremalab/crema-app-web/workflows/CI/badge.svg)](https://github.com/cremalab/crema-app-web/actions)
[![codecov](https://codecov.io/gh/cremalab/app-web/branch/develop/graph/badge.svg?token=8epVUIKnmy)](https://codecov.io/gh/cremalab/app-web)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project includes configuration and tooling that conforms to Crema's baseline best-practices for a Web Application.

**🧰 Tools Used**

- [Create React App](https://facebook.github.io/create-react-app/) for simple configuration 😅
- [Cypress](https://www.cypress.io) for end-to-end testing
- [ESLint](https://eslint.org) for code linting
- [Husky](https://github.com/typicode/husky/tree/master) for running tasks via git hooks
- [Hygen](http://www.hygen.io) for component and util generators
- [Jest](https://jestjs.io) for unit tests
- [Prettier](https://prettier.io) for code formatting
- [Storybook](https://storybook.js.org) for component playground
- [TypeScript](http://www.typescriptlang.org) for Static Typing in JavaScript ([Learn](http://www.typescriptlang.org/docs/handbook/basic-types.html))

## 🏗 Setup

> Run these commands from project root.

1. [Install NVM](https://github.com/creationix/nvm#installation-and-update) (Node Version Manager)
2. `nvm install` (in new sessions run `nvm use` to load version specified in `.nvmrc` unless aliased to default)
3. `npm i -g npm@latest` (npm@v7+ required)
4. `npm i` (install project dependencies)
5. Install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) plugins for ~~your editor~~ VS Code and enable "Fix on Save" in `settings.json`:
   ```json
   {
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     },
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "editor.formatOnSave": true
   }
   ```
   > To access `settings.json` in VS Code, type `shift + ⌘ + P`) then search "Open Settings (JSON)"—add the above settings within the existing JSON object.
   >
   > "But I don't use VS Code." That's fine but you're on your own. 😅

## 👟 Run

Run the following scripts with `npm run <SCRIPT_HERE>`:

- `start` - start app
- `new:component` - generate a new component
- `new:util` - generate a new util(ity)
- `new:type` - generate a new type
- `test:analyze` - run bundle analyzer
- `test:deps` - run dependency validation tests
- `test:e2e` - run end-to-end tests
- `test:lint:fix` - run linter and fix if possible
- `test:lint` - run linter
- `test:playground` - run component playground (storybook)
- `test:unit:coverage` - run unit tests with coverage
- `test:unit` - run unit tests
- `deps:graph` - run dependency validation and generate an SVG representing the dependency graph (requires [`graphviz`](https://graphviz.org/) to be installed on your device)
- `deps:report` - run dependency validation and generate an HTML report

> These scripts are located in `package.json` and do not represent the entirety of available scripts, but are the most commonly used.

## 🏛 Structure

Below is the project's file-tree with notes added as inline comments.

> Uninteresting info is denoted by `...`

```bash
.
├── .github # 👈 PR/Issue Templates, workflows, and Renovate config
├── .storybook # 👈 Storybook config
├── cypress # 👈 Cypress integration testing
│   ├── fixtures # 👈 Test data
│   │   └── example.json
│   ├── integration # 👈 Tests go here
│   │   └── sample_spec.ts
│   └── ...
├── public # 👈 Static files
├── src
│   ├── assets # 👈 fonts, images, etc.
│   │   └── logo.svg
│   ├── components # 👈  Use `npm run new:component` to generate
│   │   ├── App
│   │   │   ├── README.md # 👈  Every component has a README
│   │   │   ├── index.tsx # 👈  Contains main implementation
│   │   │   ├── stories.tsx # 👈  Component stories; use `npm run test:playground` to run
│   │   │   ├── styles.css # 👈  Component styles (not included in generated code)
│   │   │   └── test.tsx # 👈  Component tests; use `npm run test:unit` to run
│   │   └── README.md # 👈  Every top-level directory in `src` has a README.md
│   ├── types # 👈  Type definitions go here; use `npm run new:type` to generate
│   │   └── README.md
│   ├── utils # 👈  Utilities go here; use `npm run new:util` to generate
│   │   └── README.md
│   ├── index.css # 👈  Root styles
│   ├── index.tsx # 👈  Root application file
│   ├── react-app-env.d.ts # 👈  Extends react-scripts TypeScript definitions
│   ├── reportWebVitals.ts # 👈  Useful, but not required
│   ├── serviceWorker.ts # 👈  Useful, but not required
│   └── setupTests.ts # 👈  Top-level setup for Jest test runs
├── .dependency-cruiser.js # 👈  Dependency Cruiser config
├── .eslintrc.js # 👈  ESLint - Run Commands
├── .gitattributes # 👈  Git meta information
├── .gitignore # 👈  Git ignore patterns
├── .nvmrc # 👈  Node Version Manager - Run Commands
├── .prettierrc.js # 👈  Prettier - Run Commands
├── LICENSE # 👈  LICENSE 😜
├── README.md # 👈 👈 👈  YOU ARE HERE
├── cypress.json # 👈  Cypress config
├── package-lock.json
├── package.json
└── tsconfig.json # 👈  TypeScript config and extends
```

## 🥇 Best Practices

- Use the code generators:
  - `npm run new:component`
  - `npm run new:type`
  - `npm run new:util`
- Fill out the `README.md` to describe what your code does
- Run your unit tests `npm run test:unit` while working to see immediate feedback
- If you get stuck at any point, just log an issue and we'll figure it out together 👭.
