import React from 'react-native';

let {
  StyleSheet,
  View,
  DrawerLayoutAndroid,
  Text,
  Image,
  ToolbarAndroid,
  Platform
} = React;
import {connect} from 'react-redux';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  _renderSubreddits() {

  }

  render() {
    if (Platform.OS === 'ios') {
      return (
        <View>
          <Text>Sorry, not implemented</Text>
        </View>
      )
    }

    return(
      <DrawerLayoutAndroid
        style={styles.container}
        drawerWidth={300}
        renderNavigationView={this._renderSubreddits}
        ref={(drawer) => {this.drawer = drawer;}}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
      >
        <ToolbarAndroid
          style={styles.toolbar}
          title="RedditReactReduxNative"/>
          <View>
            <Text>Hi</Text>
          </View>
      </DrawerLayoutAndroid>
    )
  }
}

export default Main;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  toolbar: {
    backgroundColor: '#eee',
    height: 56,
    marginTop: 24,
  }
});
