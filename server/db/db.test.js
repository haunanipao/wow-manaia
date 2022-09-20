const knex = require('knex')
const config = require('./knexfile')
const testCon = knex(config.test)
const { getWows, addWow } = require('./db')

beforeAll(async () => {
  await testCon.migrate.latest()
})

beforeEach(async () => {
  await testCon.seed.run()
})

afterAll(async () => {
  await testCon.destroy()
})

describe('getWows', () => {
  it('get all the WOWs', () => {
    return getWows(testCon).then((data) => {
      expect(data).toHaveLength(data.length)
    })
  })
})

describe('addWow', () => {
  it('add a new WOW to the db', () => {
    const testWow = { name: 'Nani', quote: 'Practice Makes Permanent' }
    return addWow(testWow, testCon).then((data) => {
      expect(data.name).toBe('Nani')
      expect(data.quote).toBe('Practice Makes Permanent')
    })
  })
})
