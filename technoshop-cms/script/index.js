// импортируем нужные модули
import { modalBtn, modal } from "./elems.js";
import { formController } from "./formController.js";
import { modalController } from "./modalController.js";
import { previewController } from "./previewController.js";
import { sortController } from "./sortController.js";
import { tableController } from "./tableController.js";

const init = () => {
  // контроллер модального окна
  modalController({
    btn: modalBtn,
  });
  // контроллер превью загруженного изображения
  previewController();
  // контроллер таблиц товаров
  tableController();
  formController(); // контроллер форм в модальном окне
  sortController(); // контроллер сортировки по полям таблицы
};

init();
