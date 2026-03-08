const orderService = require('../service/orderService');


exports.create = async (req, res) => {
        try {
            const orderData = await orderService.createOrder(req.body);
            

            return res.status(201).json(orderData);
        } catch (error) {
            if (error.code === '23505') {
                return res.status(409).json({message: "Este pedido já existe."})
            } 

            return res.status(400).json({ message: "Erro ao criar o pedido: " + error.message});
        }
    }

exports.getById = async (req, res) => {
    try {
        const order = await orderService.getOrder(req.params.orderId);

        if (!order) {
           return res.status(404).json({ message: "Não foi possível buscar o pedido. Verifique o Id."})
        }
        return res.status(200).json(order)
    } catch (error) {
        return res.status(400).json({ message: "Erro na busca", error: error.message})
    }
}

exports.getAll = async (req, res) =>  {
    try {
        const orders = await orderService.getAll();

        return res.status(200).json(orders);
    } catch(error) {
        return res.status(404).json({ error: "Não foi possível buscar pedidos.", error: error.message})
    }
}   

exports.update = async (req, res) => {
    try {
        const idItem = req.params.orderId;
        const orderFound = req.body.items;

        const updateOrder = await orderService.update(idItem, orderFound);

        if(!updateOrder) {
            return res.status(404).json({ message: "Não foi possível encontrar o pedido."})
        }
        return res.status(200).json({ message: "Pedido atualizado com sucesso"});
    } catch (error) {
        return res.status(400).json({message: "Erro ao atualizar: ", error: error.message})
    }
}





