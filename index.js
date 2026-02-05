
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

const posts = [
    {
        titolo: "ciambellone",
        contenuto: "dolce fatto in casa",
        immagine: "/images/ciambellone.jpg",
        tags: ["dolce"]
    },
    {
        titolo: "cracker barbabietola",
        contenuto: "dolce fatto in casa",
        immagine: "/images/cracker_barbabietola.jpg",
        tags: ["snack"]
    },
    {
        titolo: "pane fritto dolce",
        contenuto: "tradizionale",
        immagine: "/images/pane_fritto_dolce.jpg",
        tags: ["dolce"]
    },
    {
        titolo: "pasta barbabietola",
        contenuto: "pasta sana",
        immagine: "/images/pasta_barbabietola.jpg",
        tags: ["salato"]
    },
    {
        titolo: "torta paesana",
        contenuto: "dolce fatto in casa",
        immagine: "/images/torta_paesana.jpg",
        tags: ["dolce"]
    }
];

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
    res.json(posts)
})

app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`)
})

