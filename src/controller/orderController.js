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
