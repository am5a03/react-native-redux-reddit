import React from 'react-native';
let {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  Image
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
          <Text style={styles.ups}>{this.props.ups}</Text>
          <View style={styles.middleContainer}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text>{this.props.author}</Text>
          </View>
        </View>
      </TouchableComponent>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8
  },
  middleContainer: {
    flex: 1
  },
  ups: {
    flex: 0.3,
    fontSize: 15
  },
  title: {
    fontWeight: 'bold'
  },
  rightContainer: {
    flex: 0.3
  },
  thumbnail: {
    width: 70,
    height: 70
  }
});

export default Post;
