module.exports = {
  apps: [{
    name: 'quant-roadmap-ben10',
    script: 'npm',
    args: 'run dev',
    cwd: '/home/user/webapp',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    watch: false,
    max_memory_restart: '1G'
  }]
};