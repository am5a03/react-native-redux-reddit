'use strict';

export function isValidThumbnail(str) {
  return (str !== 'nsfw' && str !== 'self' && str !== 'default' && str !== '');
}
