export class userModel {
  id: number = 0;
  firstname: string = '';
  lastname: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  creationDate: Date | undefined;

  constructor(firstname: '', lastname: '', username: '', email: '', password: '') {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.email = email;
    this.password = password;
  }

}



