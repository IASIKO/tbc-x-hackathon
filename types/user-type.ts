export interface UserInfo {
  age: number | null;
  userName: string;
  email: string;
  password: string;
}

export interface UserLoginInfo {
  email: string;
  password: string;
}
