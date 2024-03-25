const db = require("../db/conn");
const {DataTypes} = require("sequelize");

const usuario = db.define("Usuario", {
nickname: {
type: DataTypes.STRING,
required: true,
},
nome : {
type: DataTypes.STRING,
required: true,
},
});


module.exports = usuario;
