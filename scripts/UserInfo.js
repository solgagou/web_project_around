/* La clase UserInfo es responsable de presentar información sobre el usuario 
en la página. Esta clase debe:

-Llevar al constructor un objeto con los selectores de dos elementos: 
uno que contiene el nombre del usuario, y otro que contiene el trabajo del usuario.

-Almacenar un método público llamado getUserInfo(), que devuelve un objeto 
con información sobre el usuario. Este método será útil para casos en los que es
 necesario mostrar los datos del usuario en el formulario abierto.

Almacena un método público llamado setUserInfo(), que toma los datos del 
nuevo usuario y los agrega en la página.*/


export class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
    };
  }

  setUserInfo({ name, job }) {
    if (name) {
      this._nameElement.textContent = name;
    }
    if (job) {
      this._jobElement.textContent = job;
    }
  }
}