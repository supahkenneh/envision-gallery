
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'supahkenneh', email: 'email@email.com', password: 'password' },
        { id: 2, username: 'grandluii', email: 'email1@email.com', password: 'password' },
        { id: 3, username: 'henrymasan', email: 'email2@email.com', password: 'password' }
      ]);
    });
};
