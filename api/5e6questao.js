// func1 = () => {
//   const timerRandom = Math.floor(Math.random() * 5000 + 1);

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Method 1 executed");
//       resolve();
//     }, timerRandom);
//   });
// };

// func2 = () => {
//   const timerRandom = Math.floor(Math.random() * 5000 + 1);

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Method 2 executed");
//       resolve();
//     }, timerRandom);
//   });
// };

// Promise.all([func1(), func2()]).then(() => {
//   console.log("terminei");
// });

// async function main() {
//   try {
//     await Promise.all([func1(), func2()]);
//     console.log("terminei");
//   } catch (error) {
//     console.error("error:", error);
//   }
// }

// main();

// for (var i = 0; i <= 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 100);
// }

//ira retornar 4, 4 vezes a cada 100 milisegundos porque o var esta declarada no escopo da função ai ela pode ser
//acessada por todos os metodos para fazer com que o codigo exiba 0, 1, 2, 3 alterando o var por let

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   }
// }

// let x = 24;
// let y = 99;

// [x, y] = [y, x];

// console.log(x,y)

//4 A
// SELECT *
// FROM users
// WHERE created_at BETWEEN '2013-01-01' AND '2013-01-31'
// AND group_id IN (15, 40);

//4 B
// SELECT id, username
// FROM users
// WHERE username = 'leandro'
// AND password = SHA1('senha');

//4 d
// SELECT users.*
// FROM users
// JOIN groups ON users.id = groups.user_id
// JOIN permissions ON groups.id = permissions.groups_id
// WHERE permissions.id IN (55, 80, 48)
// GROUP BY users.id

//11

//const lista = document.querySelectorAll("#nav li");

// for (let i = 0; i < lista.length; i++) {
//   lista[i].addEventListener("click", function () {
//     alert(`cliquei no ${lista[i].textContent}`);
//   });
// }

//12
//#nav li:nth-child(2) {
//  color: red;
//}

//13

// #nav li:nth-child(odd) {
//   color: red;
// }

// #nav li:nth-child(even) {
//   font-weight: bold;
// }

//14
// #nav {
//   display: flex;
//   flex-direction: column-reverse;
// }

//16

// ps -ef | grep node | grep -v grep
