import express from 'express';

const posts = [
    {
      descricao: "Um gatinho dormindo em uma caixa de papelão",
      imagem: "https://placekitten.com/400/300"
    },
    {
      descricao: "Um cachorro correndo na praia",
      imagem: "https://source.unsplash.com/random"
    },
    {
      descricao: "Uma paisagem montanhosa",
      imagem: "https://picsum.photos/seed/picsum/200/300"
    },
    {
      descricao: "Uma deliciosa pizza",
      imagem: "https://www.pexels.com/photo/chocolate-cake-dessert-sweet-162987"
    },
    {
      descricao: "Uma xícara de café fumegante",
      imagem: "https://unsplash.com/photos/coffee"
    }
  ];


const app = express();

app.use(express.json())

app.listen(3000, () => {
    console.log("Console funcionando, localhost:3000")
});

app.get("/api", (req, res) => {
    res.status(200).send("Boas vindas!");
});
