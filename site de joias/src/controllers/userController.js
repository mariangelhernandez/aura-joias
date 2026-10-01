import {createUser, getUser} from "../services/userService.js"

const userController = {
    async getAll(req, res){
        try{ 
            const user = await userService.getAllUsers();
            res.json(user);
        }catch(error){
            res.status(404).json({erro: error.message})
        }
    },

    async create(req, res){
        try{
            const novoUser = await userService.createUser(req.body);
            res.status(201).json(novoUser);
        }catch(error){
            res.status(400).json({erro: error.message});
        }
    },

    async update(req, res){
        try{
            const userAtualizado = await userService.updateUser(
                req.params.id, req.body)
            res.json(UserAtualizado)
        }catch(error){
            const status = error.message === "Usuario não encontrado" ? 404 : 400;
            res.status(status).json({erro: error.message});
        }
    }
};

export default userController;