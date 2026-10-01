-- Tabela de Usuários (Login do Usuário)
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Joias / Produtos
CREATE TABLE joias_produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    imagem_url TEXT NOT NULL,
    descricao TEXT
);

-- Tabela de Compras do Carrinho
CREATE TABLE compras_carrinho (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id),
    produto_id INT REFERENCES joias_produtos(id),
    quantidade INT DEFAULT 1,
    status VARCHAR(50) DEFAULT 'pendente',
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuarios (nome, email, senha_hash) VALUES
('Ana Silva', 'ana.silva@email.com', '$2y$10$exemploHashSenhaAna123'),
('Carlos Souza', 'carlos.souza@email.com', '$2y$10$exemploHashSenhaCarlos456');

INSERT INTO joias_produtos (nome, categoria, preco, imagem_url, descricao) VALUES
('Anel de Ouro 18k Solitário', 'Anéis', 2499.90, 'https://exemplo.com/imagens/anel-ouro.jpg', 'Anel clássico em ouro 18 quilates com zircônia de alta qualidade.'),
('Colar Ponto de Luz', 'Colares', 899.00, 'https://exemplo.com/imagens/colar-ponto-luz.jpg', 'Gargantilha delicada com pedra central brilhante.'),
('Brinco de Prata Argola', 'Brincos', 299.50, 'https://exemplo.com/imagens/brinco-prata.jpg', 'Argola em prata 925 com acabamento polido.');

INSERT INTO compras_carrinho (usuario_id, produto_id, quantidade, status) VALUES
(1, 1, 1, 'pendente'),    -- Ana Silva comprou 1 Anel de Ouro
(1, 3, 2, 'pendente'),    -- Ana Silva comprou 2 Brincos de Prata
(2, 2, 1, 'carrinho');    -- Carlos Souza colocou 1 Colar no carrinho

SELECT 
    u.nome AS usuario,
    p.nome AS produto,
    c.quantidade,
    p.preco,
    (c.quantidade * p.preco) AS valor_total
FROM compras_carrinho c
INNER JOIN usuarios u ON c.usuario_id = u.id
INNER JOIN joias_produtos p ON c.produto_id = p.id;

