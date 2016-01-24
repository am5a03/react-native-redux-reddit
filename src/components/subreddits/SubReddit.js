import React from 'react-native';

let {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback
} = React;

class SubReddit extends React.Component {
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
    return(
      <TouchableComponent {...buttonProps}>
        <View>
          <Text style={styles.item}>{this.props.name}</Text>
        </View>
      </TouchableComponent>
    );
  }
}

var styles = StyleSheet.create({
  item: {
    margin: 8,
    color: '#f00'
  }
});

export default SubReddit;
