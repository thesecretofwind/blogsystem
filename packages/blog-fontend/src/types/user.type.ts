export interface LoginUser {
  username: string;
  password: string;
};

export interface RegisterUser extends LoginUser {
  nickName: string;
  email: string;
}

export interface UserInfo {
  nickName: string;
  email: string;
  avatar: string;
  sex: '0' | '1'
}