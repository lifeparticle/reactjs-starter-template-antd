1. Create a New Vite Project:

```shell
yarn create vite . --template react-ts
```

2. Update **.gitignore**:

```
.yarn/*
```

3. Add **.yarnrc.yml** File:

```yml
nodeLinker: "node-modules"
```

4. Create **CHANGELOG.md**:

Initialize a markdown file for maintaining change logs.

5. Create **CONTRIBUTING.md**:

Initialize a markdown file to guide contributors.

6. Configure TypeScript:

In **tsconfig.json**, under `"compilerOptions"`, add:

```json
"baseUrl": "src"
```

7. Update Vite Configuration:
   Modify **vite.config.ts**:

7.1. Enable minification in the build process:

```ts
build: {
    minify: true,
}
```

7.2. Add `viteTsconfigPaths()` to the `plugins` array.

8. Install NPM Packages:

-   Development Dependencies:

```shell
yarn add --dev vite-tsconfig-paths
yarn add --dev sass
```

-   Production Dependencies:

```shell
yarn add react-router-dom
yarn add antd
yarn add @tanstack/react-query
yarn add @tabler/icons
```
