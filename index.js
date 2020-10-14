var express = require('express');
var app = express();

app.get('/', c_inicio);
app.get('/clientes', c_clientes);
app.get('/productos', c_productos);

function c_inicio(req, res){
    res.send('<h1>HOLA LAB04 RAIZ</h1>');
}

function c_clientes(req, res){
    res.send('<table border="1"><tr><td>Id</td><td>Clientes</td></tr><tr><td>1</td><td>Gloria S.A.C</td></tr><tr><td>2</td><td>Telefonica s.a.c</td></tr><tr><td>3</td><td>Bitel S.A</td></tr><tr><td>4</td><td>Google INC</td></tr></table>');
}

function c_productos(req, res){
    res.send('<table border="1"><tr><td>Id</td><td>Productos</td></tr><tr><td>1</td><td>Asesoria TIC</td></tr><tr><td>2</td><td>Software</td></tr><tr><td>3</td><td>HardWare</td></tr><tr><td>4</td><td>Mantenimiento computadoras</td></tr></table>');
}

function c_server(req,res){
    var host = server.address().address;
    var port = server.address().port;
    console.log(host + ' : '+port);

}

var server = app.listen(5000,c_server);