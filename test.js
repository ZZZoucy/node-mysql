// 引入mysql
var mysql = require("mysql");
// 连接数据库的信息
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
});
// 连接数据库
connection.connect();
// 注意：mysql的编码方式永远不能设为 utf8，有错误！要设为 utf8mb4
// 执行查询语句 —— 创建数据库
connection.query("CREATE DATABASE IF NOT EXISTS zou DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_unicode_520_ci;", function (error, results, fields) {
    if (error) throw error;
    console.log("创建数据库");
    console.log(results);
});
// 执行查询语句 —— 进入数据库
connection.query("USE zou");
// 执行查询语句 —— 创建数据表
connection.query(
    `CREATE TABLE IF NOT EXISTS user(
    name text,
    age int
)`,
    function (error, results, fields) {
        if (error) throw error;
        console.log("创建数据表");
        console.log(results);
    }
);

connection.end();
