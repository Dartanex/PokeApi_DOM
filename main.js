import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const getPokemonData = (nombre) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then((response) => response.json())
    .then((data) => console.log(data))

    .catch((error) => console.log(`API error: ${error}`))
}

let id = 2
document.querySelector('#app').innerHTML = `
<section class="container d-flex flex-column align-items-center justify-content-center p-2 mt-5">
<span class="synopsis-text input-group-text w-50 p-2" id="inputGroup-sizing-lg">Busca tu pokemón favorito</span>
<input type="text" id="poke-name" class="form-control w-50 m-2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
<button class="btn btn-danger w-25 text-center p-4" id="search-pokemon">Buscar Pokem&oacute;n</button>

</section>
<div class="container" id="mostrar-pokemon">
  <img src="" id="image-changer">
</div>
`
const getPokemonId = (nombre) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('#image-changer').src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`
    })
    .catch((error) => console.log(`API error: ${error}`))
}

document.querySelector('#search-pokemon').addEventListener('click', () =>{
  let pokemon = document.querySelector('#poke-name').value
  console.log(pokemon)
  getPokemonData(pokemon)
  getPokemonId(pokemon)
  
})