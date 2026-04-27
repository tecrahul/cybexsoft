module.exports = {
  apps: [
    {
      name: "cybexsoft",
      script: "node_modules/.bin/next",
      args: "start --port 3500",
      cwd: "/opt/cybexsoft",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 3500,
      },
    },
  ],
};
