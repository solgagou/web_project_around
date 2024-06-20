import Popup from './Popup.js'; 

const miPopupImage = document.querySelector("#popup-add-card");
const popupTitle = document.querySelector(".popup__title");
const popupImage = document.querySelector(".popup__image");

export function handleOpenCardForm() {
  miPopupImage.classList.add("popup_opened");
}

export function handleCloseCardForm() {
  miPopupImage.classList.remove("popup_opened");
}


export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupElement.querySelector('.popup__image');
    this._popupTitle = this._popupElement.querySelector('.popup__title');
  }


    open(imageSrc, imageCaption) {
      this._popupImage.src = imageSrc;
      this._popupImage.alt = imageCaption;
      this._popupTitle.textContent = imageCaption;
      super.open();  
    }
  }
  
  export default PopupWithImage;
    

        
    