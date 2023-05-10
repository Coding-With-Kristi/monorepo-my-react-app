# Manage and publish monorepo with Lerna.js in private NPM registries

A quick guide on how to configure a monorepo in a react application created with Create React App. Uses lerna.js to manage dependencies, versioning and publishing of packages. GitHub packages is used to publish the packages.

This guide demonstrates how shared components in a react application can be converted into a package by using Lerna.js, and how to publish those in GitHub private registry and use them as dependencies in some other project.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

### `@craco/craco

**Note: Used to over override Create React App configuration without ejecting it. Since Create React App only compiles the `src` folder, `cranco` is used to override `webpack` configuration to include the `packages` folder as well created by Lerna.js which contains our packages (shared components).

