1. Create a New Vite Project:

```shell
yarn create vite . --template react-ts
```

2. Install NPM Packages:

-   Development Dependencies:

```shell
yarn add --dev vite-tsconfig-paths
yarn add --dev sass
yarn add --dev vitest
yarn add --dev @testing-library/jest-dom
yarn add --dev @testing-library/react
yarn add --dev jsdom
yarn add --dev scaffdog
```

-   Production Dependencies:

```shell
yarn add react-router-dom
yarn add antd
yarn add @tanstack/react-query
yarn add lucide-react
```

3. Update **.gitignore**:

```
.yarn/*

!.vscode/extensions.json
!.vscode/settings.json
!.vscode/launch.json
!.vscode/react.code-snippets
```

4. Add **.yarnrc.yml** File:

```yml
nodeLinker: "node-modules"
```

5. Create **CHANGELOG.md**:

Set up a Markdown file dedicated to documenting the history of changes and updates made to the project.

6. Create **CONTRIBUTING.md**:

Create a Markdown file containing guidelines for contributing to the project

7. Create **CODE_OF_CONDUCT.md**:

Establish a Markdown file outlining the code of conduct for contributors, ensuring a respectful and inclusive environment.

[Source](https://www.contributor-covenant.org/)

8. Create **FAQ.md**:

Develop a Markdown file that addresses frequently asked questions, providing clarity and support for contributors.

9. Create **SECURITY.md**:

10. Create **LICENSE**

MIT License.

11. Configure TypeScript:

In **tsconfig.json**, under `"compilerOptions"`, add:

```json
"baseUrl": "src"
```

12. Update Vite Configuration:

Modify **vite.config.ts**:

12.1. Enable minification in the build process:

```ts
build: {
    minify: true,
}
```

12.2. Add `viteTsconfigPaths()` to the `plugins` array.

12.3 Add test config

```ts
test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    css: true,
}
```

[source](https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/vite.config.ts)

[source](https://www.npmjs.com/package/@testing-library/jest-dom#with-vitest)

13. Add **src/test/setup.ts**

```ts
import "@testing-library/jest-dom";
```

[source](https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/src/test/setup.ts)

[source](https://www.npmjs.com/package/@testing-library/jest-dom#with-vitest)

14. Add Workspace Settings for Visual Studio Code:

-   **launch.json**: This file is used to configure debugging settings. It allows you to set up various configurations for running and debugging your code.
-   **settings.json**: This is used for workspace settings. You can specify various preferences and settings that apply to your current project.
-   **extensions.json**: This file is used to recommend extensions. When someone opens your project in VSCode, they will be prompted to install the extensions listed in this file.

<img width="793" alt="Screen Shot 2023-12-14 at 10 53 12 pm" src="https://github.com/lifeparticle/reactjs-starter-template-antd/assets/1612112/518a18e4-d81a-4474-a057-cdb4d53c7080">

To view a curated list of extensions, proceed to the "Extensions" section and apply the "Recommended" filter.

15. Add Prettier Configuration File

**.prettierrc.json**

16. Add **styles** folder

-   animations.css
-   colors.css
-   shadows.css
-   antd-overrides.csc
-   fonts.scss
-   sizes.css
-   borders.css
-   global.css
-   z-index.css

17. Add **assets** folder

-   Add **fonts** folder
-   Add **Giest** and **Geist-Mono** folders
-   Update **fonts.scss**
-   Add [PageNotFound.svg](https://error404.fun/)
-   Update the `/src/pages/PageNotFound/PageNotFound.tsx` file

```scss
:where(html) {
	@font-face {
		font-family: "Geist";
		src: url("../assets/fonts/Geist/Geist-Regular.woff2") format("woff2");
		font-weight: 400;
		font-style: normal;
	}
	@font-face {
		font-family: "Geist";
		src: url("../assets/fonts/Geist/Geist-SemiBold.woff2") format("woff2");
		font-weight: 600;
	}

	@font-face {
		font-family: "Geist-Mono";
		src: url("../assets/fonts/Geist-Mono/GeistMono-Regular.woff2") format("woff2");
		font-weight: 400;
		font-style: normal;
	}
	--global-font: "Geist", Segoe UI, Arial, sans-serif;
	--global-font-mono: "Geist-Mono", monospace;
}
```

-   Update **global.css**

```css
code {
	font-family: var(--global-font-mono);
}
```

-   Add **useTheme.ts**

```ts
export default function useTheme() {
	const THEME = {
		token: {
			fontFamily: "var(--global-font)",
		},
	};
	return THEME;
}
```

-   Update **App.tsx**

```tsx
import { Button, ConfigProvider } from "antd";
import { useTheme } from "hooks";
import { useNavigate } from "react-router-dom";
import { Routes } from "routes";

function App() {
	const navigate = useNavigate();
	const theme = useTheme();

	return (
		<div>
			<ConfigProvider theme={theme}></ConfigProvider>
		</div>
	);
}

export default App;
```

18. Add **routes** folder

19. Add **data** folder

20. Add **components** folder

21. Add **pages** folder

22. Add **hooks** folder

23. Add **utils** folder

24. Add **api** folder

25. Refactor **main.tsx**

26. Refactor **App.tsx**

27. Scaffdog setup

-   Installation

```shell
npx scaffdog init
# Please enter a document name.
page
```

-   Update **page.md**

[source](https://scaff.dog/docs)

28. Add **robots.txt**

```txt
User-agent: *
Allow: /
```

29. Edit **index.html**

-   Add meta description

```
<meta
	name="description"
	content="ReactJS starter template with Material UI"
/>
```

-   Edit title tag

30. GitHub specific folders and files

-   Add **.github** folder
    -   Add **ISSUE_TEMPLATE** folder
        -   Add bug_report.md
        -   feature_request.md
    -   Add pull_request_template.md
