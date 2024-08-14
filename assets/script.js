const name = document.getElementById("star-wars-name");
const dob = document.getElementById("birthyear");
const swapi = "https://swapi.py4e.com/api/people";
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const input = document.getElementById("search-input");
const searchButton = document.getElementById("search-button")
const fetchData = async (num) => {
    try {
        const response = await fetch(`${swapi}/${num}`);
        const data = await response.json();
        name.innerText = `Name: ${data.name}`
        dob.innerText = `Date Of Birth: ${data["birth_year"]}`
        weight.innerText = `Weight: ${data.mass}`
        height.innerText = `Height: ${data.height}`
    }
    catch {
        alert("Star Wars Character not found")
    }
}

searchButton.addEventListener("click", () => {
    fetchData(input.value)
})