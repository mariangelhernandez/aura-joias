import {cartService} from "../services/cartService.js"

const cartController = {
    async getAll(req, res){
        try{ 
            const cart = await cartService.getAllCart();
            res.json(cart);
        }catch(error){
            res.status(404).json({erro: error.message})
        }
    },

    async create(req, res){
        try{
            const novoCart = await CartService.createcart(req.body);
            res.status(201).json(novoCart);
        }catch(error){
            res.status(400).json({erro: error.message});
        }
    },

    async update(req, res){
        try{
            const cartAtualizado = await cartService.updateCart(
                req.params.id, req.body)
            res.json(cartAtualizado)
        }catch(error){
            const status = error.message === "carrinho não encontrado" ? 404 : 400;
            res.status(status).json({erro: error.message});
        }
    }
};

export default cartController;

