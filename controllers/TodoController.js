const Todo = require("../models").Todo;

class TodoController {
  constructor() {
    //
  }

  async index(req, res) {
    await Todo.findAll().then((data) => {
      res.render("todo/index", {
        todo: data,
        success: req.flash("success"),
        danger: req.flash("danger"),
      });
    });
  }

  async store(req, res) {
    if (req.body.text && req.body.text != null && req.body.text != "") {
      await Todo.create({
        text: req.body.text,
      }).then(() => {
        req.flash("success", "New Todo Added.");
        res.redirect("/");
      });
    } else {
      req.flash("danger", "Please give some input.");
      res.redirect("/");
    }
  }

  async update(req, res) {
    if (req.body.text && req.body.text != null && req.body.text != "") {
      await Todo.update(
        {
          text: req.body.text,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      ).then(() => {
        req.flash("success", "Todo Updated.");
        res.redirect("/");
      });
    } else {
      req.flash("danger", "Please give some input.");
      res.redirect("/");
    }
  }

  async destroy(req, res) {
    await Todo.destroy({
      where: {
        id: req.params.id,
      },
    }).then(() => {
      req.flash("danger", "Todo Deleted.");
      res.redirect("/");
    });
  }
}

module.exports = new TodoController();
