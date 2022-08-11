import { category } from "./elems.js";
import { getCategory } from "./serviceAPI.js";

// обновление всех категорий товаров
const updateCategory = async () => {
  category.textContent = "";
  // очищаем все категории
  const categoryList = await getCategory(); // получаем категории из базы данных
  console.log("categoryList ", categoryList);
  const categoryOption = categoryList.map((cat) => {
    // перебираем значения категорий, создаем эелемент новую категорию
    const option = document.createElement("option");
    option.value = cat;
    return option;
  });
  category.append(...categoryOption);
};

export const formController = () => {
  updateCategory();
};
