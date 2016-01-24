import React from 'react-native';

let {
  View,
  Component
} = React;
import {connect} from 'react-redux';

import Main from '../components/Main';

class MainContainer extends React.Component {
  render() {
    return (
      <Main {...this.props} />
    )
  }
}

function mapStateToProps(state) {
  //TODO
  let subbreddit = '';
  return {
    subbreddit
  }
}

export default connect(mapStateToProps)(MainContainer);
