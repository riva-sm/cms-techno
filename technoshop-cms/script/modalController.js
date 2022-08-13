import { form, modal, modalTitle, modalSubmitBtn } from "./elems.js";
import { hidePreview } from "./previewController.js";
import { fillingForm } from "./formController.js";

// открытие модального окна
const openModal = (id) => {
  if (id) {
    fillingForm(id); // заполняем форму
  } else {
  }
  modal.classList.add("d-block");
};
// закрытие модального окна
export const closeModal = () => {
  modal.classList.remove("d-block");
  form.reset(); // очищаем поля формы
  form.identificator.value = ""; // очищаем скрытое поле идентификатора
  form.imagesave.value = ""; // очищаем скрытое поле с изображением
  hidePreview(); // удаляем изображение
};

export const modalController = ({ btn, delegation }) => {
  if (btn) {
    btn.addEventListener("click", () => {
      modalTitle.textContent = "Добавить новый товар";
      modalSubmitBtn.textContent = "Добавить товар";
      // по нажатию на кнопку добавить товар открываем модальное окно
      openModal();
    });
  }
  // по клику на родительский элемент
  if (delegation) {
    delegation.parent.addEventListener("click", ({ target }) => {
      const goodsRow = target.closest(delegation.target); // проверяем, есть ли класс строки, если нет, поднимаемся элементом выше
      const targetExclude = target.closest(delegation.targetExclude);
      if (goodsRow && !targetExclude) {
        // если является строкой и не является исключением (крестик кнопка закрытия модального окна)
        modalTitle.textContent = `Изменить товар #${goodsRow.dataset.id}`;
        modalSubmitBtn.textContent = "Изменить товар";
        // открываем модальное окно по клику на строку товара
        openModal(goodsRow.dataset.id);
      }
    });
  }
  // если клик мимо модального окна или по крестику, модальное окно закрывается
  modal.addEventListener("click", ({ target }) => {
    if (target === modal || target.classList.contains("btn-close")) {
      closeModal();
    }
  });
};
