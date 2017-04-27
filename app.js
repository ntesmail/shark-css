var express = require('express'),
    argv = require('yargs').argv,
    path = require('path');
var request = require('sync-request');

var config = require('./shark-deploy-conf.js');

var app = express();
var showdown  = require('showdown'),
converter = new showdown.Converter();

var webappDir = 'dist/';

app.engine('.html', require('ejs').__express);
// 后缀
app.set('view engine', 'html');
// 模板目录
app.set('views', path.join(__dirname, webappDir, 'app/examples'));

var headContent = request('GET', 'http://shark.mail.netease.com/shark/static/head.html?v=shark-css').getBody();
var footContent = request('GET', 'http://shark.mail.netease.com/shark/static/foot.html?v=shark-css').getBody();
// index.html
app.get(config.contextPath + '/index.html', function (req, res) {
    //向页面模板传递参数，可以传递字符串和对象，注意格式
    res.render('index', {converter: converter, headContent: headContent, footContent: footContent});
});
// shark.html
app.get(config.contextPath + '/shark.html', function (req, res) {
    //向页面模板传递参数，可以传递字符串和对象，注意格式
    res.render('shark', {converter: converter, headContent: headContent, footContent: footContent});
});


app.use(config.contextPath + '/font', express.static(path.join(webappDir, 'app/font')));
// static
app.use(config.contextPath, express.static(path.join(webappDir, 'mimg')));

var port = argv.port || config.port;
app.listen(port, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('express listening on %d', port);
});
