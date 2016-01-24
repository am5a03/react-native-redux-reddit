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
  const { selectedSubReddit, postsBySubReddit } = state;
  const {
    isFetching,
    items: posts,
    after
  } = postsBySubReddit[selectedSubReddit] || {
    isFetching: true,
    items: [],
    after: ""
  }
  return {
    selectedSubReddit,
    posts,
    isFetching,
    after
  }
}

export default connect(mapStateToProps)(MainContainer);
