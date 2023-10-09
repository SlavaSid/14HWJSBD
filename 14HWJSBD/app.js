// Задание 1

// Вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
// Сообщение номер 1
// Сообщение номер 2
// Сообщение номер 3
// Сообщение номер 4
// Сообщение номер 5

// let i = 1;
 
// const printNumbers = setInterval(() => {
   
//     console.log(`Сообщение номер  ${i}`);
//     i = i + 1;
//     if (i > 5) {
//     clearInterval(printNumbers);
//   }
// }, 2000);

// Задание 2

// Сделать виджет - цифровые часы, оформить по желанию.

// Вам нужно будет каждую секунду запускать функцию, которая будет создавать новый объект Date и забирать из него необходимую информацию.
// const clock = document.querySelector('.clock');
// const outTime = () => {
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     if(hours < 10){
//         hours = '0' + hours;
//     };
//     if(minutes < 10){
//         minutes = '0' + minutes;
//     };
//     if(seconds < 10){
//         seconds = '0' + seconds;
//     };
//     clock.textContent = `${hours}:${minutes}:${seconds}`;
// }
// setInterval(outTime, 1000);

// Задание 3

// По данному url расположена задача:

// https://jsonplaceholder.typicode.com/todos/1

// В html предусмотреть <div></div>

// Достать с сервера заголовок задачи и отобразить его в div.


// const div = document.querySelector('.wrapper');
// const response = (headers) =>{

// div.insertAdjacentText('afterbegin', headers.title)
    
//   };

// let xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

// xhr.send();

// xhr.onload = function() 
//   const headers = JSON.parse(xhr.response);
//   response(headers);
// }

// Задание 4

// Запросом на сервер по url https://jsonplaceholder.typicode.com/todos достать задачи.

// Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи.

const ul = document.querySelector('.addli');
const renderTask = (task) => {
 task.forEach((element, index) => {
  if(index < 20){
 ul.insertAdjacentHTML('beforeend', ` <li>${element.title}</li>`);
};
  });
};

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');

xhr.send();

xhr.onload = function() {
   const task = JSON.parse(xhr.response);
   renderTask(task);
};
