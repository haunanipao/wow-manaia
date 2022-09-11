/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('wow').del()
  await knex('wow').insert([
    {
      id: 1,
      name: 'Trish',
      quote: 'Recall, Reflect, Relax.',
      github: 'https://github.com/trish-tararo-03',
      linkedin: 'https://www.linkedin.com/in/trish-tararo-145aa6211/ ',
      discord: 'Trish Tararo#6102',
      deva: '',
    },
    {
      id: 2,
      name: 'Sarah',
      quote: 'When I feel a celebration inside, I commit.',
      github: 'https://github.com/sarah-emerson',
      linkedin: '',
      discord: 'Sarah E#3547',
      deva: '',
    },
    {
      id: 3,
      name: 'JV',
      quote: 'Bugs live in your confusion.',
      github: 'https://github.com/joshuavial',
      linkedin: '',
      discord: '',
      deva: '',
    },
    {
      id: 4,
      name: 'Nani',
      quote: 'Practice makes Permanent.',
      github: 'https://github.com/haunanipao',
      linkedin: 'https://www.linkedin.com/in/haunani',
      discord: 'haunanipao#9472',
      deva: '',
    },
    {
      id: 5,
      name: 'Whakataukī ',
      quote: 'There is power in small things.',
      github: '',
      linkedin: '',
      discord: '',
      deva: '',
    },
    {
      id: 6,
      name: 'JV',
      quote: 'Testing is a regal art 👑.',
      github: '',
      linkedin: '',
      discord: '',
      deva: '',
    },
  ])
}
