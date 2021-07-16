let card_container = document.getElementById("card_container")
let input = document.getElementById("input")
let right_side = document.getElementById("right_side")

console.log(input.value)

if(input.value == ''){
    fill = 'all'
}

let urlAll = `https://restcountries.eu/rest/v2/all`

let getData = (url) =>{
    fetch(url).then((response) =>{
        return response.json()
    }).then((data)=>{
        console.log(data)
        displayCountries(data)
    })
}
getData(urlAll)


let displayCountries = (countries) =>{
    
    countries.forEach(element => {
        let card = document.createElement('div')
        card.classList.add('card')
        
        card.innerHTML = 
        `
        <div>
            <div>
                <img src="${element.flag}" alt="" class="flag">
            </div>
            
            <div>
                <span class='name' id='name'>${element.name}</span>
            
                <div class='population'>
                    <strong>Population</strong>
                    <span class='population_number'>${element.population}</span>
                </div>
            
                <div class='region'>
                    <strong>Region</strong>
                    <span class='region_name'>${element.region}</span>
                </div>
                        
                <div class='capital'>
                    <strong>Capital</strong>
                    <span class='capital_name'>${element.capital}</span>
                </div>
            </div>
        </div>
                    
                    `
                    
        card_container.appendChild(card)
    });
}
            
input.addEventListener("input", (e) =>{

    let name = document.querySelectorAll('.name')
    name.forEach(element =>{

        if(element.innerText.toLowerCase().includes(e.target.value.toLowerCase())){
            element.parentElement.parentElement.style.display = 'block'
        }else{
            element.parentElement.parentElement.style.display = 'none'
        }
    })
})


