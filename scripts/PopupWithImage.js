/*-Creación de la clase PopupWithImage
Crea la clase PopupWithImage como una clase hija de Popup. 
Esta clase tiene que cambiar el método padre open(). 
En el método open() de la clase PopupWithImage, debes añadir una imagen al popup y
 el correspondiente atributo de imagen src junto con una leyenda para la imagen.
*/

export class PopupWithImage extends Popup {
        open(imageSrc, imageCaption) {
          const imageElement = this.popup.querySelector('.popup__image');
          const captionElement = this.popup.querySelector('.popup__title');
      
          imageElement.src = imageSrc;
          imageElement.alt = imageCaption;
          captionElement.textContent = imageCaption;
          
          super.open();
        }
      }