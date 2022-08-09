import { modalInputs } from "./elems.js";
import { hidePreview } from "./previewController.js";

// открытие модального окна
const openModal = (modal, classOpen) => {
  modal.classList.add(classOpen);
};
// закрытие модального окна
const closeModal = (modal, classOpen) => {
  modal.classList.remove(classOpen);
};

// очищаем поля формы
const resetInputs = () => {
  modalInputs.forEach((input) => {
    input.value = "";
  });
};

export const modalController = ({ modal, btn, classOpen, classClose }) => {
  btn.addEventListener("click", () => {
    // по нажатию на кнопку добавить товар открываем модальное окно
    openModal(modal, classOpen);
  });
  // если клик мимо модального окна или по крестику, модальное окно закрывается
  modal.addEventListener("click", ({ target }) => {
    if (target === modal || target.classList.contains(classClose)) {
      closeModal(modal, classOpen);
      hidePreview(); // удаляем изображение после закрытия модального окна
      resetInputs(); // очищаем поля формы после закрытия модального окна
    }
  });
};
