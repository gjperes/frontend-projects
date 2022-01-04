# Express RESTful CRUD WebApp

O objetivo é criar uma simples aplicação web usando o [*ExpressJS*](https://expressjs.com/pt-br/4x/api.html#app), aplicando os conceitos **RESTful**.

## RESTful Routing Template

Abaixo, o esquema utilizado para a aplicação.

| Nome | Path | Method | Objetivo |
| ---- | ---- | ------ | -------- |
| Index | /comments | GET | Exibir todos os comentários |
| New | /comments/new | GET | Form para criar novo comentário |
| Create | /comments | POST | Cria um novo comentário no servidor |
| Show | /comments/:id | GET | Detalhes para um comentário específico |
| Edit | /comments/:id/edit | GET | Form para editar um formulário |
| Update | /comments/:id | PATCH | Atualiza um comentário em específico no servidor |
| Destroy | /comments/:id | DELETE | Delete um item em específico no servidor |

## Considerações

Algumas bibliotecas auxiliares se fizeram essenciais para a completa e correta implementação do app. Além do express e EJS, os pacotes [*uuid*](https://www.npmjs.com/package/uuid) e [*method-override*](https://www.npmjs.com/package/method-override) foram utilizados.

### UUID

O pacote foi utilizado para a geração de IDs únicas para cada comentário, já que sem o uso de um banco de dados não havia a possibilidade dessas chaves serem criadas externamente.

```js
const { v4: uuid } = require('uuid') // Gera ids únicas
let comments =
  {
    id: uuid(),
    author: "Gabril",
    comment: "Exemplo"
  }
```

### Method Override

O pacote combinado com o Express permitiu receber requisiões além do POST e GET (únicos aceitos em formulários HTML). Assim, na aplicação, é possível ter um request HTTP com o método *DELETE* , por exemplo:

```html
<!-- views/details.ejs -->
<form action="/comments/<%=#%>?_method=DELETE" method="POST">
    <button type="submit">Deletar</button>
</form>

<!-- Com a adição da variável ?_method=MÉTODO_HTTP no formulário -->
```

### Práticas e conhecimento adquirido

Durante o desenvolvimento, diversos conceitos do JavaScript, em especial o ES6, foram amplamente utilizados. 

Um desses conceitos do ES6 é a desestruturação de objetos:
```js
// Update
app.patch("/comments/:id", (req, res) => {
  const { id } = req.params // { id } é uma desestruturação de objeto
  const { comment: updatedComment } = req.body // idem
  const selectedComment = comments.find(comm => comm.id === id)
  selectedComment.comment = updatedComment
  res.redirect("/comments/" + id)
})
```

Além de reforçar conhecimentos e skills do framework Express, JavaScript e HTML em geral.