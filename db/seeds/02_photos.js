
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(function () {
      // Inserts seed entries
      return knex('photos').insert([
        { id: 1, link: 'https://i.redd.it/8ujk891b8vo11.jpg', owner: 1 },
        { id: 2, link: 'https://i.redd.it/5ng14ep6i0p11.jpg', owner: 2 },
        { id: 3, link: 'https://i.redd.it/5sv4h2cjh0p11.jpg', owner: 3 }
      ]);
    });
};
