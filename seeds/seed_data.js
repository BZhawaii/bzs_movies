
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('movies').insert({id: 1, title:  'X-Men', year: 2000, genre: 'Sci-Fi'}),
        knex('movies').insert({id: 2, title:  'X-Men 2: X2', year: 2003, genre: 'Sci-Fi'}),
        knex('movies').insert({id: 3, title:  'X-Men 3: The Last Stand', year: 2006, genre: 'Sci-Fi'}),
        knex('movies').insert({id: 4, title:  'X-Men: Origins: Woverine', year: 2009, genre: 'Sci-Fi'}),
        knex('movies').insert({id: 5, title:  'X-Men: First Class', year: 2011, genre: 'Sci-Fi'}),
        knex('movies').insert({id: 6, title:  'X-Men: Days of Future Past', year: 2014, genre: 'Sci-Fi'}),
        knex('movies').insert({id: 7, title:  'X-Men: Apocalypse', year: 2016, genre: 'Sci-Fi'}),
        knex('movies').insert({id: 8, title:  'The Wolverine', year: 2013, genre: 'Sci-Fi'}),
        knex('movies').insert({id: 9, title:  'Deadpool', year: 2016, genre: 'Sci-Fi'}),

        knex('movies').insert({id: 10, title:  'Star Wars IV: A New Hope', year: 1977, genre: 'Sci-Fi'}),
        knex('movies').insert({id: 11, title:  'Star Wars V: The Empire Strikes Back', year: 1980, genre: 'Sci-Fi'}),
        knex('movies').insert({id: 12, title:  'Star Wars VI: Return of the Jedi', year: 1983, genre: 'Sci-Fi'}),
        knex('movies').insert({id: 13, title:  'Star Wars I: The Phantom Menace', year: 1999, genre: 'Sci-Fi'}),
        knex('movies').insert({id: 14, title:  'Star Wars II: Attack of the Clones', year: 2002, genre: 'Sci-Fi'}),
        knex('movies').insert({id: 15, title:  'Star Wars III: Revenge of the Sith', year: 2005, genre: 'Sci-Fi'}),

        knex('movies').insert({id: 16, title:  'Star Wars VII: The Force Awakens', year: 2015, genre: 'Sci-Fi'}),
        knex('movies').insert({id: 17, title:  'Star Wars: Rogue One', year: 2016, genre: 'Sci-Fi'}),
        knex('movies').insert({id: 18, title:  'Star Wars: The Clone Wars', year: 2008, genre: 'Animated'})

      ]);
    });
};
