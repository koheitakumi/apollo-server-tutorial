# Apollo Server Examples

This repository has some examples how to use apollo server.
Please access [Apollo Server](https://www.apollographql.com/docs/apollo-server/) to understand more details.

1. A simple case. There are no data sources, just exist 1 query.
1. A simple case that includes structured data and query, mutation. It works in memory.
1. Rest API case. It calls one of GitHub API.
1. Another API. It includes 2 APIs, GitHub API and PokéAPI.
1. RDB and Authentication. It use PostgreSQL to have user table.
1. Clustered server.
1. Firestore integration.

These examples use [graphql-tools](https://www.npmjs.com/package/graphql-tools) to simplify code.

But I recommend other tools like [graphql-code-generator](https://graphql-code-generator.com/)

## How to use

### Before try it, please install packages.

```bash
yarn install

# or

npm install
```

### Start

1. Create `.env` file based on `.env.example`

   - If you use Postgres example, you need to prepare the information on your Postgres. Of course you can use other RDB like sqlite, mysql etc.
   - If you use Firestore example, you need to prepare secret file which approve this app admin.

1. Start server

```bash
cd /path/to/example
# cd 0_examples/01_simple
node ./app.js
```

### Check

Please access [http://localhost:4000](http://localhost:4000)

## Firestore integration.

This server use firebase-admin to treat firestore data.

This example assume the following data structure on firestore.

```json
{
  "test(root collection)": [
    {
      "auto_generated_id": {
        "id": 0,
        "name": "string"
      }
    }
  ]
}
```

- Query example

  ```graphql
  query getTest {
    tests {
      id
      name
    }
  }
  ```

- Result

```json
{
  "data": {
    "tests": [
      {
        "id": "1",
        "name": "name1"
      },
      {
        "id": "2",
        "name": "name2"
      }
    ]
  }
}
```
