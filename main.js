import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const getPokemonData = (nombre) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then((response) => response.json())
    .then((data) => console.log(data))

    .catch((error) => {
      
      document.querySelector('#app').innerHTML = `
      <div class="alert alert-danger" role="alert">
        El pokemon ingresado no existe, recarga la página e intenta nuevamente con un nombre de pokemon válido
      </div>`
    })
}

let id = 2
document.querySelector('#app').innerHTML = `
<section class="container d-flex flex-column align-items-center justify-content-center p-2 mt-5">
<span class="input-group-text w-50 p-2" id="inputGroup-sizing-lg">Busca tu pokemón favorito</span>
<input type="text" id="poke-name" class="form-control w-50 m-2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
<button class="btn btn-danger w-25 text-center p-4 m-2" id="search-pokemon">Buscar Pokem&oacute;n</button>

<div class="card m-4 p-2" style="width: 18rem;" id="mostrar-pokemon">
  <img src="" class="card-img-top" id="image-changer" alt="...">
  <ul class="list-group list-group-flush">
    <li class="list-group-item" id="mostrar-nombre"></li>
    <li class="list-group-item" id="mostrar-tipo"></li>
    <li class="list-group-item" id="mostrar-potencial">A third item</li>
  </ul>
</div>
`
const getPokemonIdAndName = (nombre) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('#image-changer').src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`
      document.querySelector('#mostrar-nombre').innerHTML = `Nombre: ${data.name}`
    })
    .catch((error) => console.log(`API error: ${error}`))
}

// get pokemon type
const getPokemonType = (nombre) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('mostrar-tipo').innerHTML = `Tipo: ${data.types[0].type.name}`
      console.log(data.types[0].type.name)
    })
    .catch((error) => console.log(`API error: ${error}`))
}

// get pokemon potential
const getPokemonPotential = (nombre) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('mostrar-potencial').innerHTML = `Potencia ${data.stats[0].base_stat}`
      console.log(data.stats[0].base_stat)
    })
    .catch((error) => console.log(`API error: ${error}`))
}


document.querySelector('#search-pokemon').addEventListener('click', () =>{
  let pokemon = document.querySelector('#poke-name').value
  console.log(pokemon)
pokemon = String(pokemon).toLowerCase()
  getPokemonData(pokemon)
  getPokemonIdAndName(pokemon)
  getPokemonType(pokemon)
  getPokemonPotential(pokemon)

  
})

//cleaning input
const cleanInput = () => {
  document.getElementById('poke-name').value = ''
}