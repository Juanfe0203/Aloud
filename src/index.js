const express = require('express');
const morgan = require('Morgan');
const exphbs = require('express-handlebars');
const path = require('path');

//initializations
const app = express();

//settings
app.set('port', process.env.PORT || 4000);
app.engine('.hbs', exphbs({
    defaultlayout: 'main', 
    layoutsDir: path.join()
}))

//Midlewares
app.use(morgan("dev"));

//Global Variables


//Routes
app.use(require('./routes'));

//Public

//Starting the server
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
})