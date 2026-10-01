import {cartRepository} from "../repositories/cartRepository.js"; 

const cartService = {
    async getAllAnimais(){
        return await cartRepository.findAll();
    },


    async updateCart(id, cartRequisicao){
        const cartExistente = await cartRepository.findById(id);
        if(!cartExistente){
            throw new Error("carrinho não encontrado");
        }
        return await cartRepository.update(id, cartRequisicao)
    }
};


export default cartService;