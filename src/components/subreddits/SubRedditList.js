'use strict'

import React from 'react-native';
import { connect } from 'react-redux';

import SubReddit from './SubReddit';
import {getSubReddits} from '../subreddits';
import {selectSubReddit, fetchPostsIfNeeded, refreshSubReddit} from '../../actions/Actions';

let {
  ListView,
  Text,
  View,
  ToastAndroid
} = React;

class SubRedditList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    }
  }

  componentDidMount() {
    let ds = this.state.dataSource;
    let subreddits = getSubReddits();
    this.setState({
      dataSource: ds.cloneWithRows(subreddits)
    });
    //console.log(this.props);
  }


  _pressSubReddit(name) {
    ToastAndroid.show('Selected=' + name, ToastAndroid.LONG);
    this.props.dispatch(selectSubReddit(name));
  }

  _renderRow(subreddit, sectionId, rowId) {
    return(
      <SubReddit
        onPress={this._pressSubReddit.bind(this, subreddit.name)}
        name={subreddit.name}/>
    )
  }

  render() {
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow.bind(this)}
      />
    )
  }
}

export default SubRedditList;
