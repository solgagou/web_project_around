export default class UserInfo {
  constructor({ userName, userJob, userAvatar, userId, _id }) {
    this._nameElement = document.querySelector(userName);
    this._jobElement = document.querySelector(userJob);
    this._avatarElement = document.querySelector(userAvatar);
    this._userId = userId;
    this._id = _id;
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
      avatar: this._avatarElement.src,
      user: this._userId,
      _id: this_id
    };
  }

  setUserInfo({ name, job, userId}) {
    if (name) {
      this._nameElement.textContent = name;
    }
    if (job) {
      this._jobElement.textContent = job;
    }
    if (userId) {
      this._userId = userId;
    }
  }


  getUserId() {
    return this._userId;
  }
}


// falta Avatar