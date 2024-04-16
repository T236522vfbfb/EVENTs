export default class PlayingArea {

    constructor() {
      this.score = 0;
      this.missings = 0;
    }

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

      goblinImg.addEventListener()
    }

    clickGoblin(status) {
      this.randomMovingGoblin()

      if (status) this.score++;
      else {
        this.missings++
        this.checkMissings(this.missings)
      } 

    }

    checkMissings(numberOfMissings) {
      if (numberOfMissings == 5) {
        alert('Game over');
      }
    }
    
  }