export class Card {
  constructor(item, userId, handleAddLike, handleRemoveLike, handleRemoveCard, handleCardClick) {
    this._title = item.title;
    this._link = item.link;
    this._likes = item.likes;
    this._id = item._id;
    this._owner = item.owner;
    this._userId = userId;
    this._template = document.querySelector(".template-card").content.cloneNode(true);
    this._handleRemoveCard = handleRemoveCard;
    this._handleAddLike = handleAddLike;
    this._handleRemoveLike = handleRemoveLike;
    this._handleCardClick = handleCardClick;

   this._handleLikeButton = this._handleLikeButton.bind(this);
    this._setEventListeners = this._setEventListeners.bind(this);
  }
  
  _getTemplate() {
    return this._template.querySelector(".card").cloneNode(true); 
  }

  _handleRemoveCard() {
    if (this._owner._id === this._userId) {
      this._handleRemoveCard(this._id) 
        .then(() => { 
          this._element.remove(); 
         })
     }
  }

  _handleLikeButton() {
    const hasUserLiked = this._likes.some((like) => like._id === this._userId);
    if (hasUserLiked) {
      this._handleRemoveLike(this._id);
      this._likeButton.classList.remove('card__like-button_active');
      this._likes = this._likes.filter((like) => like._id !== this._userId);
    } else {
      this._handleAddLike(this._id);
      this._likeButton.classList.add('card__like-button_active');
      this._likes.push({ _id: this._userId });
    }
  }

    
  _setEventListeners() {
    this._imageElement.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    });

    this._deleteButton.addEventListener('click', () => {
      this._handleRemoveCard();
    });
    this._likeButton.addEventListener('click', this._handleLikeButton); // Vincular evento de like
  }


  _setProperties() {
    this._imageElement.src = this._link;
    this._imageElement.alt = this._title;
    this._titleElement.textContent = this._title;
  }

  generateCard() {
    this._element = this._getTemplate('.template-card');
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


