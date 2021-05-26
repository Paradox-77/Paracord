const fs = require('fs')
fs.readFile("./test.txt", 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    var result = data.replace("@{tester1}", "TestComplete")

    fs.writeFile("./test.txt", result, 'utf8', function (err) {
        if (err) console.log(err);
    })
})