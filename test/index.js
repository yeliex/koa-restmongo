const app = require('koa');
const router = require('koa-router')();
const koabody = require('koa-body');

app.use(function *handleErrors(next) {
  try {
    yield next;
  } catch (e) {
    console.log(e);
  }
});

app.use(koabody());
app.use(function* handleRequest(next) {
  this._GET = this.query;
  this._POST = this.request.body;
  yield next;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
