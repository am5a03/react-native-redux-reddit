import React from 'react-native';
import Post from './Post';
import {selectSubReddit, fetchPostsIfNeeded, refreshSubReddit} from '../../actions/Actions';

let {
  ListView,
  View,
  Text,
  ProgressBarAndroid,
  ProgressViewIOS,
  Platform,
  RecyclerViewBackedScrollView,
  StyleSheet
} = React;

class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      isFetching: true,
      after: "",
      count: 0,
      subreddit: ""
    }
  }

  componentDidMount() {
    const { dispatch, selectedSubReddit, after } = this.props;
    dispatch(fetchPostsIfNeeded(selectedSubReddit, after));
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, selectedSubReddit, after } = this.props;
    this.setState({
      isFetching: nextProps.isFetching,
      dataSource: this.state.dataSource.cloneWithRows(nextProps.posts),
      count: nextProps.posts.length,
      subreddit: nextProps.selectedSubReddit
    })
    if (nextProps.selectedSubReddit !== this.props.selectedSubReddit) {
      dispatch(fetchPostsIfNeeded(nextProps.selectedSubReddit, nextProps.after));
    }
  }

  onEndReached() {
    const { dispatch, selectedSubReddit, after } = this.props;
    dispatch(fetchPostsIfNeeded(selectedSubReddit, after));
  }

  renderFooter() {
    let LoadingView;

    if (Platform.OS === 'ios') {
      LoadingView = ProgressViewIOS;
    } else {
      LoadingView = ProgressBarAndroid;
    }

    return(
      <View>
        <ProgressBarAndroid styleAttr='Small'/>
      </View>
    )
  }

  renderLoadingView() {
    let LoadingView;

    if (Platform.OS === 'ios') {
      LoadingView = ProgressViewIOS;
    } else {
      LoadingView = ProgressBarAndroid;
    }

    return(
      <View>
        <LoadingView/>
      </View>
    )
  }

  renderEmptyView() {
    return(
      <View></View>
    )
  }

  _renderPosts(post) {
    return(
      <Post
        title={post.title}
        ups={post.ups}
        thumbnail={post.thumbnail}
        author={post.author}/>
    )
  }

  render() {
    if (this.state.isFetching && this.state.count === 0) {
      return this.renderLoadingView();
    } else {
      return(
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderPosts}
          renderFooter={this.renderFooter}
          renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
          onEndReached={this.onEndReached.bind(this)}
          renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
        />
      )
    }
  }
}

let styles = StyleSheet.create({
  separator: { height: 1, backgroundColor: '#CCCCCC', },
});

export default PostList;
