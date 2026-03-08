const { EntitySchema} = require('typeorm');

module.exports = new EntitySchema({
    name: 'Order',
    tableName: 'orders',
    columns: {
        id: { type: 'int', primaryKey: true, generated: true},
        orderId: { type: 'varchar', primary: true, unique: true },
        value: { type: 'decimal', precision: 10, scale: 2 },
        creationDate: {type: "timestamp"}
    },
    relations: {
        items: {
            target: 'OrderItem',
            type: 'one-to-many',
            joinColumn: { name: 'order' },
            cascade: true,
            inverseSide: 'order',
        }
    }
})