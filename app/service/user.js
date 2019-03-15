'use strict';
const Service = require('egg').Service;
class UserService extends Service {
    async addUser() {
        //save是document原型上的方法，适用于保存当前的document对象
        var userDoc = new this.ctx.model.User({
            name: '123',
            address: '65464'
        })
        return new Promise(function (resolve, reject) {
            userDoc.save(function (err, user) {
                if (!err) {
                    resolve(user);
                }
                reject(err);
            })
        });
        //create是model原型上的方法，适合批量增加document数据
        // this.ctx.model.User.create([{name: 'aaaa'},{name: 'bbbb'}], (err, jellybean, snickers) => {
        //     console.log(err)
        //     console.log(jellybean)
        //     console.log(snickers)
        // });
    }
    async deleteUser(param) {
        this.ctx.model.User.deleteOne({
            name: param.name
        }, function (err) {
            console.log(err);
        });
    }
    async updateUser(condition,newCof) {
        this.ctx.model.User.updateOne({
            name: condition.name
        }, {
            $set: {
                address: newCof.address
            }
        }, function (err, aa) {
            console.log(err);
            console.log(aa);
            if (!err) {
                console.log("修改成功");
            }
        });
    }
    findUser() {
        return this.ctx.model.User.find({
            "name": "123"
        })
    }
}
module.exports = UserService;