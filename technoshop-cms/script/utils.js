// конвертируемЫ изображение в формат base64

export const toBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader(); // считываем файл, который получаем
    reader.addEventListener("loadend", () => {
      // когда файл скачается, возвращаем прочитанный результат
      resolve(reader.result);
    });
    reader.addEventListener("error", (err) => {
      // если произошла ошибка
      reject(err); // выводим ошибку
    });
    reader.readAsDataURL(file);
  });
};

// преобразование валюты по языку сайта
export const currencyFormatRUB = (number) => {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(number);
};
