import React from 'react-native';

import MainContainer from './MainContainer';

let {
  StyleSheet,
  Navigator,
  PropTypes,
  View,
  Text
} = React;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainContainer />
    )
  }
}

export default App;
