'use strict';

const Controller = require('egg').Controller;
class UserController extends Controller {
    async addUser() { //调用user的service执行新增用户数据的操作
        let {app,ctx} = this;
        let res = await ctx.service.user.addUser();
        ctx.response.status = 200;
        ctx.response.message = `{"message":{"data":${res.name},"responseCode":"520"}}`
    }
    async deleteUser() {//调用user的service执行删除用户数据的操作
        let {app,ctx} = this;
        let res = await this.ctx.service.user.deleteUser({
            name: '123'
        });
        ctx.response.status = 200;
        ctx.response.message = `delete success`;
    }
    async updateUser() { //调用user的service执行更新用户数据的操作
        let {app,ctx} = this;
        let res = await this.ctx.service.user.updateUser({name:'123'},{address:'我是新的地址'});
        ctx.response.status = 200;
        ctx.response.message = `delete success`;
    }
    async findUser() {//调用user的service执行查询用户数据的操作
        this.ctx.body = await this.ctx.service.user.findUser()
    }
}
module.exports = UserController;