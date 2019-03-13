// todo class
class Todo {
  constructor() {
    // dom elements
    this.form = document.querySelector('.todo-form');
    this.input = document.getElementById('title');
    this.list = document.querySelector('.todo-list');
    this.formFooter = document.querySelector('.todo-form-row--footer');

    // payload
    this.todoArr = [];
    this.targetIndex = null;
    this.message = 'title is empty or already exist!'
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

      // append error message
      this.handleError();

      return false;
    }

    // remove error message
    document.querySelector('.error') !== null ? document.querySelector('.error').remove() : null;

    // remove error class
    this.input.classList.remove('is-error');

    return true;
  }

  /**
   * @param {string} title
  */
  set arr(title) {
    return this.todoArr.push({ title });
  }

  setEmpty() {
    this.input.value = "";
  }

  findAndRemove(value) {
    this.todoArr.map((item, index) => {
      if (item.title === value) {
        return this.targetIndex = index;
      }
    });

    this.todoArr.splice(this.targetIndex, 1);
  }

  createEl({ name, className, html }) {
    // create element
    const item = document.createElement(name);

    // set class name
    item.setAttribute('class', className);

    // set html
    item.innerHTML = html;

    return item;
  }

  handleError() {
    if (document.querySelector('.error') === null) {
      this.formFooter.appendChild(
        this.createEl({
          name: 'div',
          className: 'error',
          html: this.message
        })
      );
    }
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
        this.createEl({
          name: 'li',
          className: 'todo-list__item',
          html: `
            <span>${this.value}</span>
            <button class="button button-xs" data-type="remove-item" type="button">remove</button>
          `
        })
      );

      // clear input value
      this.setEmpty();
    }
  }

  removeItem() {
    document.onclick = ({ target }) => {
      if (target.getAttribute('data-type') === 'remove-item') {
        // remove item from array
        this.findAndRemove(target.previousElementSibling.innerText);

        // define parent item
        const li = target.closest('li');

        // hide el
        li.classList.add('is-hidden');

        // remove el
        setTimeout(() => {
          li.remove();
        }, 321);
      }
    }
  }

  init() {
    // methods
    this.saveItem();
    this.removeItem();
  }
}

// init todo class
new Todo().init();