//Express package
const express = require("express");
const apiRoutes = require('./routes/apiRoutes/index');
const htmlRoutes = require('./routes/htmlRoutes/index');
const PORT = process.env.PORT || 3003; //Set port
const app = express(); //Express app

//Express middleware
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});