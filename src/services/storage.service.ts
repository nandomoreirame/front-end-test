import { UserInterface } from 'src/interfaces';

class StorageService {
  private storageKey = 'REACT_USER_LOGGED';
  private data = '{}';

  get storageData() {
    return this.data;
  }

  set setStorageData(user: UserInterface) {
    this.data = JSON.stringify(user);
  }

  get isUserLogged() {
    return !!localStorage.getItem(this.storageKey);
  }

  get loggedUser() {
    return JSON.parse(localStorage.getItem(this.storageKey) || this.data);
  }

  loginUser(user: UserInterface) {
    this.setStorageData = user;
    localStorage.setItem(this.storageKey, this.storageData);
  }

  logoutUser() {
    localStorage.removeItem(this.storageKey);
  }
}

export default new StorageService();
