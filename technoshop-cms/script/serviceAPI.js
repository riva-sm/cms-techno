import { API_URI } from "./const.js";
// получаем товары из базы данных в json формате
export const getGoods = async (id) => {
  // если есть id, то возвращаем товар с тем id, либо же отображаем все товары
  const response = await fetch(
    `${API_URI}api/goods/${id ? id : "?nopage=true"}`
  );
  // если всё хорошо, получаем товары
  if (response.ok) {
    return response.json();
  }
  // иначе показываем ошибку и статус ошибки
  throw new Error(response.status);
};

// отправляем товары на сервер
export const postGoods = async (data) => {
  // получаем товары из базы данных в json формате
  const response = await fetch(`${API_URI}api/goods`, {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  // если всё хорошо, отправяем товары
  if (response.ok) {
    return response.json();
  }
  // иначе показываем ошибку и статус ошибки
  throw new Error(response.status);
};

export const getCategory = async () => {
  // получаем категории из базы данных в json формате
  const response = await fetch(`${API_URI}api/category`);
  // если всё хорошо, получаем категории
  if (response.ok) {
    return response.json();
  }
  // иначе показываем ошибку и статус ошибки
  throw new Error(response.status);
};
