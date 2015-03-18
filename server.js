var config = require('./config');

mongoose.connect(config.database);

app.listen(config.database);
console.log('Listening on port ' + config.port);