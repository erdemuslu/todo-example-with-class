// todo class
class Todo {
  constructor() {
    // dom elements
    this.form = document.querySelector('.todo-form');
    this.input = document.getElementById('title');

    // payload
    this.todoArr = [];
  }

  get value() {
    return this.input.value;
  }

  set list(title) {
    if (title.length !== 0) {
      return this.todoArr.push({ title })
    }
  }

  saveItem() {
    this.form.onsubmit = () => {
      event.preventDefault();

      this.list = this.value;

      //
      this.render();
    }
  }

  render() {
    console.log(this.todoArr);
  }

  init() {
    // methods
    this.saveItem();
  }
}

// init todo class
new Todo().init();
