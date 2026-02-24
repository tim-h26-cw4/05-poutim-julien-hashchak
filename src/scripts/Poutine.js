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
    if ('poulet' in boutonClick.dataset) {
      console.log('adsg');
    }
    this.selectType = this.element.innerText;
    this.updatePhoto();
  }

  updatePhoto(event) {
    const image = this.element.querySelector('img');
    image.classList.add('is-active');

    //for (let i = 0; i < this.types.length; i++) {
    //  const type = this.types[i];
    //  console.log(type);

    // if (type.dataset.poulet) {
    //   image.src = '../assets/images/poulet.png';
    //   console.log('ajdgs');
    // }
    // }
  }
}
