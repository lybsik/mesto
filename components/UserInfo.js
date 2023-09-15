export default class UserInfo {
    constructor({nameSelector, infoSelector}) {
      this._name = document.querySelector(nameSelector);
      this._about = document.querySelector(infoSelector);
    }
  
    getUserInfo() {
      const userInfo = {
        name: this._name.textContent,
        about: this._about.textContent
      }
    return userInfo;
    }
  
    setUserInfo({name, about}) {
      this._name.textContent = name;
      this._about.textContent = about
    }
  }