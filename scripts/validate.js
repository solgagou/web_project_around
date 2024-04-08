enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
  });


  const formElement = document.querySelector(".form");
  const formInput = formElement.querySelector(".form__input");
  const formError = formElement.querySelector(`.${formInput.id}-error`);


  
  const showInputError = (element, errorMessage) => {
    element.classList.add("form__input-error");
    // Muestra el mensaje de error
    formError.textContent = errorMessage;
    formError.classList.add("form__input-error_active");
  
  };
  
  const hideInputError = (element) => {
    element.classList.remove("form__input-error");
    // Oculta el mensaje de error
    formError.classList.remove("form__input-error_active");
     // Restablece el error
    formError.textContent = "";

  };

  const isValid = () => {
    if (!formInput.validity.valid) {
      // Si NO lo es (!), muestra el elemento erróneo// El propio mensaje de error es el segundo parámetro de la función
      showInputError(formInput, formInput.validationMessage);
    } else {
      // Si es válido, oculta el elemento erróneo
      hideInputError(formInput);
    }
  };
  
  formElement.addEventListener("submit", function (evt) {
    // Cancela la acción del navegador por defecto, de modo que al hacer clic en el botón "Enviar" no se actualice la página
    evt.preventDefault();
  });
  
  // Llama a la función isValid() para cada entrada de caracteres
  formInput.addEventListener("Input se ejecuta", isValid);
  

  
    
    
  
