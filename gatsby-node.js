const axios = require('axios');
const get = (endpoint) => axios.get(`https://pokeapi.co/api/v2${endpoint}`);
const getPokemonData = (numPokemon) => {
  const ids = [];
  for (let id = 1; id <= numPokemon; id++) {
    ids.push(id.toString());
  }

  return Promise.all(
    ids.map(async (id) => {
      const { data: pokemon } = await get(`/pokemon/${id}`);
      return { ...pokemon };
    })
  );
};

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const pokemons = await getPokemonData(151);

  pokemons.forEach((pokemon) => {
    const node = {
      name: pokemon.name,
      number: pokemon.id,
      spriteRemote: pokemon.sprites.front_default,
      id: createNodeId(`Pokemon-${pokemon.name}`),
      internal: {
        type: 'Pokemon',
        contentDigest: createContentDigest(pokemon),
      },
    };
    actions.createNode(node);
  });
};
