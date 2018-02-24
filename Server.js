var express=require('express');
var app=express();
var instagram=require('instagram-node').instagram();
var port=process.env.PORT||4000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

instagram.use({
    client_id: "76b2f9c9957b4641a477f90881ada6b1",
    client_secret: "5261e837e7ec46a0bc20da901c10c921"
});

app.get('/', function (req, res, next) {
    instagram.media_popular(function (err, medias, remaining, limit) {
        if(err) return next(err);
        res.render('../public/index', {grams: medias});
    });
});


app.listen(port, function () {
   console.log('Successfully running on port '+ port);
});