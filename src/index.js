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

  setEmpty() {
    this.input.value = "";
  }

  validation() {
    if (this.value.length < 1) {
      // add error class
      this.input.classList.add('is-error');

      return false;
    }

    // remove error class
    this.input.classList.remove('is-error');

    return true;
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
    this.form.onsubmit = () => {
      event.preventDefault();

      // validation
      this.validation();

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
