import { Role } from "./Role";

export class Users {
    id: number = 0;
    username: string = '';
    password: string = '';
    correo: string = '';
    roles: Role[] = new Array<Role>();
  }