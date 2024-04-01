import request from '@/utils/request';

import { LoginUser, RegisterUser, UserInfo } from '@/types/user.type';


// 用户登录
export function userLogin(loginUser: LoginUser) {
  return request.post('/login', {...loginUser}, {headers: { isToken: false }})
}

// 用户注册
export function userReigster(registerUser: RegisterUser) {
  return request.post('/user/register', {...registerUser}, { headers: { isToken: false }})
}

// 注销
export function logout() {
  return request.post('/logout');
}

// 获取用户信息
export function getUserInfo(userId: string) {
  return request.get('/user/userInfo', {params: { userId}})
}

// 保存用户信息
export function saveUserInfo(userInfo: UserInfo) {
  return request.put('/user/userInfo', {...userInfo})
}