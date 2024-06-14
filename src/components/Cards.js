export class Card  {
    constructor(title, link, template, handleCardClick) {
        this.title = title;
        this.link = link;
        this.template = template;
        this.handleCardClick = handleCardClick;
    }
    
    _getTemplate() {
        return this._template.cloneNode(true);
      }
    
      _handleLikeButton() {
        this._likeButton.classList.toggle('card__button_active');
      }
    
      _handleRemoveCard() {
        this._element.remove();
        this._element = null; 
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
        this._imageElement.alt = this._name;
        this._titleElement.textContent = this._name;
      }
    
      generateCard() {
        this._element = this._getTemplate();
        this._imageElement = this._element.querySelector('.card__image');
        this._titleElement = this._element.querySelector('.card__title');
        this._likeButton = this._element.querySelector('.card__button');
        this._deleteButton = this._element.querySelector('.card__delete-button');
    
        this._setProperties();
        this._setEventListeners();
    
        return this._element;
      }
    }