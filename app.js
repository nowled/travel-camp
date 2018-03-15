var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
var campgrounds = [
  {name: "Yellow Creek", image: "https://cdn.pixabay.com/photo/2017/07/17/16/04/turkey-2512898__480.jpg"},
  {name: "Lovely Creek", image: "https://cdn.pixabay.com/photo/2017/10/07/01/01/bach-leek-2825197__480.jpg"},
  {name: "Garbage Creek", image: "https://cdn.pixabay.com/photo/2017/11/24/03/04/tent-2974050__480.jpg"},
  {name: "Yellow Creek", image: "https://cdn.pixabay.com/photo/2017/09/26/13/50/rv-2788677__480.jpg"},
  {name: "Lovely Creek", image: "https://cdn.pixabay.com/photo/2017/08/13/20/20/cabin-2638460__480.jpg"},
  {name: "Garbage Creek", image: "https://cdn.pixabay.com/photo/2017/07/17/16/03/turkey-2512893__480.jpg "},
  {name: "Yellow Creek", image: "https://cdn.pixabay.com/photo/2017/04/23/02/25/shasta-2252847__480.jpg "},
  {name: "Lovely Creek", image: "https://cdn.pixabay.com/photo/2016/12/08/17/45/lake-sara-1892494__480.jpg"},
  {name: "Garbage Creek", image: "https://cdn.pixabay.com/photo/2016/05/25/08/13/shelter-1414170__480.jpg "}

];


app.get('/', function(req,res){
    res.render("landing"); 
});

app.get("/campgrounds", function(req, res){
      //the camp grounds on the right refers to the array
      //you pass to the array what you want to be passed
     res.render("campgrounds", {campgrounds: campgrounds});
});
app.post("/campgrounds", function(req,res){
   //testing
  var name =  req.body.name;
  var image =  req.body.image;
  var newCampGround = { name: name, image: image}
   //get data from form and add to campgrounds array
   campgrounds.push(newCampGround);
   //redirect back to campgrounds page
   res.redirect("/campgrounds");
});

//create a new campground and redirect to campgrouds post
app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");

});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log('server has started...');
})
