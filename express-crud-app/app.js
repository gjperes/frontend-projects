const express = require("express")
const path = require("path")
const app = express()

app.use(express.urlencoded({extended: true})) // Parse dos dados dos forms recebidos
app.use(express.json()) // Parse dos dados JSON recebidos

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");

// Comentários inicias são fixos, e sem uso de um database em primeiro momento
let comments = [
  {
    author: "Robso mto mídia",
    comment: "Esse é um exemplo horrível..."
  },
  {
    author: "Marquin.dj",
    comment: "Discordo do comentário acima, é pior do que eu imaginava!"
  },
  {
    author: "Sra Florinda",
    comment: "JÓIA PAKAS KK"
  }
]

// Index
app.get("/comments", (req, res) => {
  res.render('index', { comments })
})

// New
app.get("/comments/new", (req, res) => {
  res.render('newform')
})

// Create
app.post("/comments", (req, res) => {
  const { author, comment } = req.body
  comments.push({author, comment})
  res.redirect("/comments")
})

// Show

// Edit

// Update

// Destroy

// Página não existente
app.get('*', (req, res) => {
  res.render('notfound')
})

app.listen(8080, () => {
  console.log("Listening...")
})
