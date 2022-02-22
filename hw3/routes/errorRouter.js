const {Router} = require(`express`);

const errorRouter = Router();

errorRouter.get(`/error`, (req, res) => {
    res.render(`error`, {error});
});

module.exports = errorRouter;