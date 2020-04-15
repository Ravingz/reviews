const { Pool, Client } = require('pg')
// const connectionString = 'postgressql://postgres:austin@54.215.252.197:5432/postgres'

// const pool = new Pool({
//   connectionString: connectionString
// })

const pool = new Pool({
  user: 'postgres',
  host: '54.215.252.197',
  database: 'postgres',
  password: 'austin',
  port: 5432,
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