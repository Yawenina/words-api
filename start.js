/**
 * Created by yawenina on 4/1/18.
 */
const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(err.message);
});

require('./model/User.js');
require('./model/Word.js');

// 坑！一定要在 model 之后引入 app
const app = require('./app.js');
app.set('port', config.PORT);
const server = app.listen(app.get('port'), () => {
  console.log(`Listening on ${server.address().port}`)
});



