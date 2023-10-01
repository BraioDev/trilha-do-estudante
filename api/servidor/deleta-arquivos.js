const fs = require('fs');

fs.unlink('/temp/hello.txt', (err) => {
    if (err) {
        return console.log("Erro: ", err);
    }
    console.log("Sucessfuly deleted /temp/hello");
});
