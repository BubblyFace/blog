module.exports = function(app) {

    //接收外部的index传来的express对象
    app.get('/', function(req, res) {
        res.redirect('/posts');
        console.log('here')
    });
    app.use('/signup', require('./signup'));
    app.use('/signin', require('./signin'));
    app.use('/signout', require('./signout'));
    app.use('/posts', require('./posts'));
}
