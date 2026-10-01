import userService from "../services/userService.js"; 

const userController = {
    async getAll(req, res) {
        try {
            const users = await userService.getAllUsers();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async create(req, res) {
        try {
            const newUser = await userService.createUser(req.body);
            return res.status(201).json(newUser);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const updatedUser = await userService.updateUser(id, req.body);
            return res.status(200).json(updatedUser);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async patch(req, res) {
        try {
            return res.status(200).json({ message: "Patch em desenvolvimento" });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    },

    async delete(req, res) {
        try {
            return res.status(200).json({ message: "Delete em desenvolvimento" });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
};

export default userController;