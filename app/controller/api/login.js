module.exports = app => {
  class HomeController extends app.Controller {
    * index() {

      const users = yield this.ctx.model.cs_user.query();

      this.ctx.body = users;
    }
  }
  return HomeController;
};