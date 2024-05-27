

export class Card  {
    constructor(title, link, template, handleOpenImage) {
        this.title = title;
        this.link = link;
        this.template = template;
        this.handleOpenImage = handleOpenImage;
    }
    
    _getCardClone() {
        this.card = this.template.cloneNode(true).content.querySelector(".card");
    }

    _handleLike() {
        this.likeButton = this.card.querySelector(".card__button");
    
    }

    _handleRemoveCard() {
        this.deleteButton = this.card.querySelector(".card__delete-button");
        this.deleteButton.addEventListener("click", () => {
            this.card.remove();
          });
    }

    _handleOpenImageCard() {
        this.cardImage = this.card.querySelector(".card__image");
        this.cardImage.addEventListener("click", () => {
        const PopUpShowImage = document.querySelector("#popup-show-image");
        this.handleOpenImage(PopUpShowImage, this.title, this.link); 
    
        });
    }

    _setProperties() {
        this.cardImage = this.card.querySelector(".card__image");
        this.cardTitle = this.card.querySelector(".card__title");
        this.likeButton = this.card.querySelector(".card__button");
        this.cardImage.src = this.link;
        this.cardTitle.textContent = this.title;
        this.cardImage.alt = this.title;
           
    }
    _setEventListeners(handleOpenImage) {
        this.likeButton.addEventListener("click", () => {
            this.likeButton.classList.toggle("card__button_active");
      });
    
        this._handleRemoveCard();
        this._handleOpenImageCard(handleOpenImage);
    }

    generateCard() {
        this._getCardClone();
        this._setProperties();
        this._setEventListeners();

        return this.card
    }
    
    }
