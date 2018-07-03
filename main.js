alert("welcome to a new page!");


let buttonOne = document.getElementById('black');
let buttonTwo = document.getElementById('red');

buttonOne.addEventListener('click', () => {
  document.body.style.backgroundColor = 'red';
});

buttonTwo.addEventListener('click', () => {
  document.body.style.backgroundColor = 'black';
});



// var rule1 = {
//         conditions: [
//           new chrome.declarativeContent.PageStateMatcher({
//             pageUrl: { hostEquals: 'www.google.com', schemes: ['https'] },
//             css: ["input[type='password']"]
//           })
//         ],
//         actions: [ new chrome.declarativeContent.ShowPageAction() ]
//       };
//
//
// let buttonThree = document.getElementById('test');
//
// buttonThree.addEventListener('click', () => {
//   document.body.title.style.color = "red";
// });
