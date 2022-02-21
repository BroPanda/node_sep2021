const express = require(`express`);
const {engine} = require(`express-handlebars`);
const path = require(`path`);

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, `static`)));

app.set(`view engine`, `.hbs`);
app.engine(`.hbs`, engine({defaultLayout: false}));
app.set(`views`, path.join(__dirname, `static`));

//==================================================

const users = [];
let error = ``;

app.get(`/`, (req, res) => {
    res.render(`home`);
})

app.post(`/`, ({body}, res) => {
    const userEmailExist = users.some(user => user.email === body.email);
    if (userEmailExist) {
        error = `this email exist`;
        res.redirect(`/error`);
        return;
    }

    users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1});
    console.log(users);

    res.redirect(`/users`);
})


app.get(`/users`, ({query}, res) => {
    if (query.city || query.age) {

        let usersFiltered = [];
        usersFiltered = users.filter(user => query.city === user.city || query.age === user.age)

        if (!usersFiltered.length) {
            error = `no users by your query`;
            res.redirect(`/error`);
            return;
        }

        res.render(`users`, {users: usersFiltered});
        return;
    }
    res.render(`users`, {users});
});

app.get(`/users/:id`, (req, res) => {
    const user = users.find(user => user.id === +req.params.id);
    if (!user) {
        error = `user id ${req.params.id} not exist`;
        res.redirect(`/error`);
        return;
    }
    res.render(`userInfo`, {user});
});

app.get(`/users`, (req, res) => {
    res.render(`users`, {users});
});


app.get(`/error`, (req, res) => {
    res.render(`error`, {error});
});


app.use((req, res) => {
    res.render(`notFound`);
});


app.listen(5200, () => {
    console.log(`server start`);
});


