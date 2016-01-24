import React from 'react-native';

let {
  ListView,
  View,
  Text,
  ProgressBarAndroid,
  ProgressViewIOS,
  Platform
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
    }
  }

  componentDidMount() {

  }

  onEndReached() {

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
        <LoadingView styleAttr='Small'/>
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
    if (this.state.isFetching) {
      return this.renderLoadingView();
    }

    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderPosts}
        renderFooter={this.renderFooter}
        onEndReached={this.onEndReached}
      />
    )
  }

}

export default PostList;
