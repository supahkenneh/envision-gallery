
exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          username: 'supahkenneh',
          email: 'email@email.com',
          password: '$2b$12$IfBy9rBEmOIy2knC1nEIn.iBV8vuY5HfI5bFc6ZnWeFBtiNxhzXiS'
        },
        {
          id: 2,
          username: 'grandluii',
          email: 'email1@email.com',
          password: '$2b$12$IfBy9rBEmOIy2knC1nEIn.iBV8vuY5HfI5bFc6ZnWeFBtiNxhzXiS'
        },
        {
          id: 3,
          username: 'henrymasan',
          email: 'email2@email.com',
          password: '$2b$12$IfBy9rBEmOIy2knC1nEIn.iBV8vuY5HfI5bFc6ZnWeFBtiNxhzXiS'
        },
      ]);
    });
};
