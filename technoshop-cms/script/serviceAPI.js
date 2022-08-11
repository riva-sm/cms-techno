import { API_URI } from "./const.js";

export const getGoods = async () => {
  // получаем товары из базы данных в json формате
  const response = await fetch(`${API_URI}goods/?nopage=true`);
  // если всё хорошо, получаем товары
  if (response.ok) {
    return response.json();
  }
  // иначе показываем ошибку и статус ошибки
  throw new Error(response.status);
};

export const getCategory = async () => {
  // получаем категории из базы данных в json формате
  const response = await fetch(`${API_URI}category`);
  // если всё хорошо, получаем категории
  if (response.ok) {
    return response.json();
  }
  // иначе показываем ошибку и статус ошибки
  throw new Error(response.status);
};
