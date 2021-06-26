const parse = require('pg-connection-string').parse;
const configDefault = parse(process.env.DEFAULT_POSTGRES_URL);
const configAcgam = parse(process.env.PRODUCTION_ACGAM_POSTGRES_URL);


module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: configDefault.host,
        port: configDefault.port,
        database: configDefault.database,
        username: configDefault.user,
        password: configDefault.password,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: false,
        autoMigration: true
      },
    },
    acgam: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: configAcgam.host,
        port: configAcgam.port,
        database: configAcgam.database,
        username: configAcgam.user,
        password: configAcgam.password,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: false,
      },
    }
  },
});
