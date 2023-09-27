require('dotenv').config();

module.exports = {
   development: {
    dialect: 'postgres',
    host: 'containers-us-west-78.railway.app',
    port: 5724,
    username: 'postgres',
    password: 'XThpJjyIqdgJrIxYHdIh',
    database: 'railway',

  },
  production: {
    dialect: 'postgres',
    host: 'containers-us-west-78.railway.app',
    port: 5724,
    username: 'postgres',
    password: 'XThpJjyIqdgJrIxYHdIh',
    database: 'railway',

  },   

/*    development: {
    dialect: 'postgres',
    host:  'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'facturas',

  },
  production: {
    dialect: 'postgres',
    host:  'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'facturas',
   
  },   */
};
