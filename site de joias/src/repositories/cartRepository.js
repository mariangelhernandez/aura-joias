import {query} from "../config/db.js"

export const cartRepository = {
    async findAll(){
        const res = await query("SELECT * FROM {compras_carrinho} ORDER BY id;");
        return res.rows;
    },

    async create(cart){
        const { usuario_id, produto_id, quantidade, status, atualizado_em } = cart;
        const sql = 'INSERT INTO cart usuario_id, produto_id, quantidade, status, atualizado_em) VALUES ($1, $2, $3, $4) RETURNING *;';
        const res = await query(sql, [usuario_id, produto_id, quantidade, status, atualizado_em]);
        return res.rows[0]
    },

    async findById(id){
        const res = await query('SELECT * FROM cart where id = $1;',[id]);
        return res.rows[0]
    },

    async update(id, cart){
        const { usuario_id, produto_id, quantidade, status, atualizado_em} = cart;
        const sql = 'UPDATE cart SET nome = $1, especie = $2, idade = $3, status_saude = $4 WHERE id = $5 RETURNING *;';
        const res = await query([sql, usuario_id, produto_id, quantidade, status, atualizado_em,id]);
        return res.rows[0]
    }

}