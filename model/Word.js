/**
 * Created by yawenina on 4/5/18.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  word: {
    type: String,
    required: '请输入单词'
  },
  meaning: String,
  en: String,
  cn: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { versionKey: false });

module.exports = mongoose.model('Word', wordSchema);
