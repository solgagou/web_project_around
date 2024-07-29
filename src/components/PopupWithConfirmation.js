import Popup from './Popup.js'; 

const popupButton = document.querySelector("#deletecard-button");


export class PopupWithConfirmation extends Popup {
    constructor(popupSelector, handleOnSubmit) {
      super(popupSelector);
      this._popupButton = this._popupElement.querySelector('.popup__delete-button');
      this._cardId = ""
      this._handleOnSubmit = handleOnSubmit
    }

    open(cardId){
      super.open()
      this._cardId = cardId
    }
    setEventListeners() {
      super.setEventListeners();
      this._popupButton.addEventListener('click', (event) => {
        event.preventDefault();
        this._handleOnSubmit(this._cardId);
        this.close();
      });
    }

    close() {
      super.close()
    }
  }


