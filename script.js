document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        {
            title: 'Spaghetti Bolognese',
            image: 'spaghetti.jpeg',
            description: 'A classic Italian pasta dish with rich, meaty sauce.'
        },
        {
            title: 'Chicken Curry',
            image: 'Chicken Curry.jpeg',
            description: 'A spicy and flavorful dish with tender chicken pieces.'
        },
        {
            title: 'Vegetable Stir Fry',
            image: 'vegi.jpeg',
            description: 'A quick and healthy meal with fresh vegetables.'
        },
        {
            title: 'Fish fry',
            image: 'fish fry.jpeg',
            description: 'a meal containing battered  includes french fries, coleslaw, macaroni salad, lemon slices, tartar sauce, hot sauce, malt vinega.'
        },
        {
            title: 'Paneer Butter Masala',
            image: 'Paneer Butter Masala.jpeg',
            description: 'butter paneer is a rich & creamy curry.'
        },
        {
            title: 'Double Cheeze Margreta',
            image: 'pizza.jpeg',
            description: 'a traditional Italian dish that flat open faced baked pie made of leavened wheat-based dough.'
        },
        {
            title: 'Paneer Kathi Roll',
            image: 'paneer kath rool.jpeg',
            description: 'marinated and pan-fried paneer (Indian cheese), plenty of veggies and green chutney (mint chutney/ cilantro chutney).'
        },
        {
            title: 'Sagg Paneer',
            image: 'sagg.jpeg',

            description: 'Saag paneer is a classic Indian dish of cooked spinach studded with cubes of fried paneer cheese. Thickened with cream or coconut milk, its a hearty and filling vegetarian meal..'
        },
        {
            title: 'Butter Chicken',
            image: 'butter chicken.jpeg',
            description: ' type of curry made from chicken with a spiced tomato and butter (makhan) sauce.'
        },
        {
            title: 'Chicken Biryani',
            image: 'briyani.jpeg',
            description: ' a delicious rice dish peppered with scrumptious spices like saffron and cumin and further layered with spiced meat or veggie protein.'
        },
        {
            title: 'Paneer Kathi Roll',
            image: 'paneer kath rool.jpeg',
            description: 'marinated and pan-fried paneer (Indian cheese), plenty of veggies and green chutney (mint chutney/ cilantro chutney).'
        },
        {
            title: 'Sagg Paneer',
            image: 'sagg.jpeg',
            
            description: 'Saag paneer is a classic Indian dish of cooked spinach studded with cubes of fried paneer cheese. Thickened with cream or coconut milk, its a hearty and filling vegetarian meal..'
        },
      
        // Add more recipes as needed
    ];
   

    const recipeList = document.getElementById('recipe-list');
    const searchInput = document.getElementById('search');
    const sortOrder =document.getElementById('sortorder')

    const displayRecipes = (recipes) => {
        recipeList.innerHTML = '';
        recipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');
            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}">
                <h2>${recipe.title}</h2>
                <p>${recipe.description}</p>
            `;
            recipeList.appendChild(recipeCard);
        });
    };

    const filterRecipes = (searchTerm) => {
        const filteredRecipes = recipes.filter(recipe => 
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        displayRecipes(filteredRecipes);
    };
    const sortRecipes = (recipesToSort = recipes) => {
        const sortValue = sortOrder.value;
        const sortedRecipes = [...recipesToSort].sort((a, b) => {
            if (sortValue === 'title') {
                return a.title.localeCompare(b.title);
            } else if (sortValue === 'date') {
                return new Date(a.date) - new Date(b.date);
            } else if (sortValue === 'popularity') {
                return b.popularity - a.popularity;
            }
        });
        displayRecipes(sortedRecipes);
    };
    sortOrder.addEventListener('change', () => {
        filterRecipes(searchInput.value);
    });
    searchInput.addEventListener('input', (e) => {
        filterRecipes(e.target.value);
    });
  
    displayRecipes(recipes); });
