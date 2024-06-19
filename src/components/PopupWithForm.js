/*-Creación de la clase PopupWithForm
Crea PopupWithForm como una clase hija de Popup. La clase PopupWithForm debe cumplir con los siguientes requisitos:

-Lleva un callback del envío del formulario al constructor, así como el selector popup.

-Almacena un método privado llamado _getInputValues(), que recopila datos de todos los campos de entrada.

-Modifica el método padre setEventListeners(). El método setEventListeners() de la 
clase PopupWithForm debe agregar al formulario un controlador de eventos submit y 
el detector de eventos click para el icono cerrar.

-Modifica el método padre close() para reiniciar el formulario cuando se ha cerrado el popup.

Crea una instancia de la clase PopupWithForm para cada popup.
*/
import Popup from './Popup.js';

const inputProfileName = document.querySelector("#input-name");
const inputProfileJob = document.querySelector("#input-job");


export function handleOpenProfileForm() {
  popup.style.display = "flex";
}

export function handleCloseProfileForm() {
  popup.style.display = "none";

}

export function handleCloseProfileFormEvent(event) {
  if (event.target === popup || event.key === "Escape") {
    handleCloseProfileForm();
  }
}

export function handleOpenProfileSubmit(evt) {
  evt.preventDefault();

  const profileNameElement = document.querySelector(".profile__name");
  const profileJobElement = document.querySelector(".profile__job");

  profileNameElement.textContent = inputProfileName.value;
  profileJobElement.textContent = inputProfileJob.value;

  handleCloseProfileForm();
}

export class PopupWithForm extends Popup {
    constructor(selector, handleFormSubmit) {
        super(selector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popup.querySelector('form');
      }
    
    _getInputValues() {
      const inputs = Array.from(this._formElement.querySelectorAll('input'));
      const formValues = {};
      inputs.forEach(input => {
      formValues[input.name] = input.value;
     });
     return formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}
    