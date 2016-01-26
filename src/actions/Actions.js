import * as ActionTypes from './ActionTypes';
import {getSubRedditUrl} from '../utils/ApiUtils';

export function selectSubReddit(subreddit) {
  return {
    type: ActionTypes.SELECT_SUBREDDIT,
    subreddit: subreddit
  }
}

export function refreshSubReddit(subreddit) {
  return (
    type: ActionTypes.REFRESH_SUBREDDIT,
    subreddit: subreddit
  )
}

function requestPosts(subreddit, after) {
  return {
    type: ActionTypes.REQUEST_POSTS,
    subreddit: subreddit,
    after: after
  }
}

function receivePosts(subreddit, json) {
  return {
    type: ActionTypes.RECEIVE_POSTS,
    subreddit: subreddit,
    posts: json.data.children.map(child => child.data),
    after: json.data.after
  }
}

function fetchPosts(subreddit, after) {
  return dispatch => {
    dispatch(requestPosts(subreddit, after));
    return fetch(getSubRedditUrl(subreddit, after))
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)));
      //.catch(error => console.log(error));
  }
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubReddit[subreddit];
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didRefresh;
  }
}

export function fetchPostsIfNeeded(subreddit, after) {
  return (dispatch, getState) => {
    const state = getState();
    if (shouldFetchPosts(state, subreddit)) {
      return dispatch(fetchPosts(subreddit, after))
    }
  }
}
