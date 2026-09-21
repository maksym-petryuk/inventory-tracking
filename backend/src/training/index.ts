import express from 'express';
import {body, validationResult} from "express-validator";
const app = express();

app.use(express.json());

let server = [
    { id: 1, name: "Футболка", price: 500 },
    { id: 2, name: "Кросівки", price: 1500 }
]

app.get("/products", (req, res) => {
    res.status(200).json(server)
})

app.post("/products",
    body('name')
        .trim()
    .notEmpty()
    .withMessage('Поле обовязкове'),
    body('price')
        .trim()
        .notEmpty()
        .withMessage('поле має бутти')
    ,
    (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({error: error.array()});
    }
    const { name, price } = req.body;
    server.push({id: server.length+1 ,name: name, price: price})

    // @ts-ignore
        res.status(201).json({message : `додано новий товар :${server[server.length-1].name }   ${server[server.length-1].price }` });
})

app.delete("/products/:id"
    , (req, res) => {
    // @ts-ignore
    const id : number = Number(req.params.id);
    const error = server.find(serve => serve.id === id);
    if (error === undefined) {
        return res.status(404).json({message : 'такого товару не існує'})
    }

    server = server.filter(server => server.id !== id);

    res.status(200).json({message : 'успішно видалено'});
})

app.put("/products/:id", (req, res)=>{
    // @ts-ignore
    const id: number = Number(req.params.id);
    const y = server.find(serve => serve.id === id);

    if (!y) {
        return res.status(404).json({message : 'такого товару не існує'})
    }

    const { name, price } = req.body;

    y.name = name;

    y.price = price;
    res.status(200).json({
        message: 'Успішно оновлено',
        updatedProduct: y
    });
} )

app.listen(3000, () => console.log('Сервер працює на порту 3000'));