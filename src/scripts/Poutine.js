export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = document.querySelectorAll('.button');
    this.selectedType = '';
    this.init();
  }
  init() {
    this.element.addEventListener('click', this.selectType.bind(this));
  }
  selectType() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.classList.remove('is-active');
    }
    this.element.classList.add('is-active');
  }
}
