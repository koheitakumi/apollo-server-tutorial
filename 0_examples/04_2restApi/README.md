# Another API. It includes 2 APIs, GitHub API and PokéAPI.

In addition GitHub API, it can use [The RESTful Pokémon API](https://pokeapi.co/)

As a result, this example has 2 rest apis.

## How to use

### Before try it, please install packages at the root of this project.

### Start

```bash
node ./app.js
```

### Check

Please access [http://localhost:4000](http://localhost:4000)

- Sample Query

  ```graphql
  query getPoke {
    pokemon(pokemonNo: 25) {
      name
      height
      weight
      types {
        slot
        type {
          name
          url
        }
      }
    }
  }
  ```

- Result

  ```json
  {
    "data": {
      "pokemon": {
        "name": "pikachu",
        "height": 4,
        "weight": 60,
        "types": [
          {
            "slot": "1",
            "type": {
              "name": "electric",
              "url": "https://pokeapi.co/api/v2/type/13/"
            }
          }
        ]
      }
    }
  }
  ```
