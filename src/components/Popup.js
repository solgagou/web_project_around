export default class Popup {
  constructor(selector) {
    this._popupElement = document.querySelector(selector);
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', (event) => this._handleEscClose(event));
  }

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', (event) => this._handleEscClose(event));
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    const closeButton = this._popupElement.querySelector('.form_close-button');
    closeButton.addEventListener('click', () => this.close());
    this._popup.addEventListener('click', (event) => {
      if (event.target === this._popup) {
        this.close();
      }
    });
  }
}
       
            
            
            
            