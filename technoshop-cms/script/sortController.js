import { wrapperSort } from "./elems.js";
import { getGoods } from "./serviceAPI.js";
import { tableRender } from "./tableViewer.js";

// сортировка полей таблицы
export const sortController = () => {
  wrapperSort.addEventListener("click", async ({ target }) => {
    const sortField = target.dataset.sort; // получаем значение поля для сортировки
    if (sortField) {
      const goods = await getGoods();

      switch (sortField) {
        case "id":
        case "price":
          // проверяем направление сортировки (по убыванию или по возрастанию)
          if (target.dataset.direction === "up") {
            target.dataset.direction = "down";
            goods.sort((a, b) => (a[sortField] > b[sortField] ? -1 : 1)); // функция сортировки возвращает 1 или -1
          } else {
            target.dataset.direction = "up";
            goods.sort((a, b) => (a[sortField] > b[sortField] ? 1 : -1));
          }
          break;
        case "title":
        case "category":
          if (target.dataset.direction === "up") {
            target.dataset.direction = "down";
            goods.sort((a, b) =>
              b[sortField].localeCompare(a[sortField], "ru")
            ); // функция сортировки возвращает 1 или -1
          } else {
            target.dataset.direction = "up";
            goods.sort((a, b) =>
              a[sortField].localeCompare(b[sortField], "ru")
            ); // функция сортировки возвращает 1 или -1
          }
          break;
      }
      tableRender(goods);
    }
  });
};
