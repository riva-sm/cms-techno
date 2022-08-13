import { tableGoods } from "./elems.js";
import { currencyFormatRUB } from "./utils.js";

// заполняем строку таблицы
const fillingRow = (goodsRow, { id, title, category, price }) => {
  // вставляем ячейки, формируем верстку
  goodsRow.innerHTML = `
   <td>${id}</td>
   <td>${title}</td>
    <td>${category}</td>
    <td class="text-end">${currencyFormatRUB(price)}</td>
    <td class="d-flex">
        <button class="btn-table btn-delete">
             <svg width="30" height="30">
                <use xlink:href="#delete" />
            </svg>
         </button>
    </td>
`;
  return goodsRow;
};

// создаем строки с товарами
export const renderRow = (data) => {
  const goodsRow = document.createElement("tr"); // создаем строку
  goodsRow.classList.add("table-row", "table-goods-item"); // добавляем к строке классы
  goodsRow.dataset.id = data.id; // добавляем к строке id

  tableGoods.append(fillingRow(goodsRow, data));
};

// редактируем строку таблицы с товарами
export const editRow = (data) => {
  const goodsRow = document.querySelector(`[data-id="${data.id}"]`);
  fillingRow(goodsRow, data);
};

// рендер таблиц с товарами
export const tableRender = (goods) => {
  tableGoods.textContent = ""; // очищаем верстку
  // заново формируем верстку таблицы с товарами
  goods.forEach(renderRow);
};
