// импортируем нужные модули
import { modalBtn, modal } from "./elems.js";
import { formController } from "./formController.js";
import { modalController } from "./modalController.js";
import { previewController } from "./previewController.js";
import { tableController } from "./tableController.js";

const init = () => {
  // контроллер модального окна
  modalController({
    modal,
    btn: modalBtn,
    classOpen: "d-block",
    classClose: "btn-close",
  });
  // контроллер превью загруженного изображения
  previewController();
  // контроллер таблиц товаров
  tableController();
  formController();
};

init();
