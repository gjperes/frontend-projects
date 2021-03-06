const express = require("express");
const path = require("path");
const app = express();

// Gera ids únicas
const { v4: uuid } = require('uuid'); 

// Permite recebimento de formulários com mais métodos
const methodOverride = require('method-override'); 

// permite um POST -> url/etc?_method=DELETE como método DELETE
app.use(methodOverride('_method')); 

// Parse dos dados dos forms recebidos
app.use(express.urlencoded({extended: true})); 

// Parse dos dados JSON recebidos
app.use(express.json()); 

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Comentários inicias são fixos, e sem uso de um database em primeiro momento
let comments = [
  {
    id: uuid(),
    author: "Robso mto mídia",
    comment: "Esse é um exemplo horrível...",
  },
  {
    id: uuid(),
    author: "Marquin.dj",
    comment: "Discordo do comentário acima, é pior do que eu imaginava!",
  },
  {
    id: uuid(),
    author: "Sra Florinda",
    comment: "JÓIA PAKAS KK",
  },
];

// Index
app.get("/comments", (req, res) => {
  res.render('index', { comments });
});

// New
app.get("/comments/new", (req, res) => {
  // Envia um formulário como POST
  res.render('newform'); 
});

// Create
app.post("/comments", (req, res) => {
  const { author, comment } = req.body;
  comments.push({ id: uuid(), author, comment });
  res.redirect("/comments");
});

// Show
app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  
  // essa variável é gambiarra por não estar usando um BD
  const selectedComment = comments.find(comm => comm.id === id); 
  
  res.render('details', { selectedComment });
});

// Edit
app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const selectedComment = comments.find(comm => comm.id === id);
  res.render('edit', { selectedComment });
});

// Update
app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const { comment: updatedComment } = req.body;
  const selectedComment = comments.find(comm => comm.id === id);
  selectedComment.comment = updatedComment;
  res.redirect("/comments/" + id);
});

// Destroy
app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  const filteredComments = comments.filter(c => c.id !== id);
  comments = filteredComments;
  res.redirect('/comments');
});

// Página não existente
app.get('*', (req, res) => {
  res.render('notfound');
});

app.listen(8080, () => {
  console.log("Listening...");
});
