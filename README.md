# Getting Started with Create React App

## Install dependencies

run `yarn install` or `npm install`

## Install SASS

run `yarn add sass` or `npm install sass`

## Install Redux Toolkit and React-Redux

run `yarn add @reduxjs/toolkit react-redux` or `npm install @reduxjs/toolkit react-redux`

## Start the project

In the project directory, you can run:

### `yarn start`

# Using Redux Toolkit

## Create a Redux Store

Create the store in a file named store.js

`import { configureStore } from '@reduxjs/toolkit' export const store = configureStore({ reducer: {}, })`

## Provide the Redux Store to React

Once the store is created, we can make it available to our React components by putting a React-Redux <Provider> around our application in src/index.js. Import the Redux store we just created, put a <Provider> around your <App>, and pass the store as a prop:
import { store } from './app/store'
import { Provider } from 'react-redux'
`<Provider store={store}> <App /> </Provider>`
