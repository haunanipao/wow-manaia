exports.up = function (knex) {
  return knex.schema.createTable('wow', (table) => {
    table.increments('id ').primary()
    table.string('name')
    table.string('quote')
    table.string('github')
    table.string('linkedin')
    table.string('discord')
    table.string('bkg-colour')
    table.string('text-colour')
    table.string('social-colour')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('wow')
}
