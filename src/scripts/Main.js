import Icons from './utils/Icons.js';
import Chef from './Chef.js';




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
