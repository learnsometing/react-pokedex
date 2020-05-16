<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter Modern Dev Boilerplate
</h1>

This starter is an extension of Gatsby's default starter. It ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React. 

It also ships with:
<ul>
  <li>
    ESLint and prettier with recommended rules that don&#39;t interfere.
  </li>
  <li>Stylelint with prettier config</li>
  <li>styled-components with prettier and stylelint config.</li>
  <li>Jest with babel, typescript, and styled-components support.</li>
  <li>Recommended mocks and shims for Gatsby unit testing.</li>
  <li>
    Cypress end to end testing environment separate from unit-testing
    environment.
  </li>
  <li>Typescript, with babel, eslint, and prettier config.</li>
  <li>All necessary Typescript types for installed packages.</li>
</ul>
<p>I hope it serves you well!</p>    

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using this starter
    gatsby new my-modern-starter https://github.com/learnsometing/gatsby-starter-modern-dev-boilerplate
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-modern-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-modern-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this project.

    .
    ├── __mocks__
    ├── .vscode
    ├── e2e
    ├── node_modules
    ├── src
    ├── .babelrc
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── .stylelintrc.json
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── jest-preprocess.js
    ├── jest.config.js
    ├── LICENSE
    ├── loadershim.js
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── tsconfig.json
    
1. **`/__mocks__`**: This directory contains recommended mocks for [unit testing.](https://www.gatsbyjs.org/docs/unit-testing/#3-useful-mocks-to-complete-your-testing-environment)

2. **`/.vscode`**: This directory contains vscode settings for linting on save. If you don't use vscode or don't want the editor to format on save, delete this folder.

3. **`/e2e`**: This directory contains the cypress end to end testing files and environment configuration.

4.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

5.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

6. **`/.babelrc`**: This file configures babel's [plugins and presets](https://babeljs.io/docs/en/configuration). Babel is a tool that transpiles newer JavaScript syntax to older, more widely compatible syntax.

7. **`/.eslintrc.js`**: This file configures [eslint](https://eslint.org/docs/user-guide/configuring). ESLint is a tool for formatting and cleaning (linting) JavaScript code.

8.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

9. **`.prettierignore`**: This file tells prettier which files it [should not lint](https://prettier.io/docs/en/ignore.html).

10.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

11. **`.stylelintrc.json`**: This is a configuration file for [Stylelint](https://stylelint.io/). Stylelint helps you avoid errors and enforce conventions in your styles.

12.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

13.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

14.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

15.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

16. **`jest-preprocess.js`**: This file tells jest how to process all JS and JSX files

17. **`jest.config.js`**: This is the configuration file for jest, where we tell it how to operate. See the [gatsby docs](https://www.gatsbyjs.org/docs/unit-testing/#2-creating-a-configuration-file-for-jest) for specific info.

18.  **`LICENSE`**: Gatsby is licensed under the MIT license.

19.  **`loadershim.js`**: This is a file that sets the necessary global variable `.___loader` for use in jest.

20. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

21. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

22. **`README.md`**: A text file containing useful reference information about your project.

23. **`tsconfig.json`**: This is the project-wide Typescript configuration. It can be [modified](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) to suit your needs.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/gatsbyjs/gatsby-starter-default)

<!-- AUTO-GENERATED-CONTENT:END -->
