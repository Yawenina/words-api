/**
 * Created by yawenina on 4/5/18.
 */
const mongoose = require('mongoose');
const Word = mongoose.model('Word');

exports.addWord = async (req, res) => {
  console.log('receieve post');

  req.sanitize('word');
  req.checkBody('word', '单词不能为空').notEmpty();

  req.sanitize('meaning');
  req.sanitize('en');
  req.sanitize('cn');

  const wordModel = new Word(req.body);
  const word = await wordModel.save(wordModel);

  res.json({ status: 200, word });
};

exports.getWordList = async (req, res) => {
  const words = await Word.find({ user: req.query.user }, { user: 0 });

  res.status(200).json(words);
};
