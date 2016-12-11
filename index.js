
const express = require('express');
const ms = require('ms');

var app = express();

var defaultStaticOptions = {
    extensions: ['html'],
    maxAge: ms('5s'),
    redirect: true
};

var port = process.env.PORT || 3000;

app.use(express.static('static', defaultStaticOptions));
app.use(express.static('frontend/dist', defaultStaticOptions));
app.use('/assets', express.static('frontend/assets'));
app.disable('x-powered-by');

app.listen(port, function () {
    console.log('App listening on port on port ' + port)
});