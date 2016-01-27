import React from 'react-native';
import SubRedditList from './subreddits/SubRedditList';
import PostList from './posts/PostList';
import {selectSubReddit, fetchPostsIfNeeded, refreshSubReddit} from '../actions/Actions';

let {
  StyleSheet,
  View,
  DrawerLayoutAndroid,
  Text,
  Image,
  ToolbarAndroid,
  Platform,
  PropTypes
} = React;
import {connect} from 'react-redux';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const { dispatch, selectedSubReddit, after } = this.props;
    // dispatch(fetchPostsIfNeeded(selectedSubReddit, this.props.after));
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    // if (nextProps.selectedSubReddit !== this.props.selectedSubReddit) {
    //   const { dispatch, selectedSubReddit, after } = this.props;
    //   dispatch(fetchPostsIfNeeded(selectedSubReddit, after));
    // }
  }

  _renderSubreddits() {
    return(
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.menuHeader}>
          <Image
            resizeMode="cover"
            style={styles.menuHeaderBackground}
            source={{uri: 'https://s3.amazonaws.com/pomodoro-exp/patch.jpg'}} />
          <View style={styles.menuHeaderOverlay} />
        </View>
        <SubRedditList {...this.props}/>
      </View>
    );
  }

  render() {
    if (Platform.OS === 'ios') {
      return (
        <View>
          <Text>Sorry, not implemented</Text>
        </View>
      )
    }

    return(
      <DrawerLayoutAndroid
        style={styles.container}
        drawerWidth={300}
        renderNavigationView={this._renderSubreddits.bind(this)}
        ref={(drawer) => {this.drawer = drawer}}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
      >
        <ToolbarAndroid
          style={styles.toolbar}
          title="RedditReactReduxNative"/>
          <PostList {...this.props}/>
      </DrawerLayoutAndroid>
    )
  }
}

Main.propTypes = {
  selectedSubReddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  after: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default Main;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  dummy: {
    flex: 1,
  },
  menuHeader: {
    height: 150,
    justifyContent: 'center',
    padding: 20,
    paddingTop: 50,
  },
  menuHeaderBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  menuHeaderOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
    marginTop: 24,
  },
});
