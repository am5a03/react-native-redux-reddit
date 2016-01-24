'use strict';
import { DEFAULT_SUBREDDIT } from '../components/subreddits';
import { combineReducers } from 'redux';

function selectSubReddit(state = DEFAULT_SUBREDDIT, action) {
  return {};
}

const rootReducer = combineReducers({
  selectSubReddit
});

export default rootReducer;
