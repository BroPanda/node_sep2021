const express = require(`express`); // get express
const {engine} = require(`express-handlebars`);// get express-handlebars(hbs) for show data in html pages
const path = require("path");

const app = express(); // launch express
app.use(express.json()); // app can read JSON
app.use(express.urlencoded({extended: true})) // dont know but just needed :(

//hbs settings
app.use(express.static(path.join(__dirname, `static`))); // use `static` folder for our pages and path dir
app.set(`view engine`, `.hbs`); // set `.hbs` files like html for app
app.engine(`.hbs`, engine({defaultLayout: false})); // for `.hbs` files use engine (from require(`express-handlebars`)); defaultLayout: false - we are not use folder tree;
app.set(`views`, path.join(__dirname, `static`)); // our views are in dir/static


users = [
    {login: `login`, password: `password`},
    {login: `login1`, password: `password1`},
    {login: `login2`, password: `password2`}
];

// app.get(`/`, (req, res) => {
//     res.send(`hello`);
// });
//
// app.get(`/`, (req, res) => {
//     res.json(users);
// });

// `/login` page
app.get(`/login`, (req, res) => {
    res.render(`login`);
})

app.post(`/login`, (req, res) => {
    users.push(req.body);
    res.redirect(`users`)

})

// `/users` page
app.get(`/users`, (req, res) => {
    res.render(`users`, {users});
});

// app.get(`/users/:id`, (req, res) => {
//     const {id} = req.params
//     res.json(users[id])
//
// });

app.get(`/users/:id`, (req, res) => {
    const {id} = req.query
    res.json(users[id])
    console.log(req.query)

});






app.listen(5200, () => {  // listen app at port 5200
    console.log(`server at 5200`);
});

