import { Category } from '@/types/category.type';
import request from '@/utils/request';


// 获取标签列表
export function getCategoryList() {
  return request.get<Category[]>('/category/getCategoryList', {headers: {isToken: false}})
}