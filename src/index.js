// todo class
class Todo {
  constructor() {
    // dom elements
    this.form = document.querySelector('.todo-form');
    this.input = document.getElementById('title');
    this.list = document.querySelector('.todo-list');

    // payload
    this.todoArr = [];
  }

  get value() {
    return this.input.value;
  }

  get hasItem() {
    return this.todoArr.filter(({ title }) => title === this.value).length > 0;
  }

  get validation() {
    if (this.value.length < 1 || this.hasItem) {
      // add error class
      this.input.classList.add('is-error');

      return false;
    }

    // remove error class
    this.input.classList.remove('is-error');

    return true;
  }

  set arr(title) {
    return this.todoArr.push({ title });
  }

  setEmpty() {
    this.input.value = "";
  }

  createList(value) {
    // create element
    const li = document.createElement('li');

    // set class name
    li.setAttribute('class', 'todo-list__item');

    // set html
    li.innerHTML = `
      <span>${value}</span>
      <button class="button button-xs" type="button">remove</button>
    `;

    return li;
  }

  saveItem() {
    this.form.onsubmit = (e) => {
      e.preventDefault();

      // validation
      if (!this.validation) {
        return false;
      }

      // add item to arr
      this.arr = this.value;

      // render html
      this.list.appendChild(
        this.createList(this.value)
      );

      // clear input value
      this.setEmpty();
    }
  }

  init() {
    // methods
    this.saveItem();
  }
}

// init todo class
new Todo().init();