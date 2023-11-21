const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const app = express();

const productosRouters = require("./routes/productosRoutes");
const indexRouter = require("./routes/index");

app.set('views', path.join(__dirname, './views'));
app.set('view engine','ejs');
app.use(express.static("../public"));

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.listen(3000,()=> console.log("server is running on port 3000"))


app.use(productosRouters);
app.use("/", indexRouter)