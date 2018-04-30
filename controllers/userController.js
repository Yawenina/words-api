/**
 * Created by yawenina on 4/5/18.
 */
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.register = async (req, res) => {
  req.sanitize('name');
  req.checkBody('name', '用户名不能为空').notEmpty();

  req.sanitize('password');
  req.checkBody('password', '密码不能为空').notEmpty();

  const userModel = new User(req.body);
  const user = await userModel.save(req.body);

  res.json({ status: 200, user });
};
