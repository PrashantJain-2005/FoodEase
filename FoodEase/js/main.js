const searchBtn = document.querySelector('.search-btn');
  const searchInput = document.querySelector('.search-input');

searchInput.addEventListener("click", ()=> {
    console.log("hii")
})

  searchBtn.addEventListener('click', () => {
    console.log("in search");
    
    const query = searchInput.value.trim();
    if (query) {
      // go to recipe page
      window.location.href = `recipes.html?search=${encodeURIComponent(query)}`;
    }
  });

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchBtn.click();
    }
  });

