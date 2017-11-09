'use strict';

module.exports = app => (
  /**
   * Test Service
   */
  class Test extends app.Service {
    constructor(ctx) {
      super(ctx);
      this.ctx.db = app.mysql.get('suchi')
      // console.log(app.config)
    }

    fuck(){
      return 'fuck'
    }

    * get(id) {
      console.log(this.ctx.db)
      let rst = yield this.ctx.db.query('select * from suchi_user_list');
      return rst
    }

    // curl
    // * getPicture(uid) {
    //     const result = yield this.ctx.curl(`http://photoserver/uid=${uid}`, {
    //         dataType: 'json',
    //     });
    //     return result.data;
    // }

  }
);
