const Order = require('../database/model/Order');
const ApiSourceData = require('../database/databaseConfig')



class OrderService {
    get orderRepository() { 
        return ApiSourceData.getRepository(Order);
    }
    
    async createOrder(orderData){

        const sanitizedId = orderData.numeroPedido.split('-')[0];
        

        const mappedOrder = {
            orderId: sanitizedId,
            value: orderData.valorTotal,
            creationDate: new Date(orderData.dataCriacao),
            items: orderData.items.map(item => ({
                productId: Number(item.idItem),
                quantity: item.quantidadeItem,
                price: item.valorItem
            }))
        }

        const existingOrder = await this.orderRepository.findOne({
            where: { orderId: sanitizedId },
            relations: ["items"]
        });

        if (existingOrder) {
            throw new Error("O pedido já existe no banco de dados. Atualize as informações do pedido.")
        }

        const newOrder = this.orderRepository.create(mappedOrder);
        return await this.orderRepository.save(newOrder);

    }

    async getOrder(orderId) {
        return await this.orderRepository.findOne({
            where: { orderId: orderId },
            relations: ["items"]
        });

    }

    async getAll() {
        return await this.orderRepository.find({ 
            relations: ["items"],
        });
    }
}


module.exports = new OrderService();