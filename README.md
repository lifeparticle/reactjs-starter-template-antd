## Introduction

Welcome to our ReactJS project! This guide is designed to help you seamlessly set up and use our ReactJS starter template with Ant Design. Whether you're a beginner or an experienced developer, these instructions will assist you in customizing and launching your application efficiently.

## Installation

Ensure these dependencies are installed before proceeding:

```shell
node -v
# 18.16.1

yarn -v
# 3.6.1
```

Install project dependencies using Yarn with the `--immutable` flag to ensure consistent package versions:

```shell
yarn install --immutable
```

## Running the Project

To run the project locally, execute the following command:

```shell
yarn dev
```

## Running Tests

You can also run tests to ensure the project's functionality:

```shell
yarn test
```

## Contributing

If you'd like to contribute to the project, please check the [How to contribute](./CONTRIBUTING.md) file for guidelines and instructions.

## How was this project created?

See the creation details here: [HOW](./HOW.md)

## How to use this project?

To get started, follow these steps:

1. Rename the folder from `reactjs-starter-template-antd` to `your-app-name`.
2. Edit **package.json**:
    - Change line 2 from `"name": "reactjs-starter-template-antd"` to `"name": "your-app-name"`.
3. Modify **CONTRIBUTING.md**:

    - Line 8: Replace the existing repository link with your specific link.

        Before:

        ```shell
        git remote add upstream git@github.com:lifeparticle/reactjs-starter-template-antd.git
        ```

        After:

        ```shell
        git remote add upstream git@github.com:github-user-name/githib-repo-name.git
        ```

    - Line 62: Update the pull request link to your repository's link.

        Before:

        ```shell
        https://github.com/lifeparticle/reactjs-starter-template-antd/pulls
        ```

        After:

        ```shell
        https://github.com/github-user-name/githib-repo-name/pulls
        ```

4. Update the **Introduction** section with your project description
5. Delete the **How was this project created?** section
6. Delete the **How to use this project?** section
7. Delete the **HOW.md** file
