const {Router} = require(`express`);
const users = require(`../db/users`);
let error = require(`../db/errors`);

const userRouter = Router();

userRouter.get(`/`, (req, res) => {
    res.render(`users`, {users});
});

userRouter.get(`/:id`, (req, res) => {
    const user = users.find(user => user.id === +req.params.id);
    if (!user) {
        error = `user id ${req.params.id} not exist`;
        res.redirect(`/error`);
        return;
    }
    res.render(`userInfo`, {user});
});

userRouter.get(`/`, ({query}, res) => {
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


module.exports = userRouter;