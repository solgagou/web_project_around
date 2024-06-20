
export function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const newCard = new Card(inputCardTitle.value, inputCardLink.value, document.querySelector(".template-card"), handleOpenImage);
  cardArea.prepend(newCard.generateCard());
  handleCloseCardForm();
} 

export class Card {
  constructor(title, link, template, handleCardClick) {

    this._title = title;
    this._link = link;
    this._template = template;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return this._template.content.cloneNode(true);
  }

  _handleLikeButton() {
    this._likeButton.classList.toggle('card__button_active');
  }

  _handleRemoveCard() {
    this._cardElement.remove()
  }

  _setEventListeners() {
    this._imageElement.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link); 
    });

    this._deleteButton.addEventListener('click', () => {
      this._handleRemoveCard();
    });

    this._likeButton.addEventListener('click', () => {
      this._handleLikeButton();
    });
  }

  _setProperties() {
    this._imageElement.src = this._link;
    this._imageElement.alt = this._title;
    this._titleElement.textContent = this._title;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._cardElement = this._element.querySelector('.card');
    this._imageElement = this._element.querySelector('.card__image');
    this._titleElement = this._element.querySelector('.card__title');
    this._likeButton = this._element.querySelector('.card__button');
    this._deleteButton = this._element.querySelector('.card__delete-button');

    this._setProperties();
    this._setEventListeners();

    return this._element;
  }
}