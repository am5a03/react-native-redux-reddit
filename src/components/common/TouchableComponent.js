import React from 'react-native';

let {
  TouchableNativeFeedback,
  Platform,
  PropTypes
} = React;

//TODO
class TouchableComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (Platform.OS === 'ios') {
      return (
        <View></View>
      )
    } else {
      return (
        <TouchableNativeFeedback {...this.props}>

        </TouchableNativeFeedback>
      )
    }
  }
}

export TouchableComponent;
