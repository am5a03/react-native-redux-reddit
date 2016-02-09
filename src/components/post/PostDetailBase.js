import React from 'react-native';
import {Actions} from 'react-native-router-flux';
let {
  View,
  Text,
  BackAndroid,
  ToolbarAndroid,
  StyleSheet,
  NativeModules,
  SimpleCacheAndroid
} = React;

class PostDetailBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastVisit: ""
    }
  }

  componentDidMount() {
    //console.log(this.props.data);
    //console.log(NativeModules.SimpleCacheAndroid);
    // NativeModules.SimpleCacheAndroid.getString("lastVisit", (val) => {
    //   this.setState({
    //     lastVisit: val
    //   });
    // })
    // NativeModules.SimpleCacheAndroid.putString("lastVisit", this.props.data.title);
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    //<Text style={{ fontSize: 10}}>Your last visited post is:{this.props.lastVisit}</Text>
    return (
      <View>
        <ToolbarAndroid
          titleColor="#fff"
          title={this.props.data.title}
          style={styles.toolbar}/>
          <Text style={{ fontSize: 40, fontWeight: 'bold', padding: 8}}>It works!</Text>
          <Text style={{ fontSize: 20}}>{this.props.data.permalink}</Text>
          <Text style={{ fontSize: 15, color: 'blue'}}>Your last visited post is: {this.state.lastVisit}</Text>
      </View>
    )
  }
}

export default PostDetailBase;

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#222',
    height: 56,
    marginTop: 24,
  }
});
