import { gql } from '@apollo/client'

export const GET_POKEMONS = gql`
  query MyQuery {
    pokemon_v2_pokemon(limit: 10) {
      id
      name
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`
