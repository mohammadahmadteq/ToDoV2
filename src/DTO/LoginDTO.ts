export class LoginDTO {
  username: string;
  password: string;

  constructor(loginDTO: any) {
    this.username = loginDTO.username;
    this.password = loginDTO.password;
  }
}
