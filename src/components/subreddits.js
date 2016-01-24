export const DEFAULT_SUBREDDIT = 'funny';

const SUBREDDITS = [
  {name: 'funny'},
  {name: 'gifs'},
  {name: 'gaming'},
  {name: 'aww'},
  {name: 'worldnews'},
  {name: 'food'},
  {name: 'football'},
  {name: 'todayilearned'},
  {name: 'movies'},
  {name: 'ama'},
  {name: 'nba'},
  {name: 'science'},
  {name: 'iosdev'},
  {name: 'androiddev'}
]

export function getSubReddits() {
  return SUBREDDITS;
}
