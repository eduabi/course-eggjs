'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/user/add', controller.user.addUser);
  router.get('/user/delete', controller.user.deleteUser);
  router.get('/user/update', controller.user.updateUser);
  router.get('/user/query', controller.user.findUser);
};
