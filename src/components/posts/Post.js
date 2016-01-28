import React from 'react-native';
import {isValidThumbnail} from '../../utils/UrlUtils';
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

    let isValid = isValidThumbnail(this.props.thumbnail)
    let v;
    if (isValid) {
      v = <Image
            source={{uri: this.props.thumbnail}}
            style={styles.thumbnail}
          />
    } else {
      v = <View>
            <Text>{this.props.thumbnail}</Text>
          </View>
    }

    return (
      <TouchableComponent {...buttonProps}>
        <View style={styles.container}>
          <Text style={styles.ups}>{this.props.ups}</Text>
          <View style={styles.middleContainer}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text>{this.props.author}</Text>
          </View>
          <View style={styles.rightContainer}>
            {v}
          </View>
        </View>
      </TouchableComponent>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  middleContainer: {
    flex: 1
  },
  ups: {
    flex: 0.3,
    fontSize: 16,
    marginLeft: 8
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14
  },
  rightContainer: {
    flex: 0.3
  },
  thumbnail: {
    width: 80,
    height: 80
  }
});

export default Post;
