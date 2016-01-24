import React from 'react-native';
let {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback
} = React;

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let TouchableComponent;
    let buttonProps = {};

    if (Platform.OS === 'ios') {

    } else {
      TouchableComponent = TouchableNativeFeedback;
      buttonProps = {
        background: TouchableNativeFeedback.Ripple('#f00', false)
      }
    }

    return (
      <TouchableComponent {...buttonProps}>
        <View style={styles.container}>
          <Text>{this.props.title}</Text>
          <Text>{this.props.author}</Text>
        </View>
      </TouchableComponent>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    padding: 8
  }
});

export default Post;
