const { Pool, Client } = require('pg')
const connectionString = 'postgressql://austincapaviella:@localhost:5432/austincapaviella'

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