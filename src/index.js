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
