const searchRequest = document.querySelector('.search');
const searchForm = document.querySelector("form");
const resultSearch = document.querySelector('.result');
const inputValue = document.querySelector('.input');

const apiId = '473a6507';
const apiKey = '00d9ec3f5ae91ddbac8deb13534eff57';

let searchQuery = "";



searchForm.addEventListener("click", (e)=> {
    e.preventDefault();
    searchQuery = e.target.inputValue.value;
    console.log(searchQuery);
    // fetchApi();
});

// async function fetchApi() {
//     const SearchUrl = `https://api.edamam.com/api/food-database/v2/parser?q=${searchQuery}&app_id=${apiId}&app_key=${apiKey}`;
//     const response = await fetch(SearchUrl);
//     const data = await response.json();
//     generateHTML(data.hits);
//     console.log(data);
// }