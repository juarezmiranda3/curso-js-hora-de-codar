let express = require('express');
let app = express();

app.get('/', function(req, res) {

    res.send("Primeira rota com Express");
});

app.listen(3000, function() {
    console.log("A aplicacao está funcionando na porta 3000")
});