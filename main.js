//psuedo code
// Use data returned from one api to make a request to another api and display the data returned
//find two working apis one for random meals and a second one for deserts
//test my apis on postman make sure thay are working 
//create my event listener and make it run my functions
//use to functions with fetch inside to get my data
//make sure th data is working and displayed in the DOM
//use catch for both my fatches 
//call second function inside the first one and make sure its working
//https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert
//i did all the code by myself and forgot to call my second functiion inside the first one and use chat gpt to find out what was wrong I only needed to check my pseudo code to find out 
document.querySelector('button').addEventListener('click', getInfo);

function getInfo() {
  const meal = document.querySelector('input').value;
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      
      document.querySelector('#meal-image').src = data.meals[0].strMealThumb;

     
      getDesrect(); 
    });
}

function getDesrect() {
  const url1 = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert`;

  fetch(url1)
    .then(res => res.json())
    .then(info => {
      console.log(info);

     
      document.querySelector('#dessert-image').src =info.meals[0].strMealThumb;
    });
}











































