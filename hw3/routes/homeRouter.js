const {Router} = require(`express`);
const users = require(`../db/users`);
let error = require(`../db/errors`);


const homeRouter = Router();

homeRouter.get(`/`, (req, res) => {
    res.render(`home`);
})

homeRouter.post(`/`, ({body}, res) => {
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


module.exports =  homeRouter;