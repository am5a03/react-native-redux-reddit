import React from 'react-native';
import {Actions} from 'react-native-router-flux';
import PostDetailBase from './PostDetailBase';
let {
  View,
  Text,
  StyleSheet
} = React;

class PostDetail extends PostDetailBase {
  constructor(props) {
    super(props);
    this.state = {
      lastVisit: ""
    }
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    //<Text style={{ fontSize: 10}}>Your last visited post is:{this.props.lastVisit}</Text>
    return (
      <View>
          <Text style={{ fontSize: 40, fontWeight: 'bold', padding: 8}}>It works!</Text>
          <Text style={{ fontSize: 20}}>{this.props.data.permalink}</Text>
          <Text style={{ fontSize: 15, color: 'blue'}}>Your last visited post is: {this.state.lastVisit}</Text>
      </View>
    )
  }
}

export default PostDetail;

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#222',
    height: 56,
    marginTop: 24,
  }
});
