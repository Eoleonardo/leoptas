const {Client} = require("pg");

const client = new Client({
    user:"postgres",
    password:"senha_postgres",
    host:"localhost",
    porta:"5433",
    database: "PlayToWin"
})

client.connect()
.then(() =>{
    console.log("Conectado ao banco de dados postgreSQL")
})
.catch((err) => {
console.error(`Error: ${err}`)
})

func