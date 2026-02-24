import Icons from './utils/Icons.js';
import Chef from './Chef.js';

// La ligne suivante devrait être au TOUT début du init() du Main

class Main {
  constructor() {
    this.init();
  }
  init() {
    Icons.load();
    const types = document.querySelectorAll("[data-component='Chef']");
    for (let i = 0; i < types.length; i++) {
      const chef = types[i];

      new Chef(chef);
    }
  }
}

new Main();
