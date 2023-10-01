const { defineConfig } = require("cypress");
const { Client } = require('pg')

module.exports = defineConfig({
  env: {
    FRONT_URL :'http://localhost:3000'
  },
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        async connectDB(query){
          const client = new Client({
            user: "postgres",
            password: "root",
            host: "localhost",
            database: "perfume",
            ssl: false,
            port: 5432
          })
          await client.connect()
          const res = await client.query(query)
          await client.end()
          return res.rows;
        }
      })
    },
  },
});
