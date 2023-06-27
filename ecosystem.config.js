module.exports = {
  apps : [{
    name: 'my-app',
    script: 'serve',
    args: '-s build -l 3000', // here you can set options like the port number
    interpreter: 'none',
    instances: 'max',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }]
};
