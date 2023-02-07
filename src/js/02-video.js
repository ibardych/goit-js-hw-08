import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = function (data) {
  const seconds = data.seconds;
  console.log(seconds);
  localStorage.setItem('videoplayer-current-time', seconds);
};

const throttledOnPlay = _.throttle(onPlay, 1000);

player.on('timeupdate', throttledOnPlay);

const seconds = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(Number.parseFloat(seconds) || 0);
