module.exports = {
    comment: 'shark css',
    version: '0.1.0',
    product: 'shark-css',
    contextPath: '/shark-css',
    protocol: 'http',
    browserPort: 9001,
    port: 19001,
    hostname: 'localhost',
    openurl: 'http://localhost:9001/shark-css/index.html',
    rootPath: __dirname,
    tmpDir: '.tmp',
    webapp: 'src/main/webapp',
    mock: 'src/test/mock',
    scssPath: 'style/scss',
    cssPath: 'style/css',
    imgPath: 'style/img',
    videoPath: 'style/video',
    jsPath: 'js',
    fontPath: 'font',
    htmlPath: 'examples',
    templatePath: 'WEB-INF/tmpl',
    staticVersion: '20160226',
    ajaxPrefix: '/xhr',
    mimgPathPrefix: '/hxm',
    ifwebpack: false,
    mimgURLPrefix: {
        develop: '', //the rootpath of static resource during develop phase
        online: '', //the rootpath of static resource at online phase
        test: '' //the rootpath of static resource at test phase
    },
};
