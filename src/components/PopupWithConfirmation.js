import Popup from './Popup.js'; 

const popupButton = document.querySelector("#deletecard-button");


export class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
      super(popupSelector);
      this._popupButton = this._popupElement.querySelector('.popup__delete-button');
     
    }

}