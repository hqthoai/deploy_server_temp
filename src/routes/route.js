const pageViews = require('../utils/ga4/pageViews');
const bookRouter = require('./bookRouter');
const topicRouter = require('./topicRouter');
const levelRouter = require('./levelRouter');
const documentRouter = require('./documentRouter');
const excerciseRouter = require('./excerciseRouter');
const partRouter = require('./partRouter');
const questionRouter = require('./questionRouter');
const skillRouter = require('./skillRouter');
const userRouter = require('./userRouter');

function route (app) {
    app.use('/api/books', bookRouter);
    app.use('/api/documents', documentRouter);
    app.use('/api/excercises', excerciseRouter);
    app.use('/api/levels', levelRouter);
    app.use('/api/parts', partRouter);
    app.use('/api/questions', questionRouter);
    app.use('/api/skills', skillRouter);
    app.use('/api/topics', topicRouter);
    app.use('/api/users', userRouter);
    

    app.use('/api/get-page-view', pageViews);
    app.use('/', (req, res)=>{
        res.send("Hello, world!");
    });
}

module.exports = route;