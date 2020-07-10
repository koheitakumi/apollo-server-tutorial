const resolverMap = {
  Query: {
    pokemon: (_, { pokemonNo }, { dataSources }) =>
      dataSources.pokemonAPI.getPokemon({ pokemonNo }),
  },
};

module.exports = resolverMap;
