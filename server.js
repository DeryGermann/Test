let express = require('express');
let app = express();
let port = process.env.PORT || 3001;
let bodyParser = require('body-parser');
const cors = require('cors');

let mongoose = require('mongoose');
let account = require('./models/modelAccount');
let security = require('./models/modelSecurity');
let public = require('./models/modelPublic');
let puzzle = require('./models/modelPuzzle');
let requests = require('./models/modelRequests');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CapstonePuzzleDB');

app.use(cors());

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb', extended: true}));

// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
};

const routes = require('./routes');
routes(app);

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});