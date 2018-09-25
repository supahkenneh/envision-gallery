const bookshelf = require('./bookshelf');

class Photo extends bookshelf.Model {
  get tableName() { return 'photos'; }
  get hasTimestamps() { return true; }

  user() {
    return this.belongsTo('User', 'users.id');
  };
};

module.exports = bookshelf.model('Photo', Photo);