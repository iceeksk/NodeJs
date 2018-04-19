let express = require('express');
let contr = require('./controller/controller');
let app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('./assets'));
app.listen(3000);
console.log('Listening port 3000');
contr(app);