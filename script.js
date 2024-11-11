document.querySelector('#fetch-food').addEventListener('click', async () => {
    const foodItem = document.querySelector('#food-input').value.trim();
    if (!foodItem) return;
    clearFoodInfo(); //clear previous result
    const response = await fetch(`https://susu-meal-prep.onrender.com/food-details/${foodItem}`);
    const data = await response.json();
    displayFoodInfo(data);
});

function displayFoodInfo(data) {
    // Display basic food info
    document.querySelector('#food-name').innerHTML= data.name;
    document.querySelector('#food-image').src = data.food_image;
    // Display cuisine info
    document.querySelector('#cuisine-name').innerHTML = data.cuisine.name;
    document.querySelector('#cuisine-origin').innerHTML = `Origin: ${data.cuisine.origin}`;
    document.querySelector('#cuisine-image').src = data.cuisine.image ;
}

//click header to clear everything
document.querySelector('header').addEventListener('click', () => {
    clearFoodInfo();
});


function clearFoodInfo() {
    document.querySelector('#food-name').innerHTML = '';
    document.querySelector('#food-image').src = '';
    document.querySelector('#cuisine-name').innerHTML = '';
    document.querySelector('#cuisine-origin').innerHTML = '';
    document.querySelector('#cuisine-image').src = '';
    document.querySelector('#food-input').value = '';  
}