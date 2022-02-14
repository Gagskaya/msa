export interface User {
  id: number;
  login: string;
  password: string;
}

export interface UsersState {
  items: User[];
  item: User;
}
