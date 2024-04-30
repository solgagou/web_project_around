export class Card  {
    constructor(title, link, template) {
        this.title = title;
        this.link = link;
        this.template = template;
    }

    _getCardClone() {
        this.card = this.template.cloneNode(true).content.querySelector(".card");
    }
    _handleLike() {
        this.likeButton = this.card.querySelector(".card__button");

    
    }
    _handleRemoveCard() {
        this.deleteButton = this.card.querySelector(".card__delete-button");

        this.deleteButton.addEventListener("click", function () {
            this.card.remove();
          });
    }
    _handleOpenImageCard() {
        this.cardImage.addEventListener("click", function () {
            handleOpenImage(title, link);
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
    _setEventListeners() {
        this.likeButton.addEventListener("click", function () {
            this.likeButton.classList.toggle("card__button_active");
      });
       // inputList = Array.from(formElement.querySelectorAll(".form__input"));
     // inputList.forEach((inputElement) => {
       // inputElement.addEventListener("input", function () {
        //checkInputValidity(formElement, inputElement);
     // });
    //});
    }

    generateCard() {
        this._getCardClone();
        this._setProperties();
        this._setEventListeners();

        return this.card
    }
    
}