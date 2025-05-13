const searchInput = document.getElementById("searchInput");
const recipeGrid = document.getElementById("recipeGrid");
const apiKey = "c125e32373624a35accb5d1361575864";

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const searchTerm = urlParams.get("search");
  if (searchTerm) {
    fetchRecipes(searchTerm);
    searchInput.value = searchTerm;
  }
};

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  fetchRecipes(query);
});

function fetchRecipes(query) {
  if (query.length > 2) {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(
        query
      )}&number=10&apiKey=${apiKey}`
    )
      .then(response => response.json())
      .then(data => {
        recipeGrid.innerHTML = data.results
          .map(
            recipe => `
            <div class="recipe-card" onclick="viewRecipe(${recipe.id})">
              <img src="${recipe.image}" alt="${recipe.title}" />
              <h3>${recipe.title}</h3>
            </div>
          `
          )
          .join("");
      })
      .catch(error => {
        console.error("Error fetching recipes:", error);
        recipeGrid.innerHTML =
          "<p>Sorry, something went wrong. Please try again later.</p>";
      });
  } else {
    recipeGrid.innerHTML = "";
  }
}

function viewRecipe(id) {
  window.location.href = `recipe-detail.html?id=${id}`;
}


