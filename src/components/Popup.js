

/* 
Creación de la clase Popup

Crea la clase Popup que abre y cierra la ventana emergente, según los siguientes requisitos:

- El constructor tiene un solo parámetro, que es el selector popup.

- Almacena los métodos públicos open() y close() que abrirán y cerrarán el popup.

- Almacena un método privado llamado _handleEscClose() que almacena la lógica 
para cerrar el popup al pulsar la tecla Esc.

- Almacena un método público llamado setEventListeners() que agrega un 
detector de eventos de click al icono cerrar del popup. La ventana modal 
también debe cerrarse cuando los usuarios hacen clic en el área sombreada 
del formulario.

*/
const popup = document.querySelector(".popup");



popup.style.display = "none";

export function handleClosePopup(popupElement) {
  return function(event) {
    if (event.target === popupElement || event.key === "Escape") {
      popupElement.classList.remove("popup_opened");
    }
  };
}

export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', (event) => this._handleEscClose(event));
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', (event) => this._handleEscClose(event));
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    const closeButton = this._popup.querySelector('.form_close-button');
    closeButton.addEventListener('click', () => this.close());
    this._popup.addEventListener('click', (event) => {
      if (event.target === this._popup) {
        this.close();
      }
    });
  }
}
       
            
            
            
            