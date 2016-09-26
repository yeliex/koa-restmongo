// 数据库连接类
const mongo = require('node.mongo');

let connection;

module.exports = (...options) => {
  if (connection && options) {
    throw new Error('db_connection would only init once');
  }

  return connection || (() => {
    connection = mongo(...options);
    return connection;
  })();
};
