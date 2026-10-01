import {userRepository} from "../repositories/userRepository.js"; 

const userService = {
    async getAllUsers(){
        return await userRepository.findAll();
    },

    async createUser(userRequisicao){
        if(userRequisicao.idade<15){
            throw new Error('A idade do usuario tem que ser maior do que 15.')
        }
        return await userRepository.create(userRequisicao);
    },

    async updateUser(id, userRequisicao){
        const userExistente = await userRepository.findById(id);
        if(!userExistente){
            throw new Error("Usuário não encontrado");
        }
        return await userRepository.update(id, userRequisicao)
    }
};


export default userRepository;