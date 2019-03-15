module.exports = app => {
    const mongoose = app.mongoose;
    const db = mongoose.connection;
    db.on('error', () => {
        console.log('数据库连接错误');
    });
    db.on('open', () => {
        console.log('开启数据库连接');
    });
    db.on('connecting', () => {
        console.log('数据库连接中');
    });
    db.on('connected', () => {
        console.log('数据库连接成功');
    });
    db.on('disconnecting', () => {
        console.log('数据库连接断开中');
    });
    db.on('disconnected', () => {
        console.log('数据库连接断开');
    });
    db.on('close', () => {
        console.log('数据库关闭');
    });
    const Schema = mongoose.Schema;
    let userSchemaEntity = {    //这里有一个坑：模式规则对象必须和集合中的表的字段保持一致，不一致就会产生update更新不成功的问题
        name: {
            type: String
        },
        address: {
            type: String
        }
    }
    const UserSchema = new Schema(userSchemaEntity);
    // 以上定义了表数据的类型
    return mongoose.model('User', UserSchema, 'User');
}