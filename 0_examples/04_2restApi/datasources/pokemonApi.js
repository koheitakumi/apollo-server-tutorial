const { RESTDataSource } = require("apollo-datasource-rest");

class PokemonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://pokeapi.co/api/v2/";
  }

  async getPokemon({ pokemonNo }) {
    const res = await this.get(`pokemon/${pokemonNo}`);
    return {
      base_experience: res.base_experience,
      height: res.height,
      id: res.id,
      name: res.name,
      order: res.order,
      types: res.types,
      weight: res.weight,
    };
  }
}

module.exports = PokemonAPI;
