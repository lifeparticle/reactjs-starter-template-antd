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

Set up a Markdown file dedicated to documenting the history of changes and updates made to the project.

5. Create **CONTRIBUTING.md**:

Create a Markdown file containing guidelines for contributing to the project

6. Create **CODE_OF_CONDUCT.md**:

Establish a Markdown file outlining the code of conduct for contributors, ensuring a respectful and inclusive environment.

[Source](https://www.contributor-covenant.org/)

7. Create **FAQ.md**:

Develop a Markdown file that addresses frequently asked questions, providing clarity and support for contributors.

8. Create **LICENSE**

MIT License.

9. Configure TypeScript:

In **tsconfig.json**, under `"compilerOptions"`, add:

```json
"baseUrl": "src"
```

10. Update Vite Configuration:

Modify **vite.config.ts**:

10.1. Enable minification in the build process:

```ts
build: {
    minify: true,
}
```

10.2. Add `viteTsconfigPaths()` to the `plugins` array.

11. Add Workspace Settings for Visual Studio Code1

-   **launch.json**
-   **settings.json**

12. Add Prettier Configuration File

**.prettierrc.json**

13. Add **styles** folder

[Source](https://open-props.style/)

14. Refactor **main.tsx**

15. Install NPM Packages:

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
