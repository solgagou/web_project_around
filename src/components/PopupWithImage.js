  import Popup from './Popup.js'; 

  const miPopupImage = document.querySelector("#popup-add-card");
  const popupTitle = document.querySelector(".card__title");
  const popupImage = document.querySelector(".card__image");

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
      this._closeButton = this._popupElement.querySelector('.popup__close-button');
    }

      open(imageSrc, imageCaption) {
        this._popupImage.src = imageSrc;
        this._popupImage.alt = imageCaption;
        this._popupTitle.textContent = imageCaption;
        super.open();  
      }

      _setEventListeners() {
        super._setEventListeners();
        this._closeButton.addEventListener('click', () => this.close()); 
      }
    
    }
    
    export default PopupWithImage;
      

          
      