export = {
  NODE_ENV: '',
  port: 7002,
  version: 'docker_supplied_no_version',

  jwt: {
    secret: 'secret',
  },

  db: {
      user: '',
      port: '',
      password: '',
      host: '',
      database: '',
      url: '',
  },

  transporter: 'nats://localhost:4222',

};
