export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.button');
    this.selectedType = '';
    this.init();
  }
  init() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];

      type.addEventListener('click', this.selectType.bind(this));
    }
  }
  selectType(event) {
    const boutonClick = event.currentTarget;
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.classList.remove('is-active');
      boutonClick.classList.add('is-active');
    }
    this.selectedType = boutonClick.innerText;
    console.log(this.selectedType);
    this.updatePhoto();
  }

  updatePhoto() {
    const image = this.element.querySelector('img');
    image.classList.add('is-active');
    image.src = `../../assets/images/${this.selectedType}.png`;
  }
}
