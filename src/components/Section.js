export class Section {
constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
    this.addItem = this.addItem.bind(this);
    this.renderItems = this.renderItems.bind(this);
}

renderItems() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }

addItem(element) { 
    this._container.prepend(element);
  }
}

