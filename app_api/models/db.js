var mongoose = require('mongoose' );
require("./mekansema"); 
var dbURI = "mongodb+srv://mekan32:qwas12@mekanbul.o4n23jw.mongodb.net/mekanbul?retryWrites=true&w=majority";

mongoose.connect(dbURI);

function kapat(msg,callback){
mongoose.connection.close(function(){
    console.log(msg);
    callback();
});
}
process.on("SIGINT", function () {
    kapat("uygulama kapatıldı", function(){
        process.exit(0);
    });
});


mongoose.connection.on("connected", function(){
    console.log(dbURI + "adresindeki veritabanına bağlanıldı\n");
});
mongoose.connection.on("error", function(){
    console.log("Baglantı hatası\n");
});
mongoose.connection.on("disconnected", function(){
    console.log("baglantı kesildi\n");
});