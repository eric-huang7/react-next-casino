module.exports = {
  apps : [
    {
      name: "casino",
      mode: "cluster",
      script: "npm run startDev",
      watch: true,
      env_development: {
        "PORT": 3005,
        "NODE_ENV": "development"
      },
      env_production: {
        "PORT": 8000,
        "NODE_ENV": "production",
      }
    }
  ]
}