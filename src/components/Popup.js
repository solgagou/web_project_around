export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', (event) => this._handleEscClose(event));
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', (event) => this._handleEscClose(event));
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    const closeButton = this._popup.querySelector('.form_close-button');
    closeButton.addEventListener('click', () => this.close());
    this._popup.addEventListener('click', (event) => {
      if (event.target === this._popup) {
        this.close();
      }
    });
  }
}
       
            
            
            
            