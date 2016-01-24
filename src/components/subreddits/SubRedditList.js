'use strict'

import React from 'react-native';
import { connect } from 'react-redux';

import SubReddit from './SubReddit';
import {getSubReddits} from '../subreddits';

let {
  ListView,
  Text,
  View
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
    })
  }

  render() {
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(subreddit) => <SubReddit name={subreddit.name}/>}
      />
    )
  }
}

export default SubRedditList;
