import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); // To send the raw data in the body.
app.use(express.static("public")); // To define the static files location.
let array = [];
let index;
app.get("", (req, res) => {
  let dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let time = new Date();
  let date = time.getDate();
  let year = time.getFullYear();
  let day = dayArray[time.getDay()];
  let timedata = `${day} ${date},${year}`;

  res.render("header.ejs", {
    data: array,
    todayDate: timedata,
  });
});

app.post("/submit", (req, res) => {
  let todoText = req.body["text"];
  array.push(todoText);
  console.log(array);
  res.redirect("/");
});

app.get("/dlt", (req, res) => {
 for(let i = 0; i<array.length; i++){

 }
  // let newArray = array.splice(index, 1);

  console.log(newArray);
  res.redirect("/");
});

app.get("/today",(req,res)=>{
  res.redirect("/")
})
app.get("/work",(req,res)=>{
  res.send("Working in progess");
})

app.listen(port, () => {
  console.log("listening on port", port);
});
