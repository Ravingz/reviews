const { Pool, Client } = require('pg')
const connectionString = 'postgressql://postgres:@54.193.85.171:5432/postgres'

const pool = new Pool({
  connectionString: connectionString
})

// pool.query('SELECT * from reviews where restaurant_id = 4332', (err, res) => {
//   console.log(err, res)
// })

// const client = new Client({
//   connectionString: connectionString
// })

// client.connect()

// client.query('SELECT * from reviews where restaurant_id = 4332', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

module.exports =  pool;