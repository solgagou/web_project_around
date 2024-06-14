/* Crea la clase Section para presentar una lista de elementos 
en una página de acuerdo con los siguientes requisitos:

-Contiene un objeto con dos propiedades (items y renderer) como el primer 
parámetro del constructor. La propiedad items funciona como un array de datos, 
que debes añadir a una página cuando se inicializa la clase. 
La propiedad renderer es la función responsable de crear y renderizar los datos en una página.

-El segundo parámetro debe ser un selector de clase CSS donde vas a agregar los elementos de la tarjeta. 

-Almacena un método público que renderiza todos los elementos en la página. 
La función renderer() renderizará cada elemento en una página.

-Almacena un método público llamado addItem() que toma un elemento del DOM y 
lo agrega al contenedor.

La clase Section no tiene marcado. Recibe el marcado a través de la función de 
callback y lo inserta en el contenedor. */


export class Section {
constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
}

renderItems() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }

addItem(element) {
    this._container.prepend(element);
  }
}

