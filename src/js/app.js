// TODO: write code here

import PlayingArea from './playing-area';

document.addEventListener('DOMContentLoaded', () => {
  const playingAreaDiv = document.querySelector(".playing-area");

  const playingArea = new PlayingArea();
  setInterval(playingArea.randomMovingGoblin, 1000);

  playingAreaDiv.addEventListener('click', e => {
    if (e.target.tagName === "DIV") {
      const goblinImg = e.target.querySelector("img");
      if (goblinImg) {
        playingArea.clickGoblin(true)
      } else {
        playingArea.clickGoblin(false)
      }
    }
  })
})
