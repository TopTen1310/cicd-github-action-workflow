module.exports = {
  apps : [{
    name: 'my-app',
    script: './start.sh',
    instances: 'max',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }]
};
