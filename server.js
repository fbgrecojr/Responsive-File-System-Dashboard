const   fs      = require('fs'),
        express = require("express"),		
        app     = express(),								
        server 	= require('http').createServer(app),
        io		= require('socket.io')(server),
        path    = require("path"),
        port	= process.env.PORT || 8080;

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
	res.sendFile('index.html');
});

io.on('connection', function(client){
    console.log("NEW CONNECTION");
    
    var p = "./classes/cs395";
    
    //READ ALL FILES FROM A DIRECTORY AND EMIT THE NAME OF THE FILE
    fs.readdir(p, function(err, files){
        if (err) throw err;
        
        files.forEach(function (file) {
            if (files.length == 1 && file == '.DS_Store'){
                io.emit('receive_file', null);
            } else {
                fs.stat(p + '/' + file, function(err, stats){
                    if (err) throw err;

                    if (stats.isFile() && file != '.DS_Store'){
                        var ext = path.extname(file);
                        var name = path.basename(p + '/' + file, ext);
                        io.emit('receive_file', name);
                    }
                });
                
            }
        });
        
        if (files.length == 0) {
            io.emit('receive_file', null);
        }
        
        console.log(files);
    });
    
});

server.listen(port, function(){
	console.log("LISTENING on port 8080");
});