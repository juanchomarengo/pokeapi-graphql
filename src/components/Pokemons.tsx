import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../graphql/queries';

const Pokemons = () => {

    const { data, loading, error } = useQuery(GET_POKEMONS);
    

  if (error) return <div>{JSON.stringify(error)}</div>;

  return (
    <div>{loading ? <div>Loading...</div> :  
    <>{
      data.pokemon_v2_pokemon.map((pokemon: any) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))
    }</>}</div>
  );
};

export default Pokemons;
