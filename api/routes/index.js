const bodyParser = require('body-parser');
const people = require('./peopleRoute');
const levels = require('./levelsRoute');
const classes = require('./classesRoute');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(people, 
            levels,
            classes);
    //app.get('/', (req, res) => res.send('Hell-o'));
}