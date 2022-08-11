import { tableRender } from "./tableViewer.js";
import { getGoods } from "./serviceAPI.js";

export const tableController = async () => {
  const goods = await getGoods(); // получаем товары из API
  tableRender(goods);
};
