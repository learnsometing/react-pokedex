import {
  Pokemon,
  Cry,
  GroupedCries,
  PokemonWithCry,
} from '../shared/interfaces';

const groupCriesByName = (cries: Cry[]): GroupedCries => {
  return cries.reduce((acc: GroupedCries, cry: Cry): GroupedCries => {
    const key = cry.name;
    const ext = cry.ext.slice(1);

    if (!acc[key]) {
      acc[key] = { ogg: undefined, mp3: undefined };
    }

    acc[key][ext] = cry.publicURL;
    return acc;
  }, {});
};

const groupPokemonWithCries = (
  cries: Cry[],
  allPokemon: Pokemon[]
): PokemonWithCry[] => {
  const criesGroupedByPokemon = groupCriesByName(cries);
  return allPokemon.map((pokemon) => {
    return {
      ...pokemon,
      cry: criesGroupedByPokemon[pokemon.number],
    };
  });
};

export default groupPokemonWithCries;
