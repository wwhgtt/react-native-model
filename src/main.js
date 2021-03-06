/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React from 'react';
 import { AppRegistry } from 'react-native';
 const createStore = require('redux').createStore;
 const applyMiddleware = require('redux').applyMiddleware;
 const compose = require('redux').compose;
 const Provider = require('react-redux').Provider;
 const thunkMiddleware = require('redux-thunk').default;
 const Application = require('./container/initialize/initialize');
 const reducer = require('./reducer/initialize/index.js');
 let storeCreator = compose(applyMiddleware(thunkMiddleware))(createStore);
 const store = storeCreator(reducer);

 const TestApplication = React.createClass({
   render() {
     return (
       <Provider store={store}>
         <Application />
       </Provider>
     );
   },
 });

 AppRegistry.registerComponent('AwesomeProject', () => TestApplication);
