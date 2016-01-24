import React from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';

import App from './containers/app';

const store = configureStore();

class Root extends React.Component {
  render() {
    <Provider store={store}>
      <App />
    </Provider>
  }
}

export default Root;
