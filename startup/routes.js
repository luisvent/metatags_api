const error = require('../middleware/error_middleware');
const webRouter = require("../routes/web_route");
const notFoundRouter = require("../routes/not_found_route");

const initRoutes = (app) => {
  app.use('/metadata', webRouter);

  app.use(error);
  app.use('*', notFoundRouter)
}

module.exports = {
  init: initRoutes
}
