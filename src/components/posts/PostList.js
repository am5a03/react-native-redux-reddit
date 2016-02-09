import React from 'react-native';
import Post from './Post';
import {Actions} from 'react-native-router-flux';
import {selectSubReddit, fetchPostsIfNeeded, refreshSubReddit} from '../../actions/Actions';

let {
  ListView,
  View,
  Text,
  ProgressBarAndroid,
  ActivityIndicatorIOS,
  Platform,
  StyleSheet,
  Dimensions
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
      count: 0
    }
  }

  componentDidMount() {
    const { dispatch, selectedSubReddit, after } = this.props;
    dispatch(fetchPostsIfNeeded(selectedSubReddit, this.props.after));
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    const { dispatch, selectedSubReddit, after } = this.props;
    this.setState({
      isFetching: nextProps.isFetching,
      dataSource: this.state.dataSource.cloneWithRows(nextProps.posts),
      count: nextProps.posts.length
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
      LoadingView = ActivityIndicatorIOS;
    } else {
      LoadingView = ProgressBarAndroid;
    }

    return(
      <View>
        <LoadingView styleAttr='Small'/>
      </View>
    )
  }

  renderLoadingView() {
    let LoadingView;

    if (Platform.OS === 'ios') {
      LoadingView = ActivityIndicatorIOS;
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

  _pressPost(post) {
    Actions.postDetail({data: post});
  }

  _renderPosts(post) {
    return(
      <Post
        onPress={this._pressPost.bind(this, post)}
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
      const windowDims = Dimensions.get('window');
      return(
        <ListView
          style={{height: windowDims.height}}
          dataSource={this.state.dataSource}
          renderRow={this._renderPosts.bind(this)}
          renderFooter={this.renderFooter}
          onEndReached={this.onEndReached.bind(this)}
          renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
        />
      )
    }
  }

}

export default PostList;

var styles = StyleSheet.create({
  separator: {
    height: 1, backgroundColor: '#CCCCCC',
  }
});
