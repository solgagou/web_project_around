
  const formElement = document.querySelector(".form");
  const inputElement = formElement.querySelector(".form__input");
  


  
  const showInputError = (formElement, inputElement, errorMessage) => {
    const formError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("form__input-error");
    formError.textContent = errorMessage;
    formError.classList.add("form__input-error_active");
  
  };
  
  const hideInputError = (formElement, inputElement) => {
    const formError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("form__input-error");
    formError.classList.remove("form__input-error_active");
    formError.textContent = "";

  };

  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElementf, inputElement);
    }
  };
  
  
  const setEventListeners = (formElement, inputElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".form__input"));
      inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement);
      });
    });
  };

  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(".form"));
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
  
      setEventListeners(formElement);
    });
  };
  
  enableValidation();
  
  enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
  });


    
  
