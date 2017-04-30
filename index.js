var express = require('express');
var serveStatic = require('serve-static');

var app = express();

app.use(serveStatic('public', {'index': ['index.html', 'default.htm']}));
app.listen(8000);
