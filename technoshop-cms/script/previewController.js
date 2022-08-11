import { form, preview } from "./elems.js";
import { toBase64 } from "./utils.js";

// отображаем изображение после загрузки
export const showPreview = (src) => {
  preview.style.display = "block";
  preview.src = src;
};

export const hidePreview = () => {
  preview.style.display = "";
  preview.src = "";
};

export const previewController = () => {
  const imageFile = form.image; // отлавливаем кнопку добавить изображение (инпут загрузка файла)
  image.addEventListener("change", async () => {
    // запускаем асинхронно функцию загрузки изображения
    if (imageFile.files.length) {
      // проверяем, есть ли файл

      // загружаем выбранное изображение в формате base64
      const src = await toBase64(imageFile.files[0]);
      showPreview(src); // отображаем загруженную картинку
    }
  });
};
