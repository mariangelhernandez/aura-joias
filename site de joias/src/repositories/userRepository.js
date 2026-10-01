import {query} from "../config/db.js"

export const userRepository = {
    async findAll(){
        const res = await query("SELECT * FROM usuarios {nome_tabela} ORDER BY id;");
        return res.rows;
    },

    async create(user){
        const { nome, email, senha_hash, criado_em} = user;
        const sql = 'INSERT INTO user (nome, email, senha_hash, criado_em) VALUES ($1, $2, $3, $4) RETURNING *;';
        const res = await query(sql, [ nome, email, senha_hash, criado_em]);
        return res.rows[0]
    },

    async findById(id){
        const res = await query('SELECT * FROM  where id = $1;',[id]);
        return res.rows[0]
    },

    async update(id, user){
        const {  nome, email, senha_hash, criado_em} = user;
        const sql = 'UPDATE usuarios SET nome = $1, email = $2, senha = $3, criado_em = $4 WHERE id = $5 RETURNING *;';
        const res = await query([sql, nome, email, senha_hash, criado_em, id]);
        return res.rows[0]
    }

}