# Rest API case. It calls one of GitHub API.

This example use GitHub API to fetch external data.

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
  query GetOrg {
    orgs(name: "nodejs") {
      id
      url
      repos_url
      avatar_url
      created_at
      updated_at
    }
  }
  ```

- Result

  ```json
  {
    "data": {
      "orgs": {
        "id": "9950313",
        "url": "https://api.github.com/orgs/nodejs",
        "repos_url": "https://api.github.com/orgs/nodejs/repos",
        "avatar_url": "https://avatars3.githubusercontent.com/u/9950313?v=4",
        "created_at": "2014-11-25T17:10:50Z",
        "updated_at": "2020-07-06T14:59:18Z"
      }
    }
  }
  ```
