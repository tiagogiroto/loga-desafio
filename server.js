const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

app.get('/home', (req, res) => {
    res.send('Você realizou uma requisição GET em /home');
});

app.get('/data', (req, res) => {
    res.json([
        {
            img: "https://picsum.photos/200/300",
            dados_principais: 'produto 1',
            descricao: 'descricao',
            codigo_de_barras: '12356465',
            quantidade: '12',
            valor_produto: '25.90',
            imagem: 'https://picsum.photos/200/300'
        },
        {
            img: "https://picsum.photos/200/300",
            dados_principais: 'produto 2',
            descricao: 'descricao',
            codigo_de_barras: '12356465',
            quantidade: '12',
            valor_produto: '25.90',
            imagem: 'https://picsum.photos/200/300'
        },
        {
            img: "https://picsum.photos/200/300",
            dados_principais: 'produto 3',
            descricao: 'descricao',
            codigo_de_barras: '12356465',
            quantidade: '12',
            valor_produto: '25.90',
            imagem: 'https://picsum.photos/200/300'
        },
        {
            img: "https://picsum.photos/200/300",
            dados_principais: 'produto 4',
            descricao: 'descricao',
            codigo_de_barras: '12356465',
            quantidade: '12',
            valor_produto: '25.90',
            imagem: 'https://picsum.photos/200/300'
        },
        {
            img: "https://picsum.photos/200/300",
            dados_principais: 'produto 5',
            descricao: 'descricao',
            codigo_de_barras: '12356465',
            quantidade: '12',
            valor_produto: '25.90',
            imagem: 'https://picsum.photos/200/300'
        },
        {
            img: "https://picsum.photos/200/300",
            dados_principais: 'produto 6',
            descricao: 'descricao',
            codigo_de_barras: '12356465',
            quantidade: '12',
            valor_produto: '25.90',
            imagem: 'https://picsum.photos/200/300'
        },
        {
            img: "https://picsum.photos/200/300",
            dados_principais: 'produto 7',
            descricao: 'descricao',
            codigo_de_barras: '12356465',
            quantidade: '12',
            valor_produto: '25.90',
            imagem: 'https://picsum.photos/200/300'
        },
        {
            img: "https://picsum.photos/200/300",
            dados_principais: 'produto 8    ',
            descricao: 'descricao',
            codigo_de_barras: '12356465',
            quantidade: '12',
            valor_produto: '25.90',
            imagem: 'https://picsum.photos/200/300'
        },
    ])
})

app.post ( '/carrinho' ,(req,res)=>{
    res.json({'teste':'teste'});
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});