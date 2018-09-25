const bookshelf = require('./bookshelf');

class User extends bookshelf.Model {
  get tableName() { return 'users'; }
  get hasTimestamps() { return true; }

  photos() {
    return this.hasMany('Photo', 'owner');
  };
};

module.exports = bookshelf.model('User', User);