const fetchInnerData = async (num) => {
    const swapi = "https://swapi.py4e.com/api/people/";
    try {
        const response = await fetch(`${swapi}/${num}`);
        const data = response.json();
        const name = document.getElementById("star-wars-name");
        const dob = document.getElementById("birthyear");
        name.innerText = `Name: ${data.name}`
        dob.innerText = `Date Of Birth: ${data["birth_year"]}`
        const height = document.getElementById("height")
        const weight = document.getElementById("weight")
        weight.innerText = `Weight: ${data.mass}`
        height.innerText = `Height: ${data.height}`
    } 
    catch {

    }
}