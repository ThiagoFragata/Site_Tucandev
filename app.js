//importar as dependencias do express
const express = require("express");

//init express
const app = express();
const path = require("path");

//req de arquivo das rotas
const pages = require("./pages.js");

app
  //utilizar body do req
  .use(express.urlencoded({ extended: true }))
  // utilizando os arquivos estaticos
  .use(express.static("public"))

  // configurar template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  //rotas da aplicação
  .get("/", pages.index)
  .get("/relatar-bug", pages.relatarbug)
  .get("/bug-relatado", pages.bugrelatado)
  .get("/politica-de-privacidade", pages.politicadeprivacidade)
  .get("/termos-e-condicoes", pages.termosecondicoes);

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Umbler listening on port %s", port);
});
