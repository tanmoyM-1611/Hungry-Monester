const foodsDiv=document.getElementById("main-div");


document.getElementById("button").addEventListener("click",function(){
    document.getElementById('main-div').style.display = 'grid';
    document.getElementById('main-div').innerHTML = "";
    document.getElementById('secondary-div').innerHTML="";
    document.getElementById('secondary-div').style.display = 'none';
    
   
    const inputValue=document.getElementById("input").value;
    if(inputValue!=""){
     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then(res=>res.json())
    .then(data=>displayFood(data))
    .catch(error => alert("Sorrry! , we didn't find this type of food"))
}
else
{
    alert("Please enter the name of the food which you want...")
}
 }) 

const displayFood=foods=>{
   
        console.log(foods.meals);
        const p=foods.meals;
        p.forEach(food => {
        console.log(food.strMeal);
        const foodDiv=document.createElement("div");
        foodDiv.className='food'
        const foodsInfo=`
        <img onclick="foodClick('${food.strMeal}')" src="${food.strMealThumb}"
        <br>
        <h4 class="food-name" onclick="foodClick('${food.strMeal}')" >${food.strMeal}</h4>      
    `
        foodDiv.innerHTML=foodsInfo;
        foodsDiv.appendChild(foodDiv)

    });   
}
function foodClick(foodClicked){
    
    document.getElementById("main-div").style.display='none';
    document.getElementById("secondary-div").style.display='block';
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodClicked}`)
    .then(res=>res.json())
// .then(data=>console.log(data))
   .then(data=> foodDetails(data.meals[0]))
}

const foodDetails=foods=>{
    console.log(foods);
    const secondaryDiv=document.getElementById("secondary-div");
    const  singlefoodDetailsDiv=document.createElement("div")
    const   singlefoodDetails=`
    <img src="${foods.strMealThumb}"
    <br>
    <h3 class='foodName'>${foods.strMeal}</h3>
    <h4 class="ingreduents : ">Ingredients</h4>
    <ul>
    <li>${foods.strIngredient1}</li>
    <li>${foods.strIngredient2}</li>
    <li>${foods.strIngredient3}</li>
    <li>${foods.strIngredient4}</li>
    <li>${foods.strIngredient5}</li>
    </ul>
    `
    console.log(singlefoodDetails);
    singlefoodDetailsDiv.innerHTML=singlefoodDetails;
    secondaryDiv.appendChild(singlefoodDetailsDiv)
    
}

    
