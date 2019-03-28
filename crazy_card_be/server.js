const express = require("express");
const app = express();
var cors = require("cors");

app.use(express.json());
app.use(cors());

const userRegistered = [];

app.post("/usercards", (req, res) => {
  const userdetail = {
    userid: userRegistered.length + 1,
    name: req.body.name,
    jobtype: req.body.jobtype,
    DOB: req.body.DOB,
    houseNum: req.body.houseNum,
    annualIncome: req.body.annualIncome,
    postcode: req.body.postcode,
    studentLife: req.body.studentLife,
    liquidCard: req.body.liquidCard
  };
  userRegistered.push(userdetail);

  if (userRegistered.length > 3) {
    var lastThreeUsers = Object.keys(userRegistered)
      .map(function(key) {
        return userRegistered[key];
      })
      .slice(-3);
    res.send(lastThreeUsers);
  } else {
    res.send(userRegistered);
  }
});

app.get("/usercards", (req, res) => {
  res.send(userRegistered);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
