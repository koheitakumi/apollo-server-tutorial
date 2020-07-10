const { mergeTypeDefs } = require("@graphql-tools/merge");
const githubType = require("./github");
const pokemonType = require("./pokemon");

// module.exports = {
//   ...githubType,
//   ...pokemonType,
// };

const types = [githubType, pokemonType];

// NOTE: 2nd param is optional, and defaults to false
// Only use if you have defined the same type multiple times in
// different files and wish to attempt merging them together.
module.exports = mergeTypeDefs(types, { all: true });
