// var mysql = require('mysql');
// var http = require('http');

// var con = mysql.createConnection({
//  host: "3306",
//  user: "root",
//  password: "pass",
//  database: "Econsumo"
// });

// http.createServer(function (req, res) {
//  if (req.url === '/data') {
//     con.connect(function(err) {
//       if (err) throw err;
//       con.query("SELECT * FROM tabela", function (err, result) {
//         if (err) throw err;
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(result));
//       });
//     });
//  } else {
//     res.writeHead(404, {'Content-Type': 'text/html'});
//     res.end('<h1>Página não encontrada</h1>');
//  }
// }).listen(3000);