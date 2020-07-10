// https://qiita.com/poruruba/items/10df0d94e9127797498f
module.exports = {
  apps: [
    {
      name: "Apollo tutorial(4001)",
      script: "./app.js",
      cwd: "C:/home/testpjs/apollo-tutorial",
      env: {
        PORT: 4000,
        NODE_ENV: "development",
      },
      env_production: {
        PORT: 5000,
        NODE_ENV: "production",
      },
    },
  ],
};
