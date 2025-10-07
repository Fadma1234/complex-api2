//psuedo code
// Use data returned from one api to make a request to another api and display the data returned
//find two working apis one for random meals and a second one for deserts
//test my apis on postman make sure thay are working 
//create my event listener and make it run my functions
//use to functions with fetch inside to get my data
//make sure th data is working and displayed in the DOM
//use catch for both my fegit tches 
//call second function inside the first one and make sure its working
//https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert
//i had to go back to this and fix it it was only showing one meal and one desert now it shows random ones 
document.querySelector('button').addEventListener('click', getInfo);

function getInfo() {

  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const randomIndex = Math.floor(Math.random() * data.meals.length);
      document.querySelector('#meal-image').src = data.meals[randomIndex].strMealThumb;


      getDesrect();
    });
}

function getDesrect() {
  const url1 = `https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert`;

  fetch(url1)
    .then(res => res.json())
    .then(info => {
      console.log(info);
      const randomIn = Math.floor(Math.random() * info.meals.length);

      document.querySelector('#dessert-image').src = info.meals[randomIn].strMealThumb;
    });
}











































