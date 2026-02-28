import Poutine from './Poutine.js';

export default class Chef {
  constructor(element) {
    //variables globales
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelectorAll('.button-secondary');

    this.init();
  }
  init() {
    const poutines = this.element.querySelectorAll('.poutine');

    for (let i = 0; i < poutines.length; i++) {
      // mettre instance (bien faire le push...)

      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);

      //commande:

      for (let i = 0; i < this.container.length; i++) {
        const valider = this.container[i];
        valider.addEventListener('click', this.sendOrder.bind(this));
      }
    }
  }
  sendOrder() {
    // compte le nombre de poutines créées: 
    
    const nombrePoutines = this.element.querySelectorAll('button.is-active');
    const totalPoutines = Number(nombrePoutines.length);
    
    //créer le p
    const texte = this.element.querySelector(".chef__order");
    texte.innerHTML="";
    const p = document.createElement('p');
    p.textContent = `Nombre total de poutine(s) :  ${totalPoutines}`;
    texte.appendChild(p);
  }
}
