export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = document.querySelectorAll('.button');
    this.init();
  }
  init() {
    this.element.addEventListener('click', this.selectType.bind(this));
  }
  selectType() {
    console.log('adsyg');
  }
}
