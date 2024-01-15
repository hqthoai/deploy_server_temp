const pageViews = require('../utils/ga4/pageViews');
const bookRouter = require('./bookRouter');
function route (app) {
    app.use('/api/books', bookRouter);


    app.use('/api/get-page-view', pageViews);
    app.use('/', (req, res)=>{
        res.send("Hello, world!");
    });
}

module.exports = route;