import { tableRender } from "./tableViewer.js";
import { getGoods, deleteGoods } from "./serviceAPI.js";
import { modalController } from "./modalController.js";
import { modal, tableGoods } from "./elems.js";

export const tableController = async () => {
  modalController({
    delegation: {
      parent: tableGoods,
      target: ".table-goods-item",
      targetExclude: ".btn-delete",
    },
  });

  // удаление товара
  tableGoods.addEventListener("click", async ({ target }) => {
    // по клику на кнопку удалить
    const delBtn = target.closest(".btn-delete");
    if (delBtn) {
      // если клик по кнопке удалить, находи строку с товаром и удаляем её
      const row = delBtn.closest(".table-goods-item");
      const isDel = !!(await deleteGoods(row.dataset.id)); // находим нужную строку на удаление по id

      if (isDel) {
        row.remove(); // удаляем строку с товаром
      }
    }
  });

  const goods = await getGoods(); // получаем товары из API
  tableRender(goods);
};
