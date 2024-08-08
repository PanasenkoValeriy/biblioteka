// task 1

// const keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";"];
// let currentKeyIndex = 0;

// const keyElement = document.getElementById("key");
// const newGameButton = document.getElementById("new-game");

// function updateKey() {
//   keyElement.textContent = keys[currentKeyIndex];
// }

// function newGame() {
//   currentKeyIndex = 0;
//   updateKey();
//   PNotify.success({
//     text: "Нова гра розпочата!",
//     delay: 2000,
//   });
// }

// document.addEventListener("keydown", function (event) {
//   const pressedKey = event.key.toUpperCase();
//   if (pressedKey === keys[currentKeyIndex]) {
//     PNotify.success({
//       text: `Правильно! Ви натиснули: ${pressedKey}`,
//       delay: 2000,
//     });
//     currentKeyIndex++;
//     if (currentKeyIndex < keys.length) {
//       updateKey();
//     } else {
//       PNotify.success({
//         text: "Вітаємо! Ви пройшли гру!",
//         delay: 2000,
//       });
//       newGame();
//     }
//   } else {
//     PNotify.error({
//       text: `Неправильна клавіша! Ви натиснули: ${pressedKey}`,
//       delay: 2000,
//     });
//   }
// });

// document.addEventListener("keypress", function (event) {
//   event.preventDefault();
// });

// newGameButton.addEventListener("click", newGame);

// newGame();

// task 2
// const chartData = {
//   labels: [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "11",
//     "12",
//     "13",
//     "14",
//     "15",
//     "16",
//     "17",
//     "18",
//     "19",
//     "20",
//     "21",
//     "22",
//     "23",
//     "24",
//     "25",
//     "26",
//     "27",
//     "28",
//     "29",
//     "30",
//   ],
//   datasets: [
//     {
//       label: "Продажі за останній місяць",
//       data: [
//         150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
//         600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
//         1250, 1300, 1350,
//       ],
//       backgroundColor: "rgba(33, 150, 243, 0.2)",
//       borderColor: "#2196f3",
//       borderWidth: 2,
//       fill: true,
//       tension: 0.1,
//     },
//   ],
// };

// const ctx = document.getElementById("sales-chart").getContext("2d");
// const salesChart = new Chart(ctx, {
//   type: "line",
//   data: chartData,
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });
