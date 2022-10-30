//Variables
var sideDish = ['Mac and Cheese','Fries','Coleslaw','Potato Salad','Onion Rings']
var mainDish = ['Wings','Cherry Cricket Burger','Bison Burger','Turkey Burger','Enchilada']
var dessertDish = ['Brownies','Milkshake','Peach Crumble','Donuts']

//querySelect
var slSide = document.querySelector('#sideSl')
var slMain = document.querySelector('#mainSL')
var slDessert = document.querySelector('#dessertSL')
var slMeal = document.querySelector('#mealSL')
var cookBtn = document.querySelector('#cook')
var foodItem = document.getElementById('food-item')
var showFoodSl = document.querySelector('.food-idea')
var crocpotBox = document.querySelector('.svg')

//eventslisterner 

//when click button with chosen radio, it randomly select things in the radio array, and display the text in the crocpot box
cookBtn.addEventListener('click',function(){
    // swap();
    letsCook();
 })

 function letsCook(){
    var sideId = getRandomIndex(sideDish)
    var mainId = getRandomIndex(mainDish)
    var dessertId = getRandomIndex(dessertDish)
 
    if(slSide.checked === true){
       foodItem.innerText = sideDish[sideId];
       console.log(sideDish[sideId])
       }else if(slMain.checked === true){
          foodItem.innerText = mainDish[mainId];
       }else if(slDessert.checked === true){
          foodItem.innerText = dessertDish[dessertId];
    } 
}

//function
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
 }