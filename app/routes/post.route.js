var post = require('../controllers/post.controller');

module.exports = (app) => {
       var path = '/api/post';
    
       app.delete(path + '/delete/:id',post.deletePost)
       
       app.get(path + '/search/:search', post.search);
       

       app.get(path + '/all', post.getAll);
       app.post(path + '/create', post.create);
}