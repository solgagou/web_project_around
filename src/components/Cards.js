export class Card {
  constructor(item, userId, handleRemoveCard, handleAddLike, handleRemoveLike) {
    this._title = item.title;
    this._link = item.link;
    this._likes = item.likes;
    this._id = item._id;
    this._owner = item.owner;
    this._userId = userId;
    //this._card = this._getTemplate();
    this._template = document.querySelector(".template-card").content.cloneNode(true);
    this.handleRemoveCard = handleRemoveCard;
    this.handleAddLike = handleAddLike;
    this.handleRemoveLike = handleRemoveLike;
  }

  
  _getTemplate() {
    return this._template.querySelector(".card").cloneNode(true);
    //return template.cloneNode(true).content.querySelector(".template-card");
    //return this._template.content.cloneNode(true);
    
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
    const hasUserLiked = this._likes.some((like) => like._id !== this._userId);
    if (hasUserLiked) {
      this.handleRemoveLike(this._id);
      this._likeButton.classList.add('card__like-button_active');
    } else {
      this.handleAddLike(this._id);
    }
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
    this._likeButton = this._element.querySelector('.card__like-button');
    this._deleteButton = this._element.querySelector('.card__delete-button');
      if (this._owner._id !== this._userId) {
        this._deleteButton.remove();
      }
    this._likesCounter = this._element.querySelector('.card__like-number');
    this._likesCounter.textContent = this._likes.length;
    this._setProperties();
    this._setEventListeners();
    
    return this._element;
  }
}


