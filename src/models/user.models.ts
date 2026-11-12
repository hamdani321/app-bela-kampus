export class User {
  id: number = 0;
  name: string = "";
  email: string = "";
}

export interface UserResponse {
  message: string;
  data: User[];
}
