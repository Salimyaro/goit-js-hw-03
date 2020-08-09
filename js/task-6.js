// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта(значение свойства name).
// Возвращает общую стоимость продукта(цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   for (const variable of allProdcuts) {
//     if (variable.name === productName) {
//       return variable.price * variable.quantity;
//     }
//   }
//   return 'неверное имя продукта';
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, 'Радар')); // 5200
// console.log(calculateTotalPrice(products, 'Захват')); // 2400
// console.log(calculateTotalPrice(products, 'Дроид')); // 2800
// console.log(calculateTotalPrice(products, 'Дроhид')); // 2800
// console.log(calculateTotalPrice(products, 'Сканер')); // 8100

// function calculateTotalPrice(array, prop) {
//   'use strict';
//   // Write code under this line
//   let result = 0
//   for (const variable of array) {
//     if (variable.name === prop) {
//       result += variable.price * variable.quantity;
//     }
//   }
//   return result
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 }
// ];

// console.log(calculateTotalPrice(products, 'Радар'));
// // 9080

// console.log(calculateTotalPrice(products, 'Сканер'));
// // 10200

// console.log(calculateTotalPrice(products, 'Захват'));
// // 2400

// console.log(calculateTotalPrice(products, 'Дроид'));
// // 2800

const getFriendsByOnlineStatus = allFriends => {
  const friendsByStatus = {
    online: [],
    offline: [],
  };
  for (const friend of allFriends) {
    friendsByStatus[friend.online ? 'online' : 'offline'].push(friend);
  }
  return friendsByStatus;
};
