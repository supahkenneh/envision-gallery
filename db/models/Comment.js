const bookshelf = require('./bookshelf');

class Comment extends bookshelf.Model {
  get tableName() { return 'comments'; }
  get hasTimestamps() { return true; }

  author() {
    return this.belongsTo('User', 'author');
  };

  photo() {
    return this.belongsTo('Photo', 'photo_id');
  };
};

module.exports = bookshelf.model('Comment', Comment);