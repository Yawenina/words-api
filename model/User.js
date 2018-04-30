/**
 * Created by yawenina on 4/5/18.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: '请输入用户名',
    unique: true,
  },
  password: {
    type: String,
    required: '请输入密码',
  },
  gender: String,
});

module.exports = mongoose.model('User', userSchema);
