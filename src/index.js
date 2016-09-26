const connection = require('../lib/db_connection');

/**
 * 初始化请求配置类
 * @param db 数据库配置
 * @param prefix url前缀
 * @returns generator
 */
module.exports = ({ db, prefix = '/' }) => {
  const mongo = connection(db.host, db.option);
  return function* restmongo(next) {
    // 获取请求中的request&body
    const request = this.request;
    const { _GET, _POST, originUrl, authorized } = request;
    // 分割url参数
    const params = originUrl.split(prefix)[1].split('/');

    // 权限校验
    if (!authorized) {
      // unauthorized
    }

    yield next; //应该可以直接跳出执行 不一定要next
  };
};
