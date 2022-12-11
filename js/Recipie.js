// get all html elements into dom


var recipie = document.querySelector('#EnterRecipies');
var searchResult = document.querySelector('.searchResult');
var submit = document.querySelector('#submitInput');
var Outputrecipies = document.querySelector('.Outputrecipies');
var form = document.querySelector('form');
const app_id = 'f3db6593';
const app_key = 'ae0e0cc371f72dcdd51855b20db4f95b';









window.onload = ()=>{
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
       
     
        //https://api.edamam.com/search?q=pizza&app_id=${app_id}&app_key=${app_key}
       
        // fetch(api)
        // .then((response)=>{
        //     return response.json()
        // })
        // .then((data)=>{
        //     console.log(data);
        // })

        fetchApi();

    })
}



async function fetchApi(){
    var searchValue = recipie.value;
    console.log(searchValue);
    const api = `https://api.edamam.com/search?q=${searchValue}&app_id=${app_id}&app_key=${app_key}&to=20`;
    
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    genarateHtml(data.hits);
}


function genarateHtml(results){
    let generatedHTML = ''
    results.map((res)=>{
        generatedHTML+= 
        `
        <div class="col-12 col-sm-6  col-md-6 col-lg-4 mb-4 mb-sm-4 mb-md-4 mb-lg-4">
        <div class="Foodcard">
            <div class="Imgwrap">
                <img src="${res.recipe.image}" alt="foodrecipie_icon" class="ImageHold">
            </div>
            <div class="FoodCardContent d-block my-4">
                <h5 class="foodRecipieTitle mb-2">${res.recipe.label}</h5>
                <a href="${res.recipe.url}" target="_blank" class="RecipieLink">view recipie</a>
            </div>
            <div class="DietContent mb-3">
            <p>Calories : <span>${res.recipe.calories.toFixed(2)}</span></p>
            </div>
            <p class="dishcontent mb-3">Dish Type: <span>${res.recipe.dishType}</span></p>
            <p class="mealtype">Meal Type: <span>${res.recipe.mealType}</span></p>
        </div>
    </div>
        `
    })
    Outputrecipies.innerHTML = generatedHTML;
}







