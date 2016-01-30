import React from 'react-native';
import {Actions} from 'react-native-router-flux';
let {
  View,
  Text,
  BackAndroid,
  ToolbarAndroid,
  StyleSheet
} = React;

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //console.log(this.props.data);
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      <View>
        <ToolbarAndroid
          titleColor="#fff"
          title={this.props.data.title}
          style={styles.toolbar}/>
          <Text style={{ fontSize: 40, fontWeight: 'bold', padding: 8}}>It works!</Text>
          <Text style={{ fontSize: 20}}>{this.props.data.permalink}</Text>
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
