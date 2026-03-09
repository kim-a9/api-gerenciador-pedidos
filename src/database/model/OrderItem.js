const { EntitySchema, PrimaryColumn} = require('typeorm');


module.exports = new EntitySchema({
    name: 'OrderItem',
    tableName: 'order_items',
    columns: {
        id: { primary: true, type: 'int',  generated: true},
        productId: {type: 'int'},
        quantity: { type: 'int'},
        price: { type: 'decimal'},
    },
    relations: {
        order: {
            target: 'Order',
            type: 'many-to-one',
            joinColumn: { name: 'items' },
            onDelete: 'CASCADE'
        }
    }
})