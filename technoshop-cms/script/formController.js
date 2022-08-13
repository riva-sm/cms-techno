import { category, form, modal } from "./elems.js";
import { closeModal } from "./modalController.js";
import { showPreview } from "./previewController.js";
import { editGoods, getCategory, getGoods, postGoods } from "./serviceAPI.js";
import { editRow, renderRow } from "./tableViewer.js";
import { toBase64 } from "./utils.js";
import { API_URI } from "./const.js";

// обновление всех категорий товаров
const updateCategory = async () => {
  category.textContent = "";
  // очищаем все категории
  const categoryList = await getCategory(); // получаем категории из базы данных
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

  form.addEventListener("submit", async (event) => {
    event.preventDefault(); // отменяем стандартное поведение формы
    const formData = new FormData(form); // создаем объект с данными из формы

    const data = {};
    // перебираем полученные данные и передаем их в объект
    for (const [key, val] of formData) {
      // проверка на пустые поля
      if (val) {
        data[key] = val;
      }
    }
    // проверка на наличие изображения
    if (data.image.size) {
      data.image = await toBase64(data.image);
    } else {
      delete data.image;
    }
    if (data.imagesave) {
      const goods = await editGoods(data);
      editRow(goods);
    } else {
      const goods = await postGoods(data); // отправялем добавленный товар на сервер
      renderRow(goods);
    }

    closeModal(modal, "d-block");
    updateCategory();
  });
};

// заполняем форму данными из строки товара
export const fillingForm = async (id) => {
  const { title, category, description, display, price, image } =
    await getGoods(id);
  form.title.value = title;
  form.category.value = category;
  form.description.value = description.join("\n");
  form.display.value = display;
  form.price.value = price;
  form.imagesave.value = image;
  form.identificator.value = id;
  showPreview(`${API_URI}${image}`);
};
