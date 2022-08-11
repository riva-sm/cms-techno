import { tableGoods } from "./elems.js";
import { currencyFormatRUB } from "./utils.js";

// создаем строки с товарами
export const renderRow = ({ id, title, category, price }) => {
  const goodsRow = document.createElement("tr"); // создаем строку
  goodsRow.classList.add("table-row", "table-goods-item"); // добавляем к строке классы
  goodsRow.dataset.id = id; // добавляем к строке id
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

  tableGoods.append(goodsRow);
};

// рендер таблиц с товарами
export const tableRender = (goods) => {
  tableGoods.textContent = ""; // очищаем верстку
  // заново формируем верстку таблицы с товарами
  goods.forEach(renderRow);
};
