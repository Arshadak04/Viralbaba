
var express = require('express');
var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

router.get('/', function(req, res) {
    res.sendFile('./index.html',{ root: __dirname});
});

router.post('/uploader', multipartMiddleware, function(req, res) {
    var fs = require('fs');

    fs.readFile(req.files.upload.path, function (err, data) {
        // console.log(req.files.upload.path);
        var newPath = __dirname + '/public/uploads/' + req.files.upload.name;
        console.log(newPath);
        fs.writeFile(newPath, data, function (err) {
            if (err) console.log({err: err});
            else {
                html = "";
                html += "<script type='text/javascript'>";
                html += "    var funcNum = " + req.query.CKEditorFuncNum + ";";
                html += "    var url     = \"public/uploads/" + req.files.upload.name + "\";";//yaha dekh lena thoda
                html += "    var message = \"Uploaded file successfully\";";
                html += "";
            
                html += "    window.parent.CKEDITOR.tools.callFunction(funcNum, url, message);";
                html += "</script>";
                res.send(html);
            }
        });
    });
});
// console.log(url);
module.exports = router;

// html += "    const funcNum = " + req.query.CKEditorFuncNum + ";";
// html += "    const url     = \"/uploads/" + req.files.upload.name + "\";";
// html += "    const message = \"Uploaded file successfully\";";
// "<script type='text/javascript'>window.parent.CKEDITOR.tools.callFunction($function_number, '$url', '$message');</script>";