const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const books = [{
        id: '1',
        name: 'Congo',
        author: 'Michael Crichton',
        pageCount: 348
    },
    {
        id: '2',
        name: 'Atlas Shrugged',
        author: 'Ayn Rand',
        pageCount: 1168
    },
    {
        id: '3',
        name: 'The Phoenix Project',
        author: 'Gene Kim',
        pageCount: 345
    }
]

app.get('/books', (req, res) => {
    res.send(books)
})

app.get('/book/:id', (req, res) => {
    res.send(books.filter(b => b.id == req.params.id))
})

app.post('/newbook', (req, res) => {
    books.push(req.body)
    res.sendStatus(201)
})

app.listen(3000, () => { console.log('Server running on port 3000') })