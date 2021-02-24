module.exports = {
  index(req, res) {
    return res.render("index");
  },

  relatarbug(req, res) {
    return res.render("relatar-bug");
  },

  bugrelatado(req, res) {
    return res.render("bug-relatado");
  },

  politicadeprivacidade(req, res) {
    return res.render("politica-de-privacidade");
  },
  termosecondicoes(req, res) {
    return res.render("termos-e-condicoes");
  },
};
