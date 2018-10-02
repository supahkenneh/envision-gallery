const bookshelf = require('./bookshelf');

class Photo extends bookshelf.Model {
  get tableName() { return 'photos'; }
  get hasTimestamps() { return true; }

  owner() {
    return this.belongsTo('User', 'owner');
  };
};

module.exports = bookshelf.model('Photo', Photo);