const mysql = require('mysql');

var mysqlConneection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'work',
    multipleStatements: true
});
mysqlConneection.connect((err)=>{
    if(!err) {
        // console.log('Connected');
    } else {
        console.log('Connection Failed.');
    }
});

module.exports = mysqlConneection;