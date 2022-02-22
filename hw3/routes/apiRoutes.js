const {Router} = require(`express`);
const userRouter = require(`./userRouter`);
const homeRouter = require(`./homeRouter`);

const routes = Router();

routes.use(`/`, homeRouter);
routes.use(`/users`, userRouter);
routes.use((req, res) => {
    res.render(`notFound`);
});

module.exports = routes;