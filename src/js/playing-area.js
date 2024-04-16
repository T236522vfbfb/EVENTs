export default class PlayingArea {

    randomMovingGoblin() {
      const goblinImg = document.createElement('img');
      goblinImg.classList.add('playing-area__img');
      goblinImg.src = 'img/goblin.png';
  
      const playingItemsCollection = document.querySelectorAll('.playing-area__item');
  
      for(const playingItem of playingItemsCollection) {
        if(playingItem.firstElementChild) {
          playingItem.firstElementChild.remove();
        }
      }
  
      const randomPlayingItem = Math.floor(Math.random() * playingItemsCollection.length);
  
      playingItemsCollection[randomPlayingItem].append(goblinImg);
    }
    
  }