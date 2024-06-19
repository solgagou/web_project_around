


export class FormValidator {
    constructor(formElement, settings) {
        this.formElement = formElement;
        this.formSelector = settings.formSelector;
        this.inputSelector = settings.inputSelector;
        this.inactiveButtonClass = settings.inactiveButtonClass;
        this.inputErrorClass = settings.inputErrorClass;
        this.errorClass = settings.errorClass;
        this.buttonElement = this.formElement.querySelector(settings.submitButtonSelector);
        this.inputList = Array.from(this.formElement.querySelectorAll(this.inputSelector));
       
    }

    _showInputError(inputElement, errorMessage) {
        this.formError = this.formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this.inputErrorClass);
        this.formError.textContent = errorMessage;
        this.formError.classList.add(this.errorClass);

    };

    _hideInputError(inputElement) {
        this.formError = this.formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this.inputErrorClass);
        this.formError.classList.remove(this.errorClass);
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
            this.buttonElement.setAttribute("disabled", true);
        } else {
            this.buttonElement.classList.remove(this.inactiveButtonClass);
            this.buttonElement.removeAttribute("disabled");
        }
        ;
    }

    _setEventListeners() {
        this.formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });

        this.inputList.forEach((inputElement) => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState();
            
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
