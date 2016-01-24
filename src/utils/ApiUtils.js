'use strict';

export function getSubRedditUrl(subreddit, after) {
  let url = `http://www.reddit.com/r/${subreddit}.json?after=${after}`;
  console.log(url);
  return url;
}
