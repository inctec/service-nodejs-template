import { config } from 'dotenv';
config();

export = {
  NODE_ENV: 'NODE_ENV',
  port: 'PORT',
  version: 'VERSION',

  jwt: {
    secret: 'JWT_SECRET',
  },

  db: {
      user: 'DB_DEVICES_USER',
      port: 'DB_DEVICES_PORT',
      password: 'DB_DEVICES_PASS',
      host: 'DB_DEVICES_HOST',
      database: 'DB_DEVICES_DB',
      url: 'DB_DEVICES_URL',
  },

  transporter: "TRANSPORTER",

};
