export class userModel {
  id: number = 0;
  firstname: string = '';
  lastname: string = '';
  username: string = '';
  email: string = '';
  creationDate: Date | undefined;

  constructor(firstname: '', lastname: '', username: '', email: '') {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.email = email;
  }

}



