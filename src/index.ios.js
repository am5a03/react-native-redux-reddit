/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {AppRegistry, NativeModules} from 'react-native';
import Root from './root';

module.exports = NativeModules.SimpleCacheAndroid;

AppRegistry.registerComponent('RedditReactReduxNative', () => Root);
