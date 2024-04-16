// TODO: write code here

import PlayingArea from './playing-area';

document.addEventListener('DOMContentLoaded', () => {
  const playingArea = new PlayingArea();

  setInterval(playingArea.randomMovingGoblin, 1000);
})
