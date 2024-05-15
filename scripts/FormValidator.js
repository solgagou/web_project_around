export class FormValidator {
    constructor(formElement, settings) {
        this.formElement = formElement;
        this.formSelector = settings.formSelector;
        this.inputSelector = settings.inputSelector;
        this.submitButtonSelector = settings.submitButtonSelector;
        this.inactiveButtonClass = settings.inactiveButtonClass;
        this.inputErrorClass = settings.inputErrorClass;
        this.inactiveButtonClass = settings.inactiveButtonClass;
        this.errorClass = settings.errorClass;
        this.buttonElement = this.formElement.querySelector(settings.submitButtonSelector);
        this.inputList = Array.from(this.formElement.querySelectorAll(this.inputSelector));
    }

    _showInputError(inputElement) {
        this.formError = this.formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add("form__input-error");
        this.formError.textContent = errorMessage;
        this.formError.classList.add("form__input-error_active");

    };

    _hideInputError(inputElement) {
        this.formError = this.formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove("form__input-error");
        this.formError.classList.remove("form__input-error_active");
        this.formError.textContent = "";

    };

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _hasInvalidInput() {
        return this.inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });

    }
    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this.buttonElement.classList.add(this.inactiveButtonClass);
        } else {
            this.buttonElement.classList.remove(this.inactiveButtonClass);
        }

    }

    _setEventListeners() {
        this.formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this.inputList.forEach((inputElement) => {
            this._checkInputValidity(inputElement);
            
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            }) 
        })
    }

    enableValidation() {
        this._setEventListeners();
        this._toggleButtonState();
    }

}

/* const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(".form"));
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
  
      setEventListeners(formElement);
    });
  };
  
  enableValidation(); */