const show = () => {
    const input = document.getElementById('searchInput').value;
    const show = document.getElementById('showing')
    const api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;

    fetch(api).then(res => res.json()).then(data => {
        const recipe = data.meals;
        if(recipe){
            recipe.forEach(recipe => {
                const div = document.createElement('div');
                div.innerHTML = `
                <h3>${recipe.strMeal}</h3>
                <img src=${recipe.strMealThumb} >
                <p>${recipe.strInstructions}</p>
                
                `
                show.appendChild(div);
                


            });
        }
        else{
            const div = document.createElement('div');
            div.innerHTML = "Please Enter correct recipe";
            show.appendChild(div);
           

        }
    
    })
}