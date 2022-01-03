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

## Considerações e conhecimento adquirido

Todo