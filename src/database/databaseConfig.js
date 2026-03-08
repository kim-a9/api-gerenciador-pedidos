const { DataSource} = require('typeorm');
const Order = require('./model/Order');
const OrderItem = require('./model/OrderItem')
require('dotenv').config();

const ApiDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || '1234',
    database: process.env.DB_DATABASE,
    schema: 'public',
    synchronize: true,
    dropSchema: true,
    logging: true, 
    entities: [Order, OrderItem]
});

module.exports = ApiDataSource;