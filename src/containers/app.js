import React from 'react-native';
import {Router, Route, Schema, Animations, TabBar, Actions} from 'react-native-router-flux';

import Main from '../components/Main';
import PostDetail from '../components/post/PostDetail';
import MainContainer from './MainContainer';

let {
  StyleSheet,
  Navigator,
  PropTypes,
  View,
  Text,
  BackAndroid,
  ToolbarAndroid
} = React;

class App extends React.Component {
  constructor(props) {
    super(props);
    this._isHomeScreen.bind(this);
  }

  _isHomeScreen() {
    //FIXME May not be a correct way to detect home screen...
    return Actions.currentRouter.currentRoute.title === 'Home';
  }

  render() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
        if (this._isHomeScreen()) {
          return false;
        };
        Actions.pop();
        return true;
    });
    return (
      <Router hideNavBar={true}>
        <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottomAndroid}/>
        <Route name="home" component={MainContainer} initial={true} wrapRouter={false} title="Home" schema="modal" navBar={ToolbarAndroid}/>
        <Route name="postDetail" component={PostDetail} title="PostDetail" schema="modal"/>
      </Router>
    )
  }
}

export default App;
