'use strict';

export function getSubRedditUrl(subbreddit, after) {
  return `http://www.reddit.com/r/${subbreddit}?after=${after}`
}
